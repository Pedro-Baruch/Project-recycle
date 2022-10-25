import axios, { AxiosResponse } from "axios";
import e from "express";
import { FormEvent, useState } from "react";
import Button from "../../Components/Button";
import "./createEM.css";

interface EmP {
    id?: number;
    cnpj: string;
    nome: string;
    localização: string;
    horario: string;
    tipolixo: string;
    description: string;
  }

export const CriarEmpresa = () => {
  
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState("");
  const [localização, setLocalização] = useState("");
  const [horario, setHorario] = useState("");
  const [tipolixo, setTipoLixo] = useState("");
  const [description, setDescription] = useState("");

  const URL = "http://localhost:5000/empresa";{/*ads/create*/}

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUHJvZmlsZUlkIjoiY2Y4Y2NmNTUtZjQ2Zi00ZmVhLTljOTctMzM3NjgwYjFkMWM2IiwiZW1haWwiOiJwZWRyb0Bob3RtYWlsLmNvbSIsImlhdCI6MTY2NTg3NDg5MywiZXhwIjoxNjc2Njc0ODkzLCJzdWIiOiJjZjhjY2Y1NS1mNDZmLTRmZWEtOWM5Ny0zMzc2ODBiMWQxYzYifQ.e1dSAEBSED9GsnQ6NMjJYqzuoSfZ4b6w6Jr6qSBBuqU";

  const bodyParameters = {
    token: "value",
  };

  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    axios
      .post<any, AxiosResponse<EmP, any>, EmP>(
        URL,
        {
            cnpj,
            nome,
            localização,
            horario,
            tipolixo,
          description,
        },
        config
      )
      .then((response) => {})
      .catch();
  };

  return (
    <main>
      <div className="Container">
        <h1>Registre Sua Empresa</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="bloco">
            <label>CNPJ</label>
            <input
              className="input"
              type="text"
              name="CNPJ"
              placeholder="CNPJ"
              value={cnpj}
              autoComplete="off"
              onChange={(e) => {
                setCnpj(e.target.value);
              }}
            />
          </div>
          <div className="bloco">
            <label>Nome </label>
            <input
              className="input"
              type="text"
              name="nome"
              placeholder="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="bloco">
            <label>Localização</label>
            <input
              className="input"
              type="text"
              name="localização"
              placeholder="localização"
              value={localização}
              autoComplete="off"
              onChange={(e) => setLocalização(e.target.value)}
            />
          </div>
          <div className="bloco">
            <label>Horario Funcionamento :</label>
            <input
              className="input"
              type="text"
              name="horario"
              placeholder="horario"
              value={horario}
              autoComplete="off"
              onChange={(e) => setHorario(e.target.value)}
            />
          </div>
          <div className="bloco">
            <label>Tipo de Lixo</label>
            <input
              className="input"
              type="text"
              name="tipolixo"
              value={tipolixo}
              autoComplete="off"
              onChange={(e) => setTipoLixo(e.target.value)}
            />
          </div>
          <div className="bloco">
            <label>Descrição</label>
            <input
              className="input"
              type="text"
              name="descrição"
              value={description}
              autoComplete="off"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="ButtonCriar">
            <Button
              children="Criar anúncio"
              height="50px"
              width="120px"
            />
          </div>
        </form>
      </div>
    </main>
  );
};
