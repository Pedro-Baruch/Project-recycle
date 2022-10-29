import { Header } from "./Components/Header-Full/Header";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import { CriarAnuncio } from "./pages/Criar-Anuncio";
import Footer from "./Components/Footer";
import { Registro } from "./pages/Registro";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { CriarEmpresa } from "./pages/Criar-Empresa";
import { PerfilUsuario } from './pages/Perfil-Usuario/index';
import { PerfilCompanies } from "./pages/Perfil-Empresa";

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
            <Route path="/create/ad" element={<CriarAnuncio />} />
            <Route path="/create/company" element={<CriarEmpresa />} />
            <Route path="/profile/user" element={<PerfilUsuario />} />
            <Route path="/profile/company" element={<PerfilCompanies />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
