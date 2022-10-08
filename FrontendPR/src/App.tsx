import { Header } from "./Components/Header-Full/Header"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

import './assets/App.css'
import Footer from "./Components/Footer"


import { Home as CriarAnuncio } from "./pages/Criar-Anuncio"
import { Navigation } from "./Components/Nav"




function App() {
    return (
        <main>
            <Router>
                <Header />
                <Navigation/>
                    <Routes>
                        <Route path='/create' element={<CriarAnuncio></CriarAnuncio>} />
                    </Routes>
                <Footer />
            </Router>
        </main>)
}

export default App
