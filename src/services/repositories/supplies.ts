import { Supply } from "../../interface/supply";
import { localDB, DB } from "./db";

class SupplyDB {
  db: DB;

  constructor() {
    this.db = localDB;
  }

  findAll() {
    return this.db.supplies.toArray()
  }

  findById(id: number) {
    return this.db.supplies.where('id').equals(id).toArray();
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