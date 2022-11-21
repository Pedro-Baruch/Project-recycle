import { Link } from "react-router-dom";
import "./styles.css";

export const Navigation = () => {
  return (
    <nav className="nav">
      <Link className="Link" to="/home">
        <p>anuncio</p>
      </Link>
      <Link className="Link" to="/home/company">
        <p>empresa</p>
      </Link>
    </nav>
  );
};
