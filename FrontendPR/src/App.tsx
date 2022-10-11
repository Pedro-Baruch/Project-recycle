
import { Header } from "./Components/Header-Full/Header"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import './assets/App.css'
import Footer from "./Components/Footer"
import { ExibirAnuncio } from './pages/Exibir-Anuncios/index';
import { CriarAnuncio } from "./pages/Criar-Anuncio"

function App() {
    return (
        <main>
            <Router>
                <Header />
                
                    <Routes>
                        <Route path="/create"element={<CriarAnuncio/>}/>
                        <Route path='/home/anuncio' element={<ExibirAnuncio/>} />
                    </Routes>
                <Footer />
            </Router>
        </main>)

}

export default App;
