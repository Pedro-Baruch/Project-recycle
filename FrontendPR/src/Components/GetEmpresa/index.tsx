import "../GetAnuncios/exibir.css";
import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigation } from "../Nav";

interface EmP {
  id?: number;
  cnpj: string;
  nome: string;
  localização: string;
  horario: string;
  tipolixo: string;
  description: string;
}

export function ExibirEM() {
  const [ad, setAd] = useState<EmP[]>([]);

  let token = localStorage.getItem("authToken");

  const bodyParameters = {
    token: "value",
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const URL = "http://localhost:5000/empresa";

    axios
      .get(URL, config)
      .then((response) => {
        setAd(response.data);
      })
      .catch();
  }, [ad]);

  const handleDeleteTask = async (id?: number) => {
    axios.delete(`http://localhost:5000/empresa/${id}`).then((resp) => resp.data);
  };

  return (
    <div>

      <Navigation />
      <div className="container-ad">
        {ad.map((aux) => (
          <ul className="container-Informacoes">
            <li className="usuario-foto">
              <img className="foto-perfil" />
              <p>Usuário</p>
            </li>
            <li key={aux.id}>
              CNPJ : {aux.cnpj}</li>
            <li>Nome : {aux.nome}</li>
            <li>Localização : {aux.localização}</li>
            <li>Hora Funcionamento : {aux.horario}</li>
            <li>Material de Trabalho : {aux.tipolixo}</li>
            <li>Descrição : {aux.description}</li>

            <li>
              <img className="foto-produto" />
            </li>
            <li className="solicitar-denunciar">
              <Button
                children="Delete"
                height="30px"
                width="100px"
                onClick={() => { handleDeleteTask(aux.id) }}
              />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
