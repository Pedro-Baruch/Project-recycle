import { Header } from "./Components/Header-Full/Header"

import './assets/App.css'
import Footer from "./Components/Footer"
import SearchBar from "./Components/Search-Bar/Filter/searchBar"
import Button from "./Components/Button"





function App() {
return(
<main>
<Header></Header>
<Button children = "I'm a button ▶" onClick={() => console.log("You clicked")}/>
<Button children = "I'm a baruk🃏" onClick={() => console.log("You clicked")}/>

<SearchBar></SearchBar>
<Footer></Footer>
</main>)
}

export default App
