import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditItemPage from "../../components/EditeItemPage";
import { Container, MainContainer } from "./styled";

const NewCar = () => {
  const [pageTitle, setPageTitle] = useState('Cadastrar Novo Veículo');
  const { id } = useParams();

  useEffect(() => {
    console.log("ID", id);
    if(id) setPageTitle('Editar Veículo');
  }, []);

  const handleSave = () => {
    console.log("salvando");
  };

  const test = [];
  for (let i = 0; i <= 5; i += 1) {
    test.push(i);
  }
  return (
    <Container>
      <EditItemPage title={pageTitle} onSave={handleSave}>
        <MainContainer>
          {test.map((item) => {
            return <span key={item}>{item}</span>;
          })}
        </MainContainer>
      </EditItemPage>
    </Container>
  );
};

export default NewCar;
