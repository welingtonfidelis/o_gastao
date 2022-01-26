import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { InputText } from "../../components/Input";
import EditItemPage from "../../components/EditeItemPage";
import {
  findSupplyById,
  listVehicles,
  listFuels,
  updateSupply,
  addSupply,
} from "../../services/requests";
import { Container } from "./styled";
import { Select } from "../../components/Select";
import { DatePicker } from "../../components/DatePicker";
import moment from "moment";
import { SelectOption } from "../../interface/select";

const NewSupply = () => {
  const { t } = useTranslation();
  const [pageTitle, setPageTitle] = useState("");
  const [vehiclesList, setVehiclesList] = useState<SelectOption[]>([]);
  const [fuelsList, setFuelsList] = useState<SelectOption[]>([]);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const getListFuels = useCallback(async () => {
    const fuels = await listFuels();

    if (fuels) {
      setFuelsList(
        fuels.map((item) => ({
          value: item.id!,
          label: t(`pages.new_supply.fuel_${item.name}`),
        }))
      );
    }
  }, [t]);

  const getSupplyById = useCallback(async () => {
    const [selected] = (await findSupplyById(+id!)) || [];

    if (selected) {
      const date = moment(new Date(selected.date * 1000));
      form.setFieldsValue({ ...selected, date });
    }
  }, [form, id]);

  useEffect(() => {
    setPageTitle(t("pages.new_supply.title_new_supply"));

    getListVehicles();
    getListFuels();
    if (id) {
      setPageTitle(t("pages.new_supply.title_edit_vehicle"));
      getSupplyById();
    }
  }, [getListFuels, getSupplyById, id, t]);

  const handleSave = async (e: any) => {
    e.date = moment(e.date).unix();

    let response: any;
    if (id) {
      response = await updateSupply({ id: +id, ...e });
    } else {
      response = await addSupply(e);
    }

    if (response) navigate(-1);
  };

  const getListVehicles = async () => {
    const vehicles = await listVehicles();

    if (vehicles) {
      setVehiclesList(
        vehicles.map((item) => ({ value: item.id!, label: item.name }))
      );
    }
  };

  return (
    <Container>
      <EditItemPage title={pageTitle} onSave={() => form.submit()}>
        <Form form={form} onFinish={handleSave}>
          <Form.Item
            name="vehicle_id"
            rules={[
              {
                required: true,
                message: t("pages.new_supply.error_input_message_vehicle"),
              },
            ]}
          >
            <Select
              options={vehiclesList}
              placeholder={t("pages.new_supply.placeholder_vehicle")}
            />
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
          <Form.Item name="value" rules={[]}>
            <InputText
              placeholder={t("pages.new_supply.placeholder_value")}
              type="number"
            />
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
            <Select
              options={fuelsList}
              placeholder={t("pages.new_supply.placeholder_fuel")}
            />
          </Form.Item>
          <Form.Item
            name="liters"
            rules={[
              {
                required: true,
                message: t("pages.new_supply.error_input_message_liters"),
              },
            ]}
          >
            <InputText
              placeholder={t("pages.new_supply.placeholder_liters")}
              type="number"
            />
          </Form.Item>
          <Form.Item name="km_driven" rules={[]}>
            <InputText
              placeholder={t("pages.new_supply.placeholder_km")}
              type="number"
            />
          </Form.Item>
        </Form>
      </EditItemPage>
    </Container>
  );
};

export default NewSupply;
