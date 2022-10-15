import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import "../../pages/Criar-Anuncio/create.css";

interface User {
  name: string;
  email: string;
  password: string;
  token?: string;
}

export const Registro = () => {
  const [email, setEmail] = useState("");
  const [name, setNome] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const URL = "http://localhost:3000";

    axios
      .post(URL, {
        name: name,
        email: email,
        password: password,
      })
      .then()
      .catch();
  });
  return (
    <div className="Container">
      <h1>Registro</h1>
      <form className="form">
        <div className="bloco">
          <label>Nome</label>
          <input className="input" type="text" />
        </div>
        <div className="bloco">
          <label>Email</label>
          <input className="input" type="text" />
        </div>
        <div className="bloco">
          <label>Senha</label>
          <input className="input" type="text" />
        </div>
        <div className="ButtonCriar">
          <Button
            children="Registrar"
            height="30px"
            width="100px"
            onClick={() => {
              console.log("click");
            }}
          />
        </div>
      </form>
    </div>
  );
};
