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
        <li><a href="/Navidad_proyecto/">Inicio</a></li>
        <li><a href="/Navidad_proyecto/Pagina2">Regalos</a></li>
        <li><a href="/Navidad_proyecto/Pagina3">Decoración</a></li>
        <li><a href="/Navidad_proyecto/Pagina4">Eventos</a></li>
        <li><a href="/Navidad_proyecto/Pagina5">Contacto</a></li>
      </ul>
    </nav>






      <Routes>
        <Route path='/Navidad_proyecto/' element={<Pagina1/>}/>
        <Route path="/Navidad_proyecto/Pagina2" element={<Pagina2/>}/>
        <Route path="/Navidad_proyecto/Pagina3" element={<Pagina3/>}/>
        <Route path="/Navidad_proyecto/Pagina4" element={<Pagina4/>}/>
        <Route path="/Navidad_proyecto/Pagina5" element={<Pagina5/>}/>
      </Routes>
    </>
  );
}

export default App;