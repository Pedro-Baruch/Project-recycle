import { AxiosResponse } from "axios";
import { FormEvent, useState } from 'react';
import { Button } from "semantic-ui-react";
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";
import { Ad } from "../../types/Anuncio";
import "../Criar-Anuncio/create.css";

interface EditarAnuncioProp{
  id?: string
}

export function EditarAnuncio() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    
    api
      .put<any, AxiosResponse<Ad, any>>(
        "/ads/:id",
        {
          title: title,
          description: description
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
          <label>Título</label>
          <input
            className="input"
            type="text"
            name="CNPJ"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="bloco">
          <label>Descrição</label>
          <input
            className="input"
            type="text"
            name="nome"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
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