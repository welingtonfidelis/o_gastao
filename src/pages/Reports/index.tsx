import { Form } from "antd";
import { useEffect, useState } from "react";
import { t } from "i18next";

import { PrimaryButton } from "../../components/Button";
import { InputText } from "../../components/Input";
import { Select } from "../../components/Select";
import { SelectOption } from "../../interface/select";
import {
  SupplyByVehicleWithRelations,
  SupplyWithFuelRelation,
} from "../../interface/supply";
import { listSuppliesByVehicle, listVehicles } from "../../services/requests";
import {
  CardContent,
  CardLeftContent,
  CardListHeader,
  CardListItems,
  CardRightContent,
  Container,
  FormContent,
  TopHeader,
} from "./styled";
import ItemCard from "../../components/ItemCard";
import { maskDate, maskValue } from "../../util";
import { toast } from "react-toastify";

const Reports = () => {
  const [vehiclesList, setVehiclesList] = useState<SelectOption[]>([]);
  const [suppliesList, setSuppliesList] =
    useState<SupplyByVehicleWithRelations>();
  const [suppliesAverageMax, setSuppliesAverageMax] =
    useState<SupplyWithFuelRelation>();
  const [suppliesAverageMin, setSuppliesAverageMin] =
    useState<SupplyWithFuelRelation>();
  const [form] = Form.useForm();

  const getListVehicles = async () => {
    const vehicles = await listVehicles();

    if (vehicles && vehicles.length) {
      const mappedVehicles = vehicles.map((item) => ({
        value: item.id!,
        label: item.name,
      }));
      setVehiclesList(mappedVehicles);
    }
  };

  useEffect(() => {
    getListVehicles();
  }, []);

  const handleReport = async (e: any) => {
    const supplyList = await listSuppliesByVehicle({
      vehiclesId: [e.vehicle_id],
      filterBy: { openSupplies: false },
      limit: e.limit,
    });

    if (!supplyList || !supplyList[0].supplies.length) {
      toast.warning(t("pages.reports.no_supplies"));
      return;
    }

    setSuppliesList(supplyList[0]);
  };

  const handleNewReport = () => {
    setSuppliesList(undefined);
  };
  return (
    <Container>
      {!suppliesList ? (
        <FormContent>
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
                min={1}
                placeholder={t("pages.reports.placeholder_limit")}
              />
            </Form.Item>
            <PrimaryButton onClick={() => form.submit()}>
              {t("pages.reports.button_generate_report")}
            </PrimaryButton>
          </Form>
        </FormContent>
      ) : (
        <>
          <CardListHeader>
            <TopHeader>
              <h3>{suppliesList.vehicle.name}</h3>
              <PrimaryButton onClick={handleNewReport}>
                {t("general.button_new")}
              </PrimaryButton>
            </TopHeader>
            <span>
              Últimos {form.getFieldValue("report_limit")} abastecimentos
            </span>

            <span>
              {t("pages.reports.max_average")}
              {" - "}
              {suppliesAverageMax?.average_km_driven}{" "}
              {t("pages.reports.average_km")}{" "}
              {t(`pages.reports.fuel_${suppliesAverageMax?.fuel.name}`)}
            </span>
            <span>
              {t("pages.reports.min_average")}
              {" - "}
              {suppliesAverageMin?.average_km_driven}{" "}
              {t("pages.reports.average_km")}{" "}
              {t(`pages.reports.fuel_${suppliesAverageMin?.fuel.name}`)}
            </span>
            {/* <span>Média total {suppliesAverageTotal}</span> */}
          </CardListHeader>

          <CardListItems>
            {suppliesList &&
              suppliesList.supplies.map((item, index) => {
                if (
                  !suppliesAverageMax?.average_km_driven ||
                  suppliesAverageMax.average_km_driven < item.average_km_driven!
                ) {
                  setSuppliesAverageMax(item);
                }
                if (
                  !suppliesAverageMin?.average_km_driven ||
                  suppliesAverageMin.average_km_driven > item.average_km_driven!
                ) {
                  setSuppliesAverageMin(item);
                }

                return (
                  <ItemCard
                    key={index}
                    title={maskDate(new Date(item.date * 1000))}
                  >
                    <CardContent>
                      <CardLeftContent>
                        <span>{maskValue(item.value)}</span>
                        <span>
                          {item.liters} {t("pages.reports.liters")}
                        </span>
                      </CardLeftContent>
                      <CardRightContent>
                        <span>
                          {item.km_driven} {t("pages.reports.km_driven")}
                        </span>
                        <span>
                          {item.average_km_driven}{" "}
                          {t("pages.reports.average_km_driven")}
                        </span>
                      </CardRightContent>
                    </CardContent>
                  </ItemCard>
                );
              })}
          </CardListItems>
        </>
      )}
    </Container>
  );
};

export default Reports;
