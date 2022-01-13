import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Informations from "./pages/Informations";
import Reports from "./pages/Reports";
import Suplies from "./pages/Suplies";

const AppRoutes = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/suplies" element={<Suplies />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/informations" element={<Informations />} />
    </Routes>
    <Navbar />
    </>
  );
};

export default AppRoutes;
