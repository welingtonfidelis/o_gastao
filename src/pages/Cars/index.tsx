import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/Button";
import ItemCard from "../../components/ItemCard";
import Modal from "../../components/Modal";
import {
  CardListContainer,
  CardListHeader,
  CardListItems,
  Container,
} from "./styled";

const Cars = () => {
  const [openModal, setOpenModal] = useState(false);
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

  const handleEditCar = (id: number) => {
    console.log("edit car", id);
  };

  const handleDeleteCar = (id: number) => {
    console.log("delete car", id);
  };

  const handleNewCar = (id?: number) => {
    // setOpenModal(true);
    navigate('/new-car');
  }

  const handleSaveCar = () => {
    console.log('save');
    
    setOpenModal(false);
  }
  return (
    <>
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
    
    <Modal visible={openModal} onOk={handleSaveCar} onCancel={() => setOpenModal(false)}>
      <h2>New car</h2>
    </Modal>
    </>
  );
};

export default Cars;
