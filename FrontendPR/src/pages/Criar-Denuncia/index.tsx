import Button from "../../Components/Button";
import "../../pages/Criar-Anuncio/create.css";

export const CriarDenuncia = () => {
  return (
    <div className="Container">
      <h1>Fazer denúncia</h1>
      <form className="form">
        <div className="bloco">
          <label>Titulo</label>
          <input className="input" type="text" />
        </div>
        <div className="bloco">
          <label>Notivo da denúncia</label>
          <input className="input" type="text" />
        </div>
        <div className="bloco">
          <label>Descrição detalhada do motivo</label>
          <input className="input" type="text" />
        </div>
        <div className="ButtonCriar">
          <Button
            children="Enviar denúncia"
            height="60px"
            width="120px"
            onClick={() => {
              alert("Denuncia enviada");
            }}
          />
        </div>
      </form>
    </div>
  );
};
