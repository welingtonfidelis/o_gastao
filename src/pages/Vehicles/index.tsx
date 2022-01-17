import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { PrimaryButton } from "../../components/Button";
import ItemCard from "../../components/ItemCard";
import { Vehicle } from "../../interface/vehicle";
import { listVehicles, deleteVehicle } from "../../services/requests";
import {
  CardListContainer,
  CardListHeader,
  CardListItems,
  Container,
} from "./styled";

const Vehicles = () => {
  const [cars, setVehicles] = useState<Vehicle[]>([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    getListVehicles();
  }, []);

  const getListVehicles = async () => {
    const list = await listVehicles();
    if(list) setVehicles(list);
  }

  const handleDeleteVehicle = async (id: number) => {
    await deleteVehicle(id);

    getListVehicles();
  };

  const handleNewVehicle = () => {
    navigate("/new-vehicle");
  };

  const handleEditVehicle = (id: number) => {
    navigate(`/edit-vehicle/${id}`);
  };

  return (
    <Container>
      <CardListContainer>
        <CardListHeader>
          <h3>{t('pages.vehicles.title_vehicles')}</h3>
          <PrimaryButton onClick={() => handleNewVehicle()}>{t('general.button_new')}</PrimaryButton>
        </CardListHeader>

        <CardListItems>
          {cars.map((item, index) => {
            return (
              <ItemCard
                key={index}
                title={item.name}
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

export default Vehicles;
