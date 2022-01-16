export interface CarInterface {
  id: number;
  name: string;
}

export interface NewCarInterface extends Omit<CarInterface, 'id'> {}