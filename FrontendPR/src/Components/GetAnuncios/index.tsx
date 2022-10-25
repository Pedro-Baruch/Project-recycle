import "../GetAnuncios/exibir.css";
import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import axios from "axios";
import { Link } from "react-router-dom";

interface Ad {
  id?: number;
  title: string;
  description: string;
  price: string;
}

export function ExibirAd() {
  const [ad, setAd] = useState<Ad[]>([]);

  let token = localStorage.getItem("authToken");

  const bodyParameters = {
    token: "value",
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const URL = "http://localhost:3000/ads";

    axios
      .get(URL, config)
      .then((response) => {
        setAd(response.data);
      })
      .catch();
  }, [ad]);

  const handleDeleteTask = async (id?: number) => {
    axios.delete(`http://localhost:3000/posts/${id}`).then((resp) => resp.data);
  };

  return (
    <div className="container-ad">
      {ad.map((aux) => (
        <ul className="container-Informacoes">
          <li className="usuario-foto">
            <img className="foto-perfil" />
            <p>Usuário</p>
          </li>
          <li key={aux.id}>{aux.title}</li>
          <li>{aux.description}</li>
          <li>Preço: R${aux.price}</li>
          <li className="pruduto-tag">tag</li>
          <li>
            <img className="foto-produto" />
          </li>
          <li className="solicitar-denunciar">

            <Link to={`/edit/${aux.id}`}>
              <Button
                children="Update"
                height="30px"
                width="100px"
                
              />
            </Link>

            <Button
              children="Delete"
              height="30px"
              width="100px"
              onClick={()=>{handleDeleteTask(aux.id)}}
            />
          </li>
        </ul>
      ))}
    </div>
  );
}
