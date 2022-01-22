import ItemCard from "../../components/ItemCard";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { maskDate, maskValue } from "../../util";
import {
  CardListContainer,
  CardListItems,
  CardOpenSupplyComponent,
  CardLastSupplyContainer,
  Container,
  AverageKmDrivenTotal,
  CardLeftContent,
  CardLastSupplyComponent,
  CardRightContent,
} from "./styled";
import { useEffect, useState } from "react";
import {
  listSupplies,
  listSuppliesByVehicle,
  listVehicles,
} from "../../services/requests";
import {
  SupplyByVehicleWithRelations,
  SupplyWithRelations,
} from "../../interface/supply";

const Home = () => {
  const [openSupplies, setOpenSupplies] = useState<SupplyWithRelations[]>([]);
  const [lastSupplies, setLastSupplies] = useState<
    SupplyByVehicleWithRelations[]
  >([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    getListSupplies();
  }, []);

  const getListSupplies = async () => {
    const openList = await listSupplies({
      orderBy: "date",
      filterBy: { openSupplies: true },
    });

    if (openList && openList.length) setOpenSupplies(openList);

    const vehicles = await listVehicles();

    if (vehicles && vehicles.length) {
      const vehiclesId = vehicles.map((item) => item.id) as number[];
      const supplyList = await listSuppliesByVehicle({
        vehiclesId,
        filterBy: { openSupplies: false },
        limit: 3,
      });
      if (supplyList && supplyList.length) setLastSupplies(supplyList);
    }
  };

  const handleEditSupply = (id: number) => {
    navigate(`/edit-supply/${id}`);
  };

  return (
    <Container>
      <CardListContainer>
        <h3>{t("pages.home.open_supplies")}</h3>

        <CardListItems>
          {openSupplies.map((item, index) => {
            return (
              <ItemCard
                key={index}
                title={maskDate(new Date(item.date * 1000))}
                editAction={() => {
                  handleEditSupply(item.id!);
                }}
              >
                <CardOpenSupplyComponent>
                  <span>{item.vehicle.name}</span>
                  <span>
                    {item.liters} {t("pages.supplies.liters")}{" "}
                    {t(`pages.supplies.fuel_${item.fuel.name}`)}
                  </span>
                  <span>{maskValue(item.value)}</span>
                </CardOpenSupplyComponent>
              </ItemCard>
            );
          })}
        </CardListItems>
      </CardListContainer>

      <CardListContainer>
        <h3>{t("pages.home.last_supplies")}</h3>

        <CardListItems>
          {lastSupplies.map((item, index) => {
            let average_km_driven_total = 0;
            return (
              <ItemCard key={index} title={item.vehicle.name}>
                <CardLastSupplyContainer>
                  {item.supplies.map((subItem, subIndex) => {
                    average_km_driven_total += subItem.average_km_driven || 0;

                    return (
                      <CardLastSupplyComponent key={subIndex}>
                        <CardLeftContent>
                          <span>{maskDate(new Date(subItem.date * 1000))}</span>
                          <span>{maskValue(subItem.value)}</span>
                          <span>
                            {subItem.liters} {t("pages.supplies.liters")}{" "}
                            {t(`pages.supplies.fuel_${subItem.fuel.name}`)}
                          </span>
                        </CardLeftContent>
                        <CardRightContent>
                          <span>{subItem.km_driven} {t('pages.home.km_driven')}</span>
                          <span>{subItem.average_km_driven} {t('pages.home.average_km_driven')}</span>
                        </CardRightContent>
                      </CardLastSupplyComponent>
                    );
                  })}
                  <AverageKmDrivenTotal>
                    <span>
                      {(
                        average_km_driven_total / item.supplies.length
                      ).toPrecision(3)}{" "}
                      {t("pages.home.average_km_driven_total")}
                    </span>
                  </AverageKmDrivenTotal>
                </CardLastSupplyContainer>
              </ItemCard>
            );
          })}
        </CardListItems>
      </CardListContainer>
    </Container>
  );
};

export default Home;
