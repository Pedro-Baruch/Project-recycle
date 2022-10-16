import "../GetAnuncios/exibir.css";
import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import axios from "axios";

interface Ad {
  id?: number;
  title: string;
  description: string;
  price: string;
}

export function ExibirAd() {
  const [ad, setAd] = useState<Ad[]>([]);

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUHJvZmlsZUlkIjoiY2Y4Y2NmNTUtZjQ2Zi00ZmVhLTljOTctMzM3NjgwYjFkMWM2IiwiZW1haWwiOiJwZWRyb0Bob3RtYWlsLmNvbSIsImlhdCI6MTY2NTg3NDg5MywiZXhwIjoxNjc2Njc0ODkzLCJzdWIiOiJjZjhjY2Y1NS1mNDZmLTRmZWEtOWM5Ny0zMzc2ODBiMWQxYzYifQ.e1dSAEBSED9GsnQ6NMjJYqzuoSfZ4b6w6Jr6qSBBuqU";

  
  const bodyParameters = {
    token: "value",
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const URL = "http://localhost:3000/ads";

    axios
      .get(URL, config)
      .then((response) => {
        setAd(response.data);
      })
      .catch();
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
          <li>Preços: {aux.price}</li>
          <li className="pruduto-tag">tag</li>
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
