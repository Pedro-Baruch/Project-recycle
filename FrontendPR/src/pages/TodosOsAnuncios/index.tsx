import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Anuncio } from "../../Components/Anuncio";
import Button from "../../Components/Button";
import "../../Components/GetAnuncios/exibir.css";
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";
import { Ad } from "../../types/Anuncio";
import "../Usuario-Anuncio/usuario-ad.css";

export const TodosOsAnuncios = () => {
  const [ads, setAds] = useState<Ad[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    api.get("/ads", config).then((response) => {
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
                children="Solicitar"
                height="30px"
                width="100px"
                onClick={() => {}}
              />
            }

            button2 = {
              <Button
                children="Denunciar"
                height="30px"
                width="100px"
                onClick={() => {}}
              />
            }
          />
        ))
      }
    </div>
  );
};