import ItemCard from "../../components/ItemCard";
import { useTranslation } from 'react-i18next';

import { maskDate, maskValue } from "../../util";
import {
  CardListContainer,
  CardListItems,
  CardOpenSupplyComponent,
  Container,
} from "./styled";

const Home = () => {
  const { t } = useTranslation();

  const openSuplies = [
    {
      id: 99,
      car: {
        name: "Gol Vermelho",
      },
      supply: {
        date: "2022/01/15 00:00:00",
        value: 130.0,
        liters: 15,
        fuel_type: "Gasolina",
      },
    },
  ];

  const lastSuplies = [
    {
      id: 1,
      car: {
        name: "Gol Vermelho",
      },
      supply: {
        date: "2022/01/01 00:00:00",
        value: 130.0,
        liters: 15,
        fuel_type: "Gasolina",
        km_driven: 112.0,
      },
      average_km_driven: 7.0,
    },
    {
      id: 2,
      car: {
        name: "Cg 150",
      },
      supply: {
        date: "2021/12/10 00:00:00",
        value: 50.0,
        liters: 10,
        fuel_type: "Gasolina",
        km_driven: 220.0,
      },
      average_km_driven: 22.0,
    },
  ];

  const handleEditSupply = (id: number) => {
    console.log("EDIT SUPPLY", id);
  };

  return (
    <Container>
      <CardListContainer>
        <h3>{t('pages.home.open_supplies')}</h3>

        <CardListItems>
          {openSuplies.map((item, index) => {
            return (
              <ItemCard
                key={index}
                title={maskDate(new Date(item.supply.date))}
                editAction={() => {
                  handleEditSupply(item.id);
                }}
              >
                <CardOpenSupplyComponent>
                  <strong>{item.car.name}</strong>
                  <span>
                    {item.supply.liters} lts {item.supply.fuel_type}
                  </span>
                  <span>{maskValue(item.supply.value)}</span>
                </CardOpenSupplyComponent>
              </ItemCard>
            );
          })}
        </CardListItems>
      </CardListContainer>

      <CardListContainer>
        <h3>{t('pages.home.last_supplies')}</h3>

        <CardListItems>
          {lastSuplies.map((item, index) => {
            return (
              <ItemCard
                key={index}
                title={item.car.name}
              >
                <CardOpenSupplyComponent>
                  <strong>{maskDate(new Date(item.supply.date))}</strong>
                  <span>
                    {item.supply.liters} lts {item.supply.fuel_type}
                  </span>
                  <span>{maskValue(item.supply.value)}</span>
                  <span><strong>{item.average_km_driven}km/l</strong> de média</span>
                </CardOpenSupplyComponent>
              </ItemCard>
            );
          })}
        </CardListItems>
      </CardListContainer>
    </Container>
  );
};

export default Home;
