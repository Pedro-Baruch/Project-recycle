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
        <Link to={"/home/anuncio"}>
          <SidebarItem Icon={FaHome} Text="Home"></SidebarItem>
        </Link>
        <SidebarItem Icon={FaIdCardAlt} Text="Empresa" />
        <Link to="/create">
          <SidebarItem Icon={FaRegFileAlt} Text="Anuncios" />
        </Link>
        <SidebarItem Icon={FaEnvelope} Text="Notificações" />
        <SidebarItem Icon={FaUserAlt} Text="Perfil" />
        <SidebarItem Icon={FaRegSun} Text="Configs" />
      </Content>
    </Container>
  );
};

export default Sidebar;
