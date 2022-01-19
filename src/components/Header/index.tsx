import { useTranslation } from 'react-i18next';
import {
  FaRegUserCircle
} from "react-icons/fa";

import { Container, TextComponent } from "./styled";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <TextComponent>{t('user.welcome_message')}</TextComponent>
      <FaRegUserCircle />
    </Container>
  );
};

export default Header;
