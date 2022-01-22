import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PrimaryButton } from "../../components/Button";
import ItemCard from "../../components/ItemCard";
import { listSupplies, deleteSupply } from "../../services/requests";
import {
  CardItemDetails,
  CardItemLeftDetail,
  CardItemRightDetail,
  CardListContainer,
  CardListHeader,
  CardListItems,
  Container,
  KmDriven,
  KmDrivenOpen,
} from "./styled";
import { SupplyWithRelations } from "../../interface/supply";
import { maskDate, maskValue } from "../../util";

const Supplies = () => {
  const [supplies, setSupplies] = useState<SupplyWithRelations[]>([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    getListSupplies();
  }, []);

  const getListSupplies = async () => {
    const list = await listSupplies({ orderBy: 'date' });

    if (list && list.length) setSupplies(list);
  };

  const handleDeleteVehicle = async (id: number) => {
    await deleteSupply(id);

    getListSupplies();
  };

  const handleNewVehicle = () => {
    navigate("/new-supply");
  };

  const handleEditVehicle = (id: number) => {
    navigate(`/edit-supply/${id}`);
  };

  return (
    <Container>
      <CardListContainer>
        <CardListHeader>
          <h3>{t("pages.supplies.title_supplies")}</h3>
          <PrimaryButton onClick={() => handleNewVehicle()}>
            {t("general.button_new")}
          </PrimaryButton>
        </CardListHeader>

        <CardListItems>
          {supplies.map((item, index) => {
            return (
              <ItemCard
                key={index}
                title={item?.vehicle?.name}
                editAction={() => {
                  handleEditVehicle(item.id!);
                }}
                deleteAction={() => {
                  handleDeleteVehicle(item.id!);
                }}
              >
                <CardItemDetails>
                  <CardItemLeftDetail>
                    <span>{maskDate(new Date(item.date * 1000))}</span>
                    <span>{maskValue(item.value)}</span>
                    <span>
                      {item.liters} {t("pages.supplies.liters")}{" "}
                      {t(`pages.supplies.fuel_${item.fuel.name}`)}
                    </span>
                  </CardItemLeftDetail>

                  <CardItemRightDetail>
                    <span>
                      {item.km_driven ? item.km_driven : 0}{" "}
                      {t("pages.supplies.km_driven")}
                    </span>
                    {item.km_driven ? (
                      <KmDriven>
                        {item.average_km_driven} {t("pages.supplies.average_km_driven")}
                      </KmDriven>
                    ) : (
                      <KmDrivenOpen>
                        {t("pages.supplies.open_supply")}
                      </KmDrivenOpen>
                    )}
                  </CardItemRightDetail>
                </CardItemDetails>
              </ItemCard>
            );
          })}
        </CardListItems>
      </CardListContainer>
    </Container>
  );
};

export default Supplies;
