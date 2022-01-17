import { toast } from "react-toastify";
import i18n from 'i18next';

import { NewCarInterface } from "../interface/car";
import { addCar, listCars } from "./repositories/cars";


const executeRequest = async (
  request: (data?: any) => any,
  data?: any,
  successMessage?: string,
  errorMessage?: string
  ) => {
  try {
    const response = await request(data);

    if (successMessage) toast.success("Salvo com sucesso", { autoClose: 7000 });

    return response;
  } catch (error) {
    const message = errorMessage || i18n.t('general.message_error');
    console.log(message, error);
    toast.error(message, { autoClose: false });
  }
};

export const listCar = () => {
  return executeRequest(listCars);
};

export const saveNewCar = (data: NewCarInterface) => {
  return executeRequest(
    addCar,
    data,
    i18n.t('pages.new_car.message_success'),
    i18n.t('pages.new_car.message_error'),
  );
};
