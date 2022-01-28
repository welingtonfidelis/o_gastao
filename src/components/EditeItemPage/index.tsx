import { t } from 'i18next';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../Button';

import { Container, MainContent, Header, Footer } from "./styled";

interface Props {
  title: string;
  onSave: () => any;
}

const EditItemPage: React.FC<Props> = ({ title, onSave, children }) => {
  const navigate = useNavigate();

  const handleClosePage = () => {
    navigate(-1);
  }

  return (
    <Container>
      <Header>
        <FaArrowLeft onClick={handleClosePage}/>
        <span>{title}</span>
      </Header>

      <MainContent>{children}</MainContent>

      <Footer>
        <SecondaryButton onClick={handleClosePage}>{t('general.button_cancel')}</SecondaryButton>
        <PrimaryButton onClick={onSave} >{t('general.button_save')}</PrimaryButton>
      </Footer>
    </Container>
  );
};

export default EditItemPage;
