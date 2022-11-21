
interface AnuncioProps {
  userName?: string
  profileImg?: string
  title: string
  description: string
  price: number
  button1?: JSX.Element
  button2?: JSX.Element

}

export function Anuncio ({userName, profileImg, title, description, price, button1, button2}: AnuncioProps) {
  return (
    <div className="container-ad">
        <div className="container-Informacoes">
          <h3 className="usuario-foto">
            <img className="foto-perfil" src={profileImg}/>
            <p>{userName}</p>
          </h3>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Preço: R$ {price}</p>
          <ul>
            <li className="pruduto-tag">tag</li>
            <li>
              <img className="foto-produto" />
            </li>
            <div className="solicitar-denunciar">
            {button1}
            {button2}
            </div>
            
          </ul>
        </div>
    </div>
  );
}