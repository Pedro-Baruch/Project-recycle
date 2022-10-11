import React from "react";
import { IconType } from "react-icons";
import { LinkProps, NavLink } from "react-router-dom";
import { useHref, Link } from "react-router-dom";
import { Container } from "./styles";

interface SideBarProps {
  Icon: IconType;
  Text?: string;
}

const SidebarItem = ({ Icon, Text }: SideBarProps) => {
  return (
    <Container>
      <Icon />

      {Text}
    </Container>
  );
};

export default SidebarItem;
