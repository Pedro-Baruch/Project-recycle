import { Header } from "./Components/Header-Full/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { ExibirAd } from "./pages/Exibir-Anuncios/index";
import { CriarAnuncio } from "./pages/Criar-Anuncio";
import Footer from "./Components/Footer";
import { Registro } from "./pages/Registro";

function App() {
  return (
    <main className="ContainerApp">
      <Router>
        <header className="ContainerHeader">
          <Header />
        </header>
        <div className="ContainerPages">
          <Routes>
            <Route path="/create" element={<CriarAnuncio />} />
            <Route path="/home/anuncio" element={<ExibirAd />} />
            <Route path="/registro" element={<Registro/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </main>
  );
}

export default App;
