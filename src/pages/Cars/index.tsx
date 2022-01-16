import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/Button";
import ItemCard from "../../components/ItemCard";
import { CarInterface } from "../../interface/car";
import { listCar } from "../../services/requests";
import {
  CardListContainer,
  CardListHeader,
  CardListItems,
  Container,
} from "./styled";

const Cars = () => {
  const [cars, setCars] = useState<CarInterface[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('list');
    getListCars();
  }, []);

  const getListCars = async () => {
    const list = await listCar();
    if(list) setCars(list);
  }

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
