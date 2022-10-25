import axios from "axios";
import { FormEvent, useState } from "react";
import Button from "../../Components/Button";
import "../../pages/Criar-Anuncio/create.css";

export const Registro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const URL = "http://localhost:3000";

    try {
      axios.post(URL, {
        name: name,
        email: email,
        password: password,
      })

      alert('Conta registrada!')
    } catch (err) {
      alert('Erro ao criar ao criar usuário!')
    }

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
