import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import Button from "../../Components/Button";
import "../../pages/Criar-Anuncio/create.css";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const sucesso = () => {
   alert('conta registrada')
   navigate("/login")
  }
  const errorReg = () => {
   alert('conta não registrada')
   
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const URL = "http://localhost:3000";

    axios
      .post(URL, {
        name: name,
        email: email,
        password: password,
      })
      .then(sucesso)
      .catch(errorReg);
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
          
            <Button
              children="Registrar"
              height="30px"
              width="100px"
              
            />
          
        </div>
      </form>
    </div>
  );
};
