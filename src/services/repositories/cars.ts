import { CarInterface, NewCarInterface } from "../../interface/car";

const carsList: CarInterface[] = [
  {
    id: 1,
    name: 'Gol Vermelho'
  }
]

export const listCars = async (): Promise<CarInterface[]> => {
  return carsList;
}

export const addCar = async (data: NewCarInterface): Promise<CarInterface> => {
  const newCar = {
    id: carsList.length + 1,
    ...data
  }

  carsList.push(newCar);

  return newCar;
}