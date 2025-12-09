import "./Decoraciones.css";

export default function Decoraciones({ fondoGif }) {
  const items = [
    { nombre: "Luces LED", desc: "Iluminan cualquier espacio navideño." },
    { nombre: "Esferas Rojas", desc: "Decoración clásica y elegante." },
    { nombre: "Guirnalda Verde", desc: "Perfecta para puertas y ventanas." }
  ];

  return (
    <div
      className="decoraciones-container"
      style={{
        backgroundImage: `url(${fondoGif})`,
      }}
    >
      <h2 className="decoraciones-titulo">✨ Decoraciones</h2>

      <div className="decoraciones-grid">
        {items.map((item, index) => (
          <div className="decoracion-card" key={index}>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
