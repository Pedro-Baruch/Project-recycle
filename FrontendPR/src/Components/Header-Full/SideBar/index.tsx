import React from "react";
import { Container, Content } from "./styles";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
} from "react-icons/fa";

interface ActiveProps {
  active: any;
  onClick: any;
}

import SidebarItem from "../Side-Itens";
import { Link } from "react-router-dom";

const Sidebar = ({ active }: ActiveProps) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Link to={"/home"}>
          <SidebarItem Icon={FaHome} Text="Home"></SidebarItem>
        </Link>
        <Link to={"/create/company"}>
          <SidebarItem Icon={FaIdCardAlt} Text="Empresa" />
        </Link>
        <Link to="/create/ad">
          <SidebarItem Icon={FaRegFileAlt} Text="Anuncios" />
        </Link>
        <SidebarItem Icon={FaEnvelope} Text="Notificações" />
        <Link to="/profile/user">
          <SidebarItem Icon={FaUserAlt} Text="Perfil" />
        </Link>
        <SidebarItem Icon={FaRegSun} Text="Configs" />
      </Content>
    </Container>
  );
};

export default Sidebar;
