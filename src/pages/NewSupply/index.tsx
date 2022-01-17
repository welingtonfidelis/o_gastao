import { Form } from "antd";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { InputText } from "../../components/Input";
import EditItemPage from "../../components/EditeItemPage";
import {
  addVehicle,
  updateVehicle,
  findSupplyById,
  listVehicles,
  listFuels,
} from "../../services/requests";
import { Container } from "./styled";
import { Vehicle } from "../../interface/vehicle";
import { Fuel } from "../../interface/fuel";
import { Select } from "../../components/Select";
import { DatePicker } from "../../components/DatePicker";

const NewSupply = () => {
  const { t } = useTranslation();
  const [pageTitle, setPageTitle] = useState("");
  const [vehiclesList, setVehiclesList] = useState<any[]>([]);
  const [fuelsList, setFuelsList] = useState<any[]>([]);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setPageTitle(t("pages.new_supply.title_new_supply"));

    getListVehicles();
    getListFuels();
    if (id) {
      setPageTitle(t("pages.new_supply.title_edit_vehicle"));
      getSupplyById();
    }
  }, [id, t]);

  const handleSave = async (e: any) => {
    console.log("!", e);

    // let response: any;
    // if(id) {
    //   response = await updateVehicle({ id: +id, ...e });
    // }
    // else {
    //   response = await addVehicle(e);
    // }

    // if(response) navigate(-1);
  };

  const getListVehicles = async () => {
    const vehicles = await listVehicles();

    if (vehicles) {
      console.log("vehicles", vehicles);

      setVehiclesList(
        vehicles.map((item) => ({ value: item.id, label: item.name }))
      );
    }
  };

  const getListFuels = async () => {
    const fuels = await listFuels();

    if (fuels) {
      console.log("fuels", fuels);

      setFuelsList(fuels.map((item) => ({ value: item.id, label: item.name })));
    }
  };

  const getSupplyById = async () => {
    const [selected] = (await findSupplyById(+id!)) || [];

    if (selected) {
      form.setFieldsValue(selected);
    }
  };

  return (
    <Container>
      <EditItemPage title={pageTitle} onSave={() => form.submit()}>
        <Form form={form} onFinish={handleSave}>
          <Form.Item
            name="liters"
            rules={[
              {
                required: true,
                message: t("pages.new_supply.error_input_message_liters"),
              },
            ]}
          >
            <InputText placeholder={t("pages.new_supply.placeholder_liters")} type="number" />
          </Form.Item>
          <Form.Item
            name="km_driven"
            rules={[]}
          >
            <InputText placeholder={t("pages.new_supply.placeholder_km")} type="number" />
          </Form.Item>
          <Form.Item
            name="vehicle_id"
            rules={[
              {
                required: true,
                message: t("pages.new_supply.error_input_message_vehicle"),
              },
            ]}
          >
            <Select options={vehiclesList} placeholder={t("pages.new_supply.placeholder_vehicle")} />
          </Form.Item>
          <Form.Item
            name="date"
            rules={[
              {
                required: true,
                message: t("pages.new_supply.error_input_message_date"),
              },
            ]}
          >
            <DatePicker placeholder={t("pages.new_supply.placeholder_date")} />
          </Form.Item>
          <Form.Item
            name="fuel_id"
            rules={[
              {
                required: true,
                message: t("pages.new_supply.error_input_message_fuel"),
              },
            ]}
          >
            <Select options={fuelsList} placeholder={t("pages.new_supply.placeholder_fuel")} />
          </Form.Item>
        </Form>
      </EditItemPage>
    </Container>
  );
};

export default NewSupply;
