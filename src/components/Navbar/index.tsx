import { useState } from "react";
import { Menu } from "antd";
import {
  FaCarAlt,
  FaGasPump,
  FaHome,
  FaChartLine,
  FaInfo,
} from "react-icons/fa";

import { Container } from "./styled";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selecedOption, setSelectedOption] = useState("/");
  const navigate = useNavigate();

  const navbarOptions = [
    {
      name: "Abastecimentos",
      value: "/suplies",
      icon: <FaGasPump />,
    },
    {
      name: "Veículos",
      value: "/cars",
      icon: <FaCarAlt />,
    },
    {
      name: "Home",
      value: "/",
      icon: <FaHome />,
    },
    {
      name: "Relatórios",
      value: "/reports",
      icon: <FaChartLine />,
    },
    {
      name: "Informações",
      value: "/informations",
      icon: <FaInfo />,
    },
  ];

  const handleMenuOption = (e: any) => {
    setSelectedOption(e.key);
    navigate(e.key)
  };

  return (
    <Container>
      <Menu
        onClick={handleMenuOption}
        selectedKeys={[selecedOption]}
        mode="horizontal"
        style={{borderBottom: "none"}}
      >
        {navbarOptions.map((item, index) => {
          return <Menu.Item key={item.value} icon={item.icon}>{item.name}</Menu.Item>;
        })}
      </Menu>
    </Container>
  );
};

export default Navbar;
