import Button from "../../Components/Button";
import "../Criar-Anuncio/create.css";
import { useState, FormEvent } from 'react';
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";
import { response } from "express";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface Company {
  id?: string;
  cnpj: string;
  name: string;
  localization: string;
  openingHours: string;
  description: string;
  img?: string;
}

export function CriarEmpresa() {
  const [cnpj, setCNPJ] = useState("");
  const [name, setName] = useState("");
  const [localization, setLocalization] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [description, setDescription] = useState("");

const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    api
      .post<any, AxiosResponse<Company, any>, Company>(
        "/companies/create",
        {
          cnpj: cnpj,
          name,
          localization,
          openingHours,
          description,
        },
        config
      )
      .then((response) => { navigate("/home") });
  };

  return (
    <div className="Container">
      <h1>Registre sua empresa</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="bloco">
          <label>CNPJ</label>
          <input
            className="input"
            type="text"
            name="CNPJ"
            value={cnpj}
            onChange={(e) => setCNPJ(e.target.value)}
          />
        </div>
        <div className="bloco">
          <label>Nome da empresa</label>
          <input
            className="input"
            type="text"
            name="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="bloco">
          <label>Endereço</label>
          <input
            className="input"
            type="text"
            name="endereco"
            value={localization}
            onChange={(e) => setLocalization(e.target.value)}
          />
        </div>
        <div className="bloco">
          <label>Horário de funcionamento</label>
          <input
            className="input"
            type="text"
            name="horario"
            value={openingHours}
            onChange={(e) => setOpeningHours(e.target.value)}
          />
        </div>
        <div className="bloco">
          <label>Descrição</label>
          <input
            className="input"
            type="text"
            name="descricao"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="bloco">
          <label>Fotos da empresa</label>
          <input className="input" type="file" name="image" />
        </div>
        <div className="ButtonCriar">
          <Button
            children="Criar empresa"
            height="50px"
            width="120px"
          />
        </div>
      </form>
    </div>
  );
}
