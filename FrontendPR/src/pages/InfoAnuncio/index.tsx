import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button2 } from "../../Components/Button2";
import { Button3 } from "../../Components/Button3";
import { UserProfile } from "../../Components/UserProfile";
import { api } from "../../hooks/axiosApi";
import { config } from "../../hooks/helperApi";
import { Ad } from "../../types/Anuncio";
import { formatCurrency } from "../../util/formatCurrency";
import { Container, Flex } from "./style";

export interface UserRequest {
  id: string;
  adId: string;
  accepted: boolean;
  userProfileId: string;
  assignedAt: string
  assignedBy: string
}

export function InfoAnuncio() {
  const [ad, setAd] = useState<Ad>()
  const [solicitacoes, setSolicitacoes] = useState<UserRequest>()
  const {id} = useParams()

  useEffect(() => {
    api.get(`/ads/${id}`, config).then((response) => {
      setAd(response.data);
    });

    api.get(`/ads/${id}/adRequest`, config).then((response) => {
      setSolicitacoes(response.data)
    })

  }, []);

  function solicitarAnuncio () {
    try {
      api.post(`/ads/${id}/requestAd`,{}, config).then((response) => {
        alert('Solicitação enviada')
      })
    } catch (error) {
      alert('Error rrrr')
    }
  }

  return(
    <Container>
      <Flex>
        <div className="image">
          <img src="https://recicla.club/wp-content/uploads/2021/11/design-blog-37-.png" alt="" />
        </div>
        <div className="content">
          <h3>{ad?.title}</h3>
          <p>
            {ad?.description}
          </p>
          <div className="price">{formatCurrency(ad?.price as number)}</div>
          {
            !solicitacoes ? <Button2 name="Solicitar" onClick={solicitarAnuncio}/> : <Button3 name="Solicitar"/>
          }
          
        </div>
      </Flex>
      <UserProfile
        profilePictureUrl={ad?.userProfile.profilePictureUrl}
        name = {ad?.userProfile.user.name}
      />
    </Container>
  )
}