import Button from "../../Components/Button";
import "../../pages/Criar-Anuncio/create.css";

export const Registro = () => {
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
