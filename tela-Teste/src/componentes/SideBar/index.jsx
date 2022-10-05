import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  
} from 'react-icons/fa'

import SidebarItem from '../Sidebar-Itens'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        
        
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaIdCardAlt} Text="Empresa" />
        <SidebarItem Icon={FaRegFileAlt} Text="Anuncios" />
        <SidebarItem Icon={FaEnvelope} Text="Notificações" />
        <SidebarItem Icon={FaUserAlt} Text="Perfil" />
        <SidebarItem Icon={FaRegSun} Text="Configs" />
      </Content>
    </Container>
  )
}

export default Sidebar