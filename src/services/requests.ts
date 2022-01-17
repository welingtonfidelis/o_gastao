import { toast } from "react-toastify";
import i18n from "i18next";

import { Car } from "../interface/car";
import { carDB } from "./repositories/cars";

export const listCar = async () => {
  try {
    const response = await carDB.findAll();
    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const findCarById = async (id: number) => {
  try {
    const response = await carDB.findById(id);
    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const addCar = (data: Car) => {
  try {
    const response = carDB.add(data);

    toast.success(i18n.t('general.message_success'));

    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const updateCar = (data: Car) => {
  try {
    const response = carDB.update(data);

    toast.success(i18n.t('general.message_success'));

    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const deleteCar = (id: number) => {
  try {
    const response = carDB.delete(id);

    toast.success(i18n.t('general.message_success'));

    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};
