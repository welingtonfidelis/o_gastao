import { Form } from "antd";
import { useEffect, useState } from "react";
import { t } from "i18next";
import { PrimaryButton } from "../../components/Button";
import { InputText } from "../../components/Input";
import { Select } from "../../components/Select";
import { SelectOption } from "../../interface/select";
import { SupplyByVehicleWithRelations } from "../../interface/supply";
import { listSuppliesByVehicle, listVehicles } from "../../services/requests";
import { Container } from "./styled";

const Reports = () => {
  const [vehiclesList, setVehiclesList] = useState<SelectOption[]>([]);
  const [suppliesList, setSuppliesList] = useState<SupplyByVehicleWithRelations[]>([]);
  const [form] = Form.useForm();

  const getListVehicles = async () => {
    const vehicles = await listVehicles();

    if (vehicles && vehicles.length)
      setVehiclesList(
        vehicles.map((item) => ({ value: item.id!, label: item.name }))
      );
  };

  useEffect(() => {
    getListVehicles();
  }, []);

  const getListSupplies = async (vehicleId: number) => {
  };
  
  const handleReport = async (e: any) => {
    const supplyList = await listSuppliesByVehicle({
      vehiclesId: [e.vehicle_id],
      filterBy: { openSupplies: false },
      limit: e.limit,
    });
  
    if (supplyList && supplyList.length) setSuppliesList(supplyList);
    console.log("!", e, supplyList);
  };

  return (
    <>
      <Container>
        <Form form={form} onFinish={handleReport}>
          <Form.Item
            name="vehicle_id"
            rules={[
              {
                required: true,
                message: t("pages.reports.error_input_message_vehicle"),
              },
            ]}
          >
            <Select
              options={vehiclesList}
              placeholder={t("pages.reports.placeholder_vehicle")}
            />
          </Form.Item>
          <Form.Item
            name="report_limit"
            rules={[
              {
                required: true,
                min: 1,
                message: t("pages.reports.error_input_message_limit"),
              },
            ]}
          >
            <InputText
              type="number"
              placeholder={t("pages.reports.placeholder_limit")}
            />
          </Form.Item>
          <PrimaryButton onClick={() => form.submit()}>
            {t("pages.reports.button_generate_report")}
          </PrimaryButton>
        </Form>
      </Container>
    </>
  );
};

export default Reports;
