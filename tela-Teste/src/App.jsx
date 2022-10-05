import './assets/app.css';
import Box from './componentes/Box.Anuncios';
import Footer from './componentes/Footer';
import Header from './componentes/Header'


function App() {


  return (
    <main>
      <Header />
      <div id='container'>
        <Box />
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </main>
  );
}

export default App;