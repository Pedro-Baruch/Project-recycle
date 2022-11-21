import { AxiosResponse } from 'axios';
import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from '../../Components/Button';
import { api } from '../../hooks/axiosApi';
import { config } from '../../hooks/helperApi';
import { Ad } from '../../types/Anuncio';


export function DeletarAnuncio() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()
  const {id} = useParams()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    api
      .delete<any, AxiosResponse<Ad, any>>(
        `/ads/${id}`,
        config
      )
      .then((response) => {navigate('/meusAnuncios')});
  };

  return (
    <div className="Container">
      <h1>Deseja Deletar?</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="solicitar-denunciar">
        <Button
            children="Sim"
            height="30px"
            width="100px"
            onClick={() => {}}
          />
        </div>
      </form>
          <Button
            children="Não"
            height="30px"
            width="100px"
            onClick={() => navigate('/meusAnuncios')}
          />
    </div>
  );
}