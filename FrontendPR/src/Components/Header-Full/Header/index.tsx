import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../SideBar";
import { Container } from "./styles";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Container>
      <div className="setSiderbar">
        <FaBars onClick={showSiderbar} />
        {sidebar && <Sidebar onClick={setSidebar} active={setSidebar} />}
      </div>
      <h2 style={{ color: "White", textAlign: "left" }}>ProjectRecycle</h2>
    </Container>
  );
};
