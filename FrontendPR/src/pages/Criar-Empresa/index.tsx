import Button from "../../Components/Button";
import "../Criar-Anuncio/create.css";

export function CriarEmpresa() {
  // Sem logica ainda
  
  return (
    <div className="Container">
      <h1>Registre sua empresa</h1>
      <form className="form">
        <div className="bloco">
          <label>CNPJ</label>
          <input className="input" type="text" name="CNPJ" />
        </div>
        <div className="bloco">
          <label>Nome da empresa</label>
          <input className="input" type="text" name="nome" />
        </div>
        <div className="bloco">
          <label>Endereço</label>
          <input className="input" type="text" name="endereco" />
        </div>
        <div className="bloco">
          <label>Horário de funcionamento</label>
          <input className="input" type="text" name="horario" />
        </div>
        <div className="bloco">
          <label>Descrição</label>
          <input className="input" type="text" name="descricao" />
        </div>
        <div className="bloco">
          <label>Fotos da empresa</label>
          <input className="input" type="file" name="image" />
        </div>
        <div className="ButtonCriar">
          <Button
            children="Criar empresa"
            height="50px"
            width="120px"
            onClick={() => {}}
          />
        </div>
      </form>
    </div>
  );
}
