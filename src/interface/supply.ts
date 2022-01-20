import { Fuel } from "./fuel";
import { Vehicle } from "./vehicle";

export interface Supply {
  id?: number;
  date: number;
  value: number;
  liters: number;
  km_driven?: number;
  fuel_id: number;
  vehicle_id: number;
}

export interface SupplyWithRelations extends Supply {
  vehicle: Vehicle;
  fuel: Fuel;
}

export interface ListAllSuppliesFilters {
  orderBy?: "date" | "km_driven";
  filterBy?: {
    openSupplies: boolean;
  };
}
