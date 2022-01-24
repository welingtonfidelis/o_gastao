import { Routes, Route, HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Vehicles from "./pages/Vehicles";
import Home from "./pages/Home";
import Informations from "./pages/Informations";
import NewVehicle from "./pages/NewVehicle";
import Reports from "./pages/Reports";
import Suplies from "./pages/Suplies";
import NewSupply from "./pages/NewSupply";

const routeWrapper = (
  key: string,
  path: string,
  element: JSX.Element,
  renderExtraComponents: boolean
) => {
  return (
    <Route
      key={key}
      path={path}
      element={
        <>
          {renderExtraComponents && <Header />}
          {element}
          {renderExtraComponents && <Navbar />}
        </>
      }
    />
  );
};

const allRoutes = [
  {
    path: "/",
    element: <Home />,
    renderExtraComponents: true,
  },
  {
    path: "/vehicles",
    element: <Vehicles />,
    renderExtraComponents: true,
  },
  {
    path: "/supplies",
    element: <Suplies />,
    renderExtraComponents: true,
  },
  {
    path: "/reports",
    element: <Reports />,
    renderExtraComponents: true,
  },
  {
    path: "/informations",
    element: <Informations />,
    renderExtraComponents: true,
  },
  {
    path: "/new-vehicle",
    element: <NewVehicle />,
    renderExtraComponents: false,
  },
  {
    path: "/edit-vehicle/:id",
    element: <NewVehicle />,
    renderExtraComponents: false,
  },
  {
    path: "/new-supply",
    element: <NewSupply />,
    renderExtraComponents: false,
  },
  {
    path: "/edit-supply/:id",
    element: <NewSupply />,
    renderExtraComponents: false,
  },
];

const AppRoutes = () => {
  return (
    <>
      <ToastContainer />
      <HashRouter>
        <Routes>
          {allRoutes.map((item, index) =>
            routeWrapper(
              index + "",
              item.path,
              item.element,
              item.renderExtraComponents
            )
          )}
        </Routes>
      </HashRouter>
    </>
  );
};

export default AppRoutes;
