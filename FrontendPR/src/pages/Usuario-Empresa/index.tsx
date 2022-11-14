import Button from '../../Components/Button/index';
import "../../Components/GetAnuncios/exibir.css";
import "../Usuario-Anuncio/usuario-ad.css";

export const UsuarioCompany = () => {
  return(
    <div className="container-ad">
      <ul className="container-Informacoes">
        <li className="usuario-foto">
          <img className="foto-perfil" />
          <p>Nome empresa</p>
        </li>
        <li>Endereço</li>
        <li>Telefone</li>
        <li>Horario de funcionamento</li>
        <li>Description</li>
        <li>Avaliação</li>
        <li>
          <img className="foto-produto" />
        </li>
        <li className="solicitar-denunciar">
          <Button
            children="Editar"
            height="30px"
            width="100px"
            onClick={() => {}}
          />
          <Button
            children="Encerrar"
            height="30px"
            width="100px"
            onClick={() => {}}
          />
        </li>
      </ul>
      <div className="criar-Button-user">
        <Button
          children="Criar Ad"
          height="30px"
          width="100px"
          onClick={() => {}}
        />
      </div>
    </div>
  )
}