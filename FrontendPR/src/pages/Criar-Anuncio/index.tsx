import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { FormEvent, useEffect, useState } from "react";
import Button from "../../Components/Button";
import "./create.css";

interface Post {
  id?: number;
  titulos: string;
  descrição: string;
  preços: number;
  tag: string;
}

export const CriarAnuncio = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [titulos, setTitulos] = useState("");
  const [preços, setPreços] = useState("");
  const [descrição, setDescrição] = useState("");
  const [tag, setTag] = useState("");

  const URL = "http://localhost:3000/posts";
  const config: AxiosRequestConfig = {
    headers: {
      Accept: "application/json",
    },
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(
      `Submeteu... Name: ${titulos}, Valor: R$ ${preços} ${tag}${descrição}`
    );

    const response = await axios.post<any, AxiosResponse<Post, any>, Post>(
      URL,
      { titulos, descrição, preços: Number(preços), tag }
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
              value={titulos}
              onChange={(e) => {
                setTitulos(e.target.value);
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
              value={descrição}
              onChange={(e) => setDescrição(e.target.value)}
            />
          </div>

          <div className="bloco">
            <label>Valor</label>
            <input
              className="input"
              type="text"
              name="valor"
              placeholder="Valor(R$)"
              value={preços}
              onChange={(e) => setPreços(e.target.value)}
            />
          </div>

          <div className="bloco">
            <label>Pesquisar tags</label>
            <input
              className="input"
              type="text"
              name="tags"
              placeholder="#tags"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
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
