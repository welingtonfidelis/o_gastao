import { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  FaCarAlt,
  FaGasPump,
  FaHome,
  FaChartLine,
  FaInfo,
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

import { Container } from "./styled";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selecedOption, setSelectedOption] = useState("/");
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const urlPath = window.location.hash;
    const page = (urlPath.split('#'))[1];
    setSelectedOption(page);
  }, []);

  const navbarOptions = [
    {
      name: t('navbar.options.supplies'),
      value: "/supplies",
      icon: <FaGasPump />,
    },
    {
      name: t('navbar.options.vehicles'),
      value: "/vehicles",
      icon: <FaCarAlt />,
    },
    {
      name: t('navbar.options.home'),
      value: "/",
      icon: <FaHome />,
    },
    {
      name: t('navbar.options.reports'),
      value: "/reports",
      icon: <FaChartLine />,
    },
    {
      name: t('navbar.options.informations'),
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
