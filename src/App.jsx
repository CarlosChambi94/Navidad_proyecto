import "./Navbar.css"
import './App.css'  
import { Route, Routes } from 'react-router-dom';
import Pagina1 from './Pagina1';
import Pagina2 from "./Pagina2";
import Pagina3 from "./Pagina3";
import Pagina4 from "./Pagina4";
import Pagina5 from "./Pagina5";
function App() {
  return (
    <>
          <div class="background-gif"></div>

    <div class="lights-container">
      <ul class="lights">
        <li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li>
      </ul>
    </div>

    <nav class="nav">
      <div class="logo">FELIZ NAVIDAD</div>
      <ul class="menu">
        <li><a href="/">Inicio</a></li>
        <li><a href="/Pagina2">Regalos</a></li>
        <li><a href="/Pagina3">Decoración</a></li>
        <li><a href="/Pagina4">Eventos</a></li>
        <li><a href="/Pagina5">Contacto</a></li>
      </ul>
    </nav>






      <Routes>
        <Route path='/' element={<Pagina1/>}/>
        <Route path="/pagina2" element={<Pagina2/>}/>
        <Route path="/pagina3" element={<Pagina3/>}/>
        <Route path="/pagina4" element={<Pagina4/>}/>
        <Route path="/pagina5" element={<Pagina5/>}/>
      </Routes>
    </>
  );
}

export default App;