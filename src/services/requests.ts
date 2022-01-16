import { toast } from "react-toastify";

import { NewCarInterface } from "../interface/car";
import { addCar, listCars } from "./repositories/cars";

export const listCar = async () => {
  try {
    return listCars();
  } catch (error) {
    console.log("Save new car error", error);

    toast.error("Houve um erro ao salvar.", { autoClose: false });
  }
};

export const saveNewCar = async (data: NewCarInterface) => {
  try {
    const newCar = await addCar(data);

    toast.success("Salvo com sucesso", { autoClose: 7000 });
    return newCar;
  } catch (error) {
    console.log("Save new car error", error);

    toast.error("Houve um erro ao salvar.", { autoClose: false });
  }
};
