import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { FormEvent, useEffect, useState } from "react";
import Button from "../../Components/Button";
import "./create.css";

interface Ad {
  id?: number;
  title: string;
  description: string;
  price: number;
}

export const CriarAnuncio = () => {
  const [posts, setPosts] = useState<Ad[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const URL = "http://localhost:3000/ads";
  const config: AxiosRequestConfig = {
    headers: {
      Accept: "application/json",
    },
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await axios.post<any, AxiosResponse<Ad, any>, Ad>(
      URL,
      { title, description, price: Number(price) }
    );

    const aux = response.data;
    posts.push(aux);
    setPosts([...posts, aux]);
    alert("Carro cadastrado!");
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
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
              value={""}
              onChange={(e) => {}}
            />
          </div>
          <div className="bloco">
            <label>Enviar Foto</label>
            <input
              className=""
              type="file"
              name="image"
              value={""}
              onChange={(e) => {}}
            />
          </div>
          <div className="ButtonCriar">
            <Button
              children="Criar anúncio"
              height="50px"
              width="120px"
              onClick={() => console.log("")}
            />
          </div>
        </form>
      </div>
    </main>
  );
};
