import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import { ExibirCompanies } from './Components/GetEmpresa/index';
import { Header } from "./Components/Header-Full/Header";
import { CriarAnuncio } from "./pages/Criar-Anuncio";
import { CriarAvalicao } from './pages/Criar-Avaliação/index';
import { CriarDenuncia } from './pages/Criar-Denuncia/index';
import { CriarEmpresa } from "./pages/Criar-Empresa";
import { DeletarAnuncio } from "./pages/DeletarAnuncio";
import { EditarAnuncio } from "./pages/EditarAnuncio";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PerfilCompanies } from "./pages/Perfil-Empresa";
import { PerfilUsuario } from './pages/Perfil-Usuario/index';
import { Registro } from "./pages/Registro";
import { TodosOsAnuncios } from "./pages/TodosOsAnuncios";
import { UsuarioAd } from "./pages/Usuario-Anuncio";
import { UsuarioCompany } from "./pages/Usuario-Empresa";

function App() {
  return (
    <main className="ContainerApp">
      <Router>
        <header className="ContainerHeader">
          <Header />
        </header>
        <div className="ContainerPages">
          <Routes>
            <Route path="/" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/company" element={<ExibirCompanies/>} />
            <Route path="/create/ad" element={<CriarAnuncio />} />
            <Route path="/create/company" element={<CriarEmpresa />} />
            <Route path="/profile/user" element={<PerfilUsuario />} />
            <Route path="/profile/company" element={<PerfilCompanies />} />
            <Route path="/ad" element={<TodosOsAnuncios/>} />
            <Route path="/company" element={<UsuarioCompany/>} />
            <Route path="/criar/denuncia" element={<CriarDenuncia/>} />
            <Route path="/criar/avaliacao" element={<CriarAvalicao/>} />
            <Route path="/meusAnuncios" element={<UsuarioAd/>} />
            <Route path="/meusAnuncios/editar/:id" element={<EditarAnuncio/>} />
            <Route path="/meusAnuncios/deletar/:id" element={<DeletarAnuncio/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
