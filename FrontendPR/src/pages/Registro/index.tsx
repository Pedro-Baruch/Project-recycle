import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import "../../pages/Criar-Anuncio/create.css";

export const Registro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const URL = "http://localhost:3000";

    axios
      .post(URL, {
        name: name,
        email: email,
        password: password,
      })
      .then()
      .catch();
  };
  return (
    <div className="Container">
      <h1>Registro</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="bloco">
          <label>Nome</label>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="bloco">
          <label>Email</label>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="bloco">
          <label>Senha</label>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="ButtonCriar">
          <Link to={"/login"}>
            <Button
              children="Registrar"
              height="30px"
              width="100px"
              onClick={() => {
                alert("Conta registrada");
              }}
            />
          </Link>
        </div>
      </form>
    </div>
  );
};
