import Button from "../../Components/Button";
import "../Perfil-Empresa/perfil.css"

export function PerfilCompanies() {
  // Sem lógica ainda

  return (
    <div className="Container-perfil">
      <ul className="perfil">
        <li className="Titulo-perfil">
          <p>Empresa</p>
        </li>
        <li>Endereço</li>
        <li>Telefone</li>
        <li>Horário</li>
        <li>Descrição</li>
        <li>Avaliacão</li>
        <li className="imagem-empresa"><img/></li>
        <li className="button">
          <Button
            children="Avaliar"
            height="30px"
            width="100px"
            onClick={() => {}}
          />
          <Button
            children="Denunciar"
            height="30px"
            width="100px"
            onClick={() => {}}
          />
        </li>
      </ul>
    </div>
  );
}
