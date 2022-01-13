import {
  FaRegUserCircle
} from "react-icons/fa";

import { Container } from "./styled";

const Header = () => {
  return (
    <Container>
      Olá, seja bem vindo(a) de volta!
      <FaRegUserCircle />
    </Container>
  );
};

export default Header;
