import Button from "../../Components/Button";
import "../../Components/GetAnuncios/exibir.css";
import "../Usuario-Anuncio/usuario-ad.css";

export const UsuarioAd = () => {
  return (
    <div className="container-ad">
      <ul className="container-Informacoes">
        <li className="usuario-foto">
          <img className="foto-perfil" />
          <p>Usuário</p>
        </li>
        <li>Title</li>
        <li>Description</li>
        <li>price</li>
        <li>tag</li>
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
  );
};
