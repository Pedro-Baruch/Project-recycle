import "../Exibir-Anuncios/exibir.css";
import { useEffect, useState } from "react";
import Button from "../../Components/Button";

interface Post {
  id?: number;
  titulos: string;
  descrição: string;
  preços: number;
  tag: string;
  image:any;
}

export function ExibirAd() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const URL = "http://localhost:3000/posts";
    const options: RequestInit = {
      method: "GET",
    };

    fetch(URL, options)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container-ad">
      {posts.map((aux) => (
        <ul className="container-Informacoes">
          <li className="usuario-foto">
            <img className="foto-perfil" />
            <p>Usuário</p>
          </li>
          <li key={aux.id}>{aux.titulos}</li>
          <li key={aux.id}>{aux.descrição}</li>
          <li key={aux.id}>Preços: {aux.preços}</li>
          <li className="pruduto-tag" key={aux.id}>
            {aux.tag}
          </li>
          <li>
            <img className="foto-produto" />
          </li>
          <li className="solicitar-denunciar">
            <Button children="Solicitar" height="30px" width="100px"onClick={()=>{console.log("click")}} />
            <Button children="Denunciar" height="30px" width="100px" onClick={()=>{console.log("click")}}/>
          </li>
        </ul>
      ))}
    </div>
  );
}
