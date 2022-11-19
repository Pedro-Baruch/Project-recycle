import { FormEvent, useState } from "react";
import Button from "../../Components/Button";
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";
import "./create.css";
import { useNavigate } from "react-router-dom";
import { response } from 'express';
import { AxiosResponse } from 'axios';

interface Ad{
  id?: number
  title: string
  price: string
  description: string
}

export const CriarAnuncio = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    
    api.post<any, AxiosResponse<Ad, any>, Ad>(
      "/ads/create",
      {
        title,
        price,
        description,
      },
      config
    ).then((response) => {
      navigate("/home")
    });
  };

  return (
    <main>
      <div className="Container">
        <h1>Registre Seu Anuncio</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="bloco">
            <label>Titulo </label>
            <input
              className="input"
              type="text"
              name="titulo"
              placeholder="Titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="bloco">
            <label>Descrição </label>
            <input
              className="input"
              type="text"
              name="descrição"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="bloco">
            <label>Valor</label>
            <input
              className="input"
              type="text"
              name="valor"
              placeholder="Valor(R$)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="bloco">
            <label>Pesquisar tags</label>
            <input
              className="input"
              type="text"
              name="tags"
              placeholder="#tags"
            />
          </div>
          <div className="bloco">
            <label>Enviar Foto</label>
            <input
              className=""
              type="file"
              name="image"
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
