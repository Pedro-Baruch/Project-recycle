import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Anuncio } from "../../Components/Anuncio";
import Button from "../../Components/Button";
import "../../Components/GetAnuncios/exibir.css";
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";
import { Ad } from "../../types/Anuncio";
import "../Usuario-Anuncio/usuario-ad.css";

export const UsuarioAd = () => {
  const [ads, setAds] = useState<Ad[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    api.get("/ads/myAds", config).then((response) => {
      setAds(response.data);
    });
  }, []);

  return (
    <div>
      {
        ads.map((ad) => (
          <Anuncio 
            key={ad.id}
            title = {ad.title}
            description = {ad.description}
            price = {ad.price}
            button1 = {
              <Button
                children="Editar"
                height="30px"
                width="100px"
                onClick={() => navigate(`/meusAnuncios/editar/${ad.id}`)}
              />

            }
            button2 = {
              <Button
                children="Deletar"
                height="30px"
                width="100px"
                onClick={() => navigate(`/meusAnuncios/deletar/${ad.id}`)}
              />
            }
          />
        ))
      }
      <div className="criar-Button-user">
        <Link to="/create/ad">
        <Button
          children="Criar Ad"
          height="30px"
          width="100px"
          onClick={() => {}}
          />
          </Link>
      </div>
    </div>
  );
};
