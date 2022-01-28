import { t } from "i18next";
import { Container, MainContent } from "./styled";

const Informations = () => {
  const gifUrl = process.env.PUBLIC_URL + "/gifs/car_2.gif";
  return (
    <>
      <Container>
        <MainContent>
          <img src={gifUrl} width={200} />
          <span>
            <strong>{t("general.browser_tab_title")}</strong> {t("pages.informations.description")}
          </span>

          <span>{t("pages.informations.thank_message")}</span>
        </MainContent>
      </Container>
    </>
  );
};

export default Informations;
