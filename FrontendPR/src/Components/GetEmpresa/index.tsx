import "../GetAnuncios/exibir.css";
import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";

interface Companies {
  id?: number
  name: string
}

export function ExibirCompanies() {
  const [companies, setCompanies] = useState<Companies[]>([]);

  useEffect(() => {
  }, []);

  return (
    <div className="container-ad">
      {companies.map((aux) => (
        <ul className="container-Informacoes">
          <li className="usuario-foto">
            <img className="foto-perfil" />
            <p>Usuário</p>
          </li>
          <li key={aux.id}></li>
          <li></li>
          <li></li>
          <li>
            <img className="foto-produto" />
          </li>
          <li className="solicitar-denunciar">
            <Button
              children="Solicitar"
              height="30px"
              width="100px"
              onClick={() => {
                console.log("click");
              }}
            />
            <Button
              children="Denunciar"
              height="30px"
              width="100px"
              onClick={() => {
                console.log("click");
              }}
            />
          </li>
        </ul>
      ))}
    </div>
  );
}
