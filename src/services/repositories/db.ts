import Dexie, { Table } from 'dexie';
import { Car } from '../../interface/car';

export class DB extends Dexie {
  cars!: Table<Car>; 

  constructor() {
    super('o_gastao_db');
    this.version(1).stores({
      cars: '++id, name'
    });
  }
}

export const localDB = new DB();