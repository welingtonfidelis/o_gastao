import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InputText } from "../../components/Button/Input";
import EditItemPage from "../../components/EditeItemPage";
import { saveNewCar } from "../../services/requests";
import { Container } from "./styled";

const NewCar = () => {
  const [pageTitle, setPageTitle] = useState("Cadastrar Novo Veículo");
  const [form] = Form.useForm();
  const { id } = useParams();

  useEffect(() => {
    console.log("ID", id);
    if (id) setPageTitle("Editar Veículo");
  }, []);

  const handleSave = async (e: any) => {
    if(id) {
      console.log("atualizando", id, e);
    }
    else {
      saveNewCar(e);
    }
  };

  const test = [];
  for (let i = 0; i <= 5; i += 1) {
    test.push(i);
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
                message: "Por favor, insira um nome para o veículo",
              },
            ]}
          >
            <InputText placeholder="Nome" />
          </Form.Item>
        </Form>
      </EditItemPage>
    </Container>
  );
};

export default NewCar;
