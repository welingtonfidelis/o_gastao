import { Vehicle } from "../../interface/vehicle";
import { localDB, DB } from "./db";

class VehicleDB {
  db: DB;

  constructor() {
    this.db = localDB;
  }

  findAll() {
    return this.db.vehicles.toArray()
  }

  findById(id: number) {
    return this.db.vehicles.where('id').equals(id).toArray();
  }

  add(data: Vehicle) {
    return this.db.vehicles.add(data); 
  }

  update(data: Vehicle) {
    return this.db.vehicles.update(data.id!, data);
  }

  delete(id: number) {
    return this.db.vehicles.delete(id);
  }
}

export const vehicleDB = new VehicleDB();