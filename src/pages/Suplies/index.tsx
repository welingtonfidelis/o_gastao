import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { PrimaryButton } from "../../components/Button";
import ItemCard from "../../components/ItemCard";
import { listSupplies, deleteSupply } from "../../services/requests";
import {
  CardListContainer,
  CardListHeader,
  CardListItems,
  Container,
} from "./styled";
import { Supply } from "../../interface/supply";

const Supplies = () => {
  const [cars, setVehicles] = useState<Supply[]>([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    getListSupplies();
  }, []);

  const getListSupplies = async () => {
    const list = await listSupplies();
    if(list) setVehicles(list);
  }

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
          <h3>{t('pages.supplies.title_supplies')}</h3>
          <PrimaryButton onClick={() => handleNewVehicle()}>{t('general.button_new')}</PrimaryButton>
        </CardListHeader>

        <CardListItems>
          {cars.map((item, index) => {
            return (
              <ItemCard
                key={index}
                title={item.date + ''}
                editAction={() => {
                  handleEditVehicle(item.id!);
                }}
                deleteAction={() => {
                  handleDeleteVehicle(item.id!);
                }}
              ></ItemCard>
            );
          })}
        </CardListItems>
      </CardListContainer>
    </Container>
  );
};

export default Supplies;
