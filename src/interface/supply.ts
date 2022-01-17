export interface Supply {
  id?: number;
  date: Date;
  value: number;
  liters: number;
  km_driven?:number;
  fuel_id: number;
  vehicle_id: number;
}