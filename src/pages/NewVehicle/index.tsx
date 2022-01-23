import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { InputText } from "../../components/Input";
import EditItemPage from "../../components/EditeItemPage";
import {
  findCarById,
  addVehicle,
  updateVehicle,
} from "../../services/requests";
import { Container } from "./styled";

const NewVehicle = () => {
  const { t } = useTranslation();
  const [pageTitle, setPageTitle] = useState("");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const getCarById = useCallback(async () => {
    const [selected] = (await findCarById(+id!)) || [];

    if (selected) {
      form.setFieldsValue(selected);
    }
  }, [form, id]);

  useEffect(() => {
    setPageTitle(t("pages.new_vehicle.title_new_vehicle"));

    if (id) {
      setPageTitle(t("pages.new_vehicle.title_edit_vehicle"));
      getCarById();
    }
  }, [getCarById, id, t]);

  const handleSave = async (e: any) => {
    let response: any;
    if (id) {
      response = await updateVehicle({ id: +id, ...e });
    } else {
      response = await addVehicle(e);
    }

    if (response) navigate(-1);
  };

  return (
    <Container>
      <EditItemPage title={pageTitle} onSave={() => form.submit()}>
        <Form form={form} onFinish={handleSave}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: t("pages.new_vehicle.error_input_message_name"),
              },
            ]}
          >
            <InputText placeholder={t("pages.new_vehicle.placeholder_name")} />
          </Form.Item>
        </Form>
      </EditItemPage>
    </Container>
  );
};

export default NewVehicle;
