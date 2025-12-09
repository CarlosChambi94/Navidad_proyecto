import "App.css";

export default function Navbar() {
    return (
        <nav className="nav">
        <div className="logo">🎅 Navidad</div>

        <ul className="menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tradiciones</a></li>
            <li><a href="#">Recetas</a></li>
            <li><a href="#">Regalos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        </nav>
    );
}
