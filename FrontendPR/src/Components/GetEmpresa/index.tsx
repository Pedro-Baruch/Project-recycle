import "../GetAnuncios/exibir.css";
import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";

interface Company {
  company: {
    id?: string;
    CNPJ: string;
    name: string;
    localization: string;
    openingHours: string;
    description: string;
  };
}
export function ExibirCompanies() {
  const [profile, setProfile] = useState<Company[]>([]);

  useEffect(() => {
    api.get("/companies", config).then((response) => {
      setProfile(response.data);
    });
  }, []);

  return (
    <div className="container-ad">
      {profile.map((aux) => (
        <ul className="container-Informacoes">
          <li className="usuario-foto">
            <img className="foto-perfil" />
            <p>{aux.company.name}</p>
          </li>
          <li>{aux.company.CNPJ}</li>
          <li>{aux.company.localization}</li>
          <li>{aux.company.openingHours}</li>
          <li>{aux.company.description}</li>
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
