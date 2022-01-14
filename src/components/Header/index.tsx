import {
  FaRegUserCircle
} from "react-icons/fa";

import { Container, TextComponent } from "./styled";

const Header = () => {
  return (
    <Container>
      <TextComponent>Olá, seja bem vindo(a) de volta!</TextComponent>
      <FaRegUserCircle />
    </Container>
  );
};

export default Header;
