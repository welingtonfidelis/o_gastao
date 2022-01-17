import { Form } from "antd";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import { InputText } from "../../components/Button/Input";
import EditItemPage from "../../components/EditeItemPage";
import { findCarById, addCar, updateCar } from "../../services/requests";
import { Container } from "./styled";

const NewCar = () => {
  const { t } = useTranslation();
  const [pageTitle, setPageTitle] = useState('');
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setPageTitle(t('pages.new_car.title_new_car'));

    if (id) {
      setPageTitle(t('pages.new_car.title_edit_car'));
      getCarById();
    }
  }, [id, t]);

  const handleSave = async (e: any) => {
    let response: any;
    if(id) {
      response = await updateCar({ id: +id, ...e });
    }
    else {
      response = await addCar(e);
    }

    
    if(response) navigate(-1);
  };
  
  const getCarById = async () => {
    const [selected] = (await findCarById(+id!)) || [];

    if(selected) {
      form.setFieldsValue(selected);
    }
  }

  return (
    <Container>
      <EditItemPage title={pageTitle} onSave={() => form.submit()}>
        <Form form={form} onFinish={handleSave}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: t('pages.new_car.error_input_message_name'),
              },
            ]}
          >
            <InputText placeholder={t('pages.new_car.placeholder_name')} />
          </Form.Item>
        </Form>
      </EditItemPage>
    </Container>
  );
};

export default NewCar;
