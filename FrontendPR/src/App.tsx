import { Header } from "./Components/Header-Full/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { CriarAnuncio } from "./pages/Criar-Anuncio";
import Footer from "./Components/Footer";
import { Registro } from "./pages/Registro";
import { Home } from "./pages/Exibir-Anuncios";
import { Login } from "./pages/Login";
import { ExibirEM } from './Components/GetEmpresa/index';
import { Update } from './pages/UpdatePosts/index';


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
             <Route path="/home/empresa" element={<ExibirEM/>}/> 
            <Route path="/create" element={<CriarAnuncio />} />
            <Route path="/edit/:id" element={<Update />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
