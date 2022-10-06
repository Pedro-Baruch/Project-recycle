import React from 'react'
import { IconType } from 'react-icons'
import { Container } from './styles'

interface SideBarProps{
    Icon : IconType
    Text?: string
}

const SidebarItem = ({ Icon, Text }:SideBarProps) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem