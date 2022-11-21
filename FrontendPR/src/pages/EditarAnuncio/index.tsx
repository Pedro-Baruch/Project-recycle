import { AxiosResponse } from "axios";
import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";
import { Ad } from "../../types/Anuncio";
import "../Criar-Anuncio/create.css";

export function EditarAnuncio() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()
  const {id} = useParams()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    api
      .patch<any, AxiosResponse<Ad, any>>(
        `/ads/${id}`,
        {
          title: title,
          description: description
        },
        config
      )
      .then((response) => {navigate('/meusAnuncios')});
  };

  return (
    <div className="Container">
      <h1>Editar Anúncio</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="bloco">
          <label>Título</label>
          <input
            className="input"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="bloco">
          <label>Descrição</label>
          <input
            className="input"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="solicitar-denunciar">
        <Button
            children="Salvar"
            height="30px"
            width="100px"
            onClick={() => {}}
          />
        </div>
      </form>
          <Button
            children="Cancelar"
            height="30px"
            width="100px"
            onClick={() => navigate('/meusAnuncios')}
          />
    </div>
  );
}