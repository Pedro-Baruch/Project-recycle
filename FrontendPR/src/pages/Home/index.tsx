import { ExibirAd } from "../../Components/GetAnuncios"
import { ExibirCompanies } from "../../Components/GetEmpresa"
import { Navigation } from "../../Components/Nav"

export const Home = () => {
  return(
    <div>
      <Navigation/>
      <ExibirAd/>
      <ExibirCompanies/>
      <h6>{localStorage.getItem("authToken")}</h6>
    </div>
  )
}