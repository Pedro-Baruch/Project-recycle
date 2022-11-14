import Button from "../../Components/Button";
import "../../pages/Criar-Anuncio/create.css";

export const CriarAvalicao = () => {
  return (
    <div className="Container">
      <h1>Fazer denúncia</h1>
      <form className="form">
        <div className="bloco">
          <label>Titulo</label>
          <input className="input" type="text" />
        </div>
        <div className="bloco">
          <label>Descrição da avaliação</label>
          <input className="input" type="text" />
        </div>
        <div className="ButtonCriar">
          <Button
            children="Enviar avaliação"
            height="60px"
            width="120px"
            onClick={() => {
              alert("Avaliação enviada");
            }}
          />
        </div>
      </form>
    </div>
  );
};
