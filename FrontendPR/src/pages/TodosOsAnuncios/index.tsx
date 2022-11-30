import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnuncioModal } from "../../Components/AnuncioModal";
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
      console.log(ads)
    });
  }, []);

  return (
    <div>
      {
        ads.map((ad) => (
          <AnuncioModal
            key={ad.id}
            title = {ad.title}
            description = {ad.description}
            price = {ad.price}
            onClick={() => navigate(`/ads/${ad.id}`)}
          />
        ))
      }
    </div>
  );
};