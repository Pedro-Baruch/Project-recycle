import axios from "axios";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import "../../pages/Criar-Anuncio/create.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let setToken = (token: string) => {
    localStorage.removeItem("authToken")
    localStorage.setItem("authToken", token);

  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const URL = "http://localhost:3000/login";



    axios
      .post(URL, {
        email: email,
        password: password,
      })
      .then((response) => {
        setToken(response.data.token);
      })
      .catch();
  };

  return (
    <div className="Container">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
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
            children="Login"
            height="30px"
            width="100px"
          />
        </div>
      </form>
    </div>
  );
};
