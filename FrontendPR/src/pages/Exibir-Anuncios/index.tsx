import Button from "../../Components/Button";
import { adFetchPage } from "../Ad";
import "./style.css";

export const ExibirAnuncio = () => {
  return (
    <main>
      <div className="Container">
        <adFetchPage />
      </div>
    </main>
  );
};
