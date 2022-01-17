import { toast } from "react-toastify";
import i18n from "i18next";

import { Vehicle } from "../interface/vehicle";
import { vehicleDB } from "./repositories/vehicles";
import { fuelDB } from "./repositories/fuels";
import { Supply } from "../interface/supply";
import { supplyDB } from "./repositories/supplies";


// ======> VEHICLES REQUESTS <====== //
export const listVehicles = async () => {
  try {
    const response = await vehicleDB.findAll();
    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const findCarById = async (id: number) => {
  try {
    const response = await vehicleDB.findById(id);
    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const addVehicle = (data: Vehicle) => {
  try {
    const response = vehicleDB.add(data);

    toast.success(i18n.t('general.message_success'));

    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const updateVehicle = (data: Vehicle) => {
  try {
    const response = vehicleDB.update(data);

    toast.success(i18n.t('general.message_success'));

    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const deleteVehicle = (id: number) => {
  try {
    const response = vehicleDB.delete(id);

    toast.success(i18n.t('general.message_success'));

    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

// ======> FUELS REQUESTS <====== //
export const listFuels = async () => {
  try {
    const response = await fuelDB.findAll();
    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

// ======> SUPPLIES REQUESTS <====== //
export const listSupplies = async () => {
  try {
    const response = await supplyDB.findAll();
    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const findSupplyById = async (id: number) => {
  try {
    const response = await supplyDB.findById(id);
    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const addSupply = (data: Supply) => {
  try {
    const response = supplyDB.add(data);

    toast.success(i18n.t('general.message_success'));

    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const updateSupply = (data: Supply) => {
  try {
    const response = supplyDB.update(data);

    toast.success(i18n.t('general.message_success'));

    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};

export const deleteSupply = (id: number) => {
  try {
    const response = supplyDB.delete(id);

    toast.success(i18n.t('general.message_success'));

    return response;
  } catch (error) {
    const message = i18n.t("general.message_error");
    toast.error(message, { autoClose: false });
    console.log(message, error);
  }
};