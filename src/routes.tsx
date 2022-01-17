import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Informations from "./pages/Informations";
import NewCar from "./pages/NewCar";
import Reports from "./pages/Reports";
import Suplies from "./pages/Suplies";

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
    element: <Cars />,
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
    path: "/new-car",
    element: <NewCar />,
    renderExtraComponents: false,
  },
  {
    path: "/edit-car/:id",
    element: <NewCar />,
    renderExtraComponents: false,
  },
];

const AppRoutes = () => {
  return (
    <>
      <ToastContainer />
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
    </>
  );
};

export default AppRoutes;
