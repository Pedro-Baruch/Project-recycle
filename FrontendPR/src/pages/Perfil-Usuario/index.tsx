import Button from "../../Components/Button";
import "../Perfil-Empresa/perfil.css";

export function PerfilUsuario() {
  // Sem lógica ainda

  return (
    <div className="Container-perfil">
      <ul className="perfil">
        <li className="usuario-foto">
          <img className="foto-perfil" />
          <p>Usuário</p>
        </li>
        <li>Contato</li>
        <li>Nº de anuncios feitos</li>
        <li>Data de registro</li>
        <li>Avaliacão</li>
        <li>
          <h2>Avalições recebidas</h2>
          <div className="bloco-avaliacao">
            <ul>
              <li className="usuario-foto">
                <img className="foto-perfil" />
                <p>Usuário</p>
              </li>
              <li>Avalição sobre o usuário</li>
            </ul>
          </div>
        </li>
        <li className="button">
          <Button
            children="Avaliar"
            height="30px"
            width="100px"
          />
          <Button
            children="Denunciar"
            height="30px"
            width="100px"
          />
        </li>
      </ul>
    </div>
  );
}
