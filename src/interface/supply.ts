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
  average_km_driven?: number;
  observation?: string;
}

export interface SupplyWithRelations extends Supply {
  vehicle: Vehicle;
  fuel: Fuel;
}

export interface SupplyWithFuelRelation extends Supply {
  fuel: Fuel;
}

export interface SupplyByVehicleWithRelations {
  vehicle: Vehicle;
  supplies: Omit<SupplyWithRelations, 'vehicle'>[];
}

export interface ListAllSuppliesFilters {
  orderBy?: "date" | "km_driven";
  filterBy?: {
    openSupplies?: boolean;
  };
}

export interface ListAllSuppliesByVehicleFilters {
  vehiclesId: number[];
  orderBy?: "date";
  limit?: number;
  filterBy?: {
    openSupplies?: boolean;
  };
}