import { Header } from "./Components/Header-Full/Header"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import './assets/App.css'
import Footer from "./Components/Footer"



import { Navigation } from "./Components/Nav"
import { ExibirAnuncio } from './pages/Exibir-Anuncios/index';

function App() {
    return (
        <main>
            <Router>
                <Header />
                <Navigation/>
                    <Routes>
                        
                        <Route path='/home/anuncio' element={<ExibirAnuncio/>} />
                    </Routes>
                <Footer />
            </Router>
        </main>)
}

export default App
