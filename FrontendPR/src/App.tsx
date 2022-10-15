import { Header } from "./Components/Header-Full/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { CriarAnuncio } from "./pages/Criar-Anuncio";
import Footer from "./Components/Footer";
import { Registro } from "./pages/Registro";
import { Home } from "./pages/Exibir-Anuncios";

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
            <Route path="/home" element={<Home/>} />
            <Route path="/" element={<Registro/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </main>
  );
}

export default App;
