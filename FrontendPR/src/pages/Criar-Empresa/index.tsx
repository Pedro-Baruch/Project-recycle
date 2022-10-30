import Button from "../../Components/Button";
import "../Criar-Anuncio/create.css";
import { useState, FormEvent } from 'react';
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";
import { response } from "express";
import { AxiosResponse } from "axios";

interface Company {
  id?: string;
  CNPJ: string;
  name: string;
  localization: string;
  openingHours: string;
  description: string;
  img?: string;
}

export function CriarEmpresa() {
  const [CNPJ, setCNPJ] = useState("");
  const [name, setName] = useState("");
  const [localization, setLocalization] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    
    api
      .post<any, AxiosResponse<Company, any>, Company>(
        "/companies/create",
        {
          CNPJ,
          name,
          localization,
          openingHours,
          description,
        },
        config
      )
      .then((response) => {});
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
            value={CNPJ}
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
            onClick={() => {}}
          />
        </div>
      </form>
    </div>
  );
}
