import React from 'react'
import './contacto.css'  
function Pagina5() {
    return (
        <div className="container p-4">
            <div className="row ">
                <div className="col ">
                    <div className="row p-2">
                        <div class="contacto-container">
    <h2> Contactanos</h2>

    <div class="botones-contacto">
        <a href="#" class="btn-contacto whatsapp">WhatsApp</a>
        <a href="#" class="btn-contacto email">Email</a>
        <a href="#" class="btn-contacto llamada">Llamada</a>
    </div>
</div>
                    </div>
                    <div className="row p-2">
                        <div class="contacto-container">
    <h2> Mas referencias nuestras</h2>

    <div class="botones-contacto">
        <a href="#" class="btn-contacto whatsapp">Message</a>
        <a href="#" class="btn-contacto email">Telegram</a>
        <a href="#" class="btn-contacto llamada">Youtube</a>
    </div>
</div>
                    </div>
                </div>
                <div className="col">
                    <div class="contacto-lugar">
    <h1> CONTACTOS UMSA NAVIDAD </h1>
    <p class="descripcion">
        Visítanos en la UMSA y asegura tu lugar en nuestras actividades navideñas. ¡Haz tu reserva y pasala bien en nuestra chocolatada!
    </p>

    <div class="botones-lugar">
        <a href="#" class="btn-lugar reserva">Reservas</a>
        <a href="#" class="btn-lugar info">Información</a>
        <a href="#" class="btn-lugar soporte">Soporte</a>
        <a href="#" class="btn-lugar ubicacion">Ubicación</a>
    </div>
</div>

                </div>
            </div>
        </div>
    )
}

export default Pagina5