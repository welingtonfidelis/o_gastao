import {
  ListAllSuppliesFilters,
  Supply,
  SupplyWithRelations,
} from "../../interface/supply";
import { localDB, DB } from "./db";

class SupplyDB {
  db: DB;

  constructor() {
    this.db = localDB;
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
    for (let i = 0; i < supplies.length; i += 1) {
      const item = supplies[i];
      const [vehicle] = await this.db.vehicles
        .where("id")
        .equals(item.vehicle_id)
        .toArray();
      const [fuel] = await this.db.fuels
        .where("id")
        .equals(item.fuel_id)
        .toArray();

      suppliesWithRelations.push({
        ...item,
        vehicle,
        fuel,
      });
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
