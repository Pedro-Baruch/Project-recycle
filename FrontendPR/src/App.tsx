import { Header } from "./Components/Header-Full/Header"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

import './assets/App.css'
import Footer from "./Components/Footer"
import SearchBar from "./Components/Search-Bar/Filter/searchBar"

import { Home } from "./pages/Home"




function App() {
    return (
        <main>
            <Router>
                <Header />
                    <Routes>
                        <Route path='/create' element={<Home></Home>} />
                    </Routes>
                <Footer />
            </Router>
        </main>)
}

export default App
