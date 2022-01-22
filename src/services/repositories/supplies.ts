import {
  ListAllSuppliesByVehicleFilters,
  ListAllSuppliesFilters,
  Supply,
  SupplyByVehicleWithRelations,
  SupplyWithRelations,
} from "../../interface/supply";
import { localDB, DB } from "./db";
import { fuelDB } from "./fuels";

class SupplyDB {
  db: DB;

  constructor() {
    this.db = localDB;
  }

  private async fuelsToObj(): Promise<any> {
    const fuels = await fuelDB.findAll();
    let fuelObj = {};

    if (fuels && fuels.length) {
      fuelObj = fuels.reduce((acc: any, item) => {
        acc[item.id!] = item;

        return acc;
      }, {});
    }

    return fuelObj;
  }

  async findAll(
    filters?: ListAllSuppliesFilters
  ): Promise<SupplyWithRelations[]> {
    let filterFunction = (item: Supply) => true;

    if (
      filters?.filterBy?.openSupplies ||
      filters?.filterBy?.openSupplies !== undefined
    ) {
      filterFunction = (item: Supply) =>
        filters?.filterBy?.openSupplies
          ? item.km_driven === undefined
          : item.km_driven !== undefined;
    }

    const supplies: Supply[] = await this.db.supplies
      .reverse()
      .filter(filterFunction)
      .sortBy(filters?.orderBy || "");

    const suppliesWithRelations = [];
    if (supplies && supplies.length) {
      const fuels = await this.fuelsToObj();

      for (let i = 0; i < supplies.length; i += 1) {
        const item = supplies[i];
        
        item.average_km_driven = +((item.km_driven || 0) / item.liters).toPrecision(3);
        
        const [vehicle] = await this.db.vehicles
          .where("id")
          .equals(item.vehicle_id)
          .toArray();

        suppliesWithRelations.push({
          ...item,
          vehicle,
          fuel: fuels[item.fuel_id],
        });
      }
    }

    return suppliesWithRelations;
  }

  async findAllByVehicle(
    filters: ListAllSuppliesByVehicleFilters
  ): Promise<SupplyByVehicleWithRelations[]> {
    const vehicles = await this.db.vehicles
      .filter((item) => filters.vehiclesId.includes(item.id!))
      .toArray();
    const suppliesWithRelations: SupplyByVehicleWithRelations[] = [];

    let filterFunction = (item: Supply) => true;

    if (vehicles && vehicles.length) {
      const fuels = await this.fuelsToObj();
      if (
        filters?.filterBy?.openSupplies ||
        filters?.filterBy?.openSupplies !== undefined
      ) {
        filterFunction = (item: Supply) =>
          filters?.filterBy?.openSupplies
            ? item.km_driven === undefined
            : item.km_driven !== undefined;
      }

      for (let i = 0; i < vehicles.length; i += 1) {
        const item = vehicles[i];
        const supplyWithFuel = [];
        const supplies = await this.db.supplies
          .where("vehicle_id")
          .equals(item.id!)
          .limit(filters.limit || 100)
          .reverse()
          .filter(filterFunction)
          .toArray();

        
        for (let j = 0; j < supplies.length; j += 1) {
          const subItem = supplies[j];
          
          subItem.average_km_driven = +((subItem.km_driven || 0) / subItem.liters).toPrecision(3);
          supplyWithFuel.push({ ...subItem, fuel: fuels[subItem.fuel_id] });
        }

        suppliesWithRelations.push({
          vehicle: item,
          supplies: supplyWithFuel,
        });
      }
    }

    return suppliesWithRelations;
  }

  findById(id: number) {
    return this.db.supplies.where("id").equals(id).toArray();
  }

  add(data: Supply) {
    return this.db.supplies.add(data);
  }

  update(data: Supply) {
    return this.db.supplies.update(data.id!, data);
  }

  delete(id: number) {
    return this.db.supplies.delete(id);
  }
}

export const supplyDB = new SupplyDB();
