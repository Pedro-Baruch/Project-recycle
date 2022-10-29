import { FormEvent, useState } from "react";
import Button from "../../Components/Button";
import { adApi } from "../../hooks/axiosApi";
import "./create.css";

export const CriarAnuncio = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const api = adApi();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await api.postAd(title, price, description);
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
              onClick={() => {}}
            />
          </div>
        </form>
      </div>
    </main>
  );
};
