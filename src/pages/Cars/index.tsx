import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/Button";
import ItemCard from "../../components/ItemCard";
import {
  CardListContainer,
  CardListHeader,
  CardListItems,
  Container,
} from "./styled";

const Cars = () => {
  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      name: "Gol Vermelho",
    },
    {
      id: 2,
      name: "Cg 150",
    },
  ];

  const handleDeleteCar = (id: number) => {
    console.log("delete car", id);
  };

  const handleNewCar = () => {
    navigate("/new-car");
  };

  const handleEditCar = (id: number) => {
    navigate(`/edit-car/${id}`);
  };

  return (
    <Container>
      <CardListContainer>
        <CardListHeader>
          <h3>Seus veículos cadastrados</h3>
          <PrimaryButton onClick={() => handleNewCar()}>Novo</PrimaryButton>
        </CardListHeader>

        <CardListItems>
          {cars.map((item, index) => {
            return (
              <ItemCard
                key={index}
                title={item.name}
                editAction={() => {
                  handleEditCar(item.id);
                }}
                deleteAction={() => {
                  handleDeleteCar(item.id);
                }}
              ></ItemCard>
            );
          })}
        </CardListItems>
      </CardListContainer>
    </Container>
  );
};

export default Cars;
