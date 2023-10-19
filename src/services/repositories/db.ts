import Dexie, { Table } from 'dexie';
import { Vehicle } from '../../interface/vehicle';
import { Fuel } from '../../interface/fuel';
import { Supply } from '../../interface/supply';

export class DB extends Dexie {
  fuels!: Table<Fuel>; 
  vehicles!: Table<Vehicle>;
  supplies!: Table<Supply>;

  constructor() {
    super('o_gastao_db');
    this.version(1).stores({
      fuels: '++id, name',
      vehicles: '++id, name',
      supplies: '++id, vehicle_id, fuel_id, km_driven, date, observation',
    });
  }
}

export const localDB = new DB();