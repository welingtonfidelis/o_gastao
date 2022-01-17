import { fuels } from "./data/fuels";
import { localDB, DB } from "./db";

class FuelDB {
  db: DB;

  constructor() {
    this.db = localDB;
  }

  findAll() {
    return this.db.fuels.toArray()
  }
}

export const fuelDB = new FuelDB();

localDB.on('populate', async () => {
  await localDB.fuels.bulkAdd(fuels);
});