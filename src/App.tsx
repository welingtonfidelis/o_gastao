import { useEffect } from "react";
import { t } from "i18next";

import AppRoutes from "./routes";

import "./styles/css/global.css";

const App = () => {
  useEffect(() => {
    document.title = t("general.browser_tab_title");
  }, []);

  return <AppRoutes />;
};

export default App;
