import {
  FaEnvelope, FaHome, FaIdCardAlt,
  FaRegFileAlt, FaRegSun, FaTimes, FaUserAlt
} from "react-icons/fa";
import { Container, Content } from "./styles";

interface ActiveProps {
  active: any;
  onClick: any;
}

import { Link } from "react-router-dom";
import SidebarItem from "../Side-Itens";

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
        <Link to={"/company"}>
          <SidebarItem Icon={FaIdCardAlt} Text="Empresa" />
        </Link>
        <Link to="/ads">
          <SidebarItem Icon={FaRegFileAlt} Text="Anuncios" />
        </Link>
        <Link to="meusAnuncios">
          <SidebarItem Icon={FaRegFileAlt} Text="Meus Anúncios" />
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
