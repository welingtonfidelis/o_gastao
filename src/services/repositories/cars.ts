import { Car } from "../../interface/car";
import { localDB, DB } from "./db";

class CarDB {
  db: DB;

  constructor() {
    this.db = localDB;
  }

  findAll() {
    return this.db.cars.toArray()
  }

  findById(id: number) {
    return this.db.cars.where('id').equals(id).toArray();
  }

  add(data: Car) {
    return this.db.cars.add(data); 
  }

  update(data: Car) {
    return this.db.cars.update(data.id!, data);
  }

  delete(id: number) {
    return this.db.cars.delete(id);
  }
}

export const carDB = new CarDB();