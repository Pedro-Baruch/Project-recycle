import "../GetAnuncios/exibir.css";
import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";

interface Ad {
  id?: number;
  title: string;
  description: string;
  price: string;
}

export function ExibirAd() {
  const [ad, setAd] = useState<Ad[]>([]);

  useEffect(() => {
    api.get("/ads", config).then((response) => {
      setAd(response.data);
    });
  }, []);

  return (
    <div className="container-ad">
      {ad.map((aux) => (
        <ul className="container-Informacoes">
          <li className="usuario-foto">
            <img className="foto-perfil" />
            <p>Usuário</p>
          </li>
          <li key={aux.id}>{aux.title}</li>
          <li>{aux.description}</li>
          <li>Preço: R${aux.price}</li>
          <li className="pruduto-tag">tag</li>
          <li>
            <img className="foto-produto" />
          </li>
          <li className="solicitar-denunciar">
            <Button
              children="Solicitar"
              height="30px"
              width="100px"
              onClick={() => {}}
            />
            <Button
              children="Denunciar"
              height="30px"
              width="100px"
              onClick={() => {}}
            />
          </li>
        </ul>
      ))}
    </div>
  );
}
