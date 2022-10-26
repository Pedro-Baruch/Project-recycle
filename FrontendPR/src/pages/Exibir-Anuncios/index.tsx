import { ExibirAd } from "../../Components/GetAnuncios"
import { ExibirCompanies } from "../../Components/GetEmpresa"
import { Navigation } from "../../Components/Nav"

export const Home = () => {
  return(
    <div>
      <Navigation/>
      <ExibirAd/>
      <ExibirCompanies/>
    </div>
  )
}