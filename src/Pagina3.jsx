import React from 'react'
import './App.css'  
import Decoraciones from './Decoraciones'


function Pagina3() {
    return (
        <>
        <div className="container p-3 ">
            <div className="row">
                <div className="col ">

                    <div className="elpepe">

                        <div class="card mb-3 bg-primary">
    <div class="row g-0">
        <div class="col-md-4">
        <img src="https://usagif.com/wp-content/uploads/gif/snwflks-32.gif" class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">REGALOS EN LA NAVIDAD</h5>
            <p class="card-text">“La Navidad es el momento perfecto para compartir amor, gratitud y pequeños gestos que hacen la diferencia. Nuestra colección de regalos está pensada para crear sonrisas auténticas, fortalecer la unión y dejar huellas en el corazón. Elige un presente especial y convierte esta temporada en un recuerdo maravilloso.”</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
    </div>
    </div>
        <div class="accordion accordion-flush bg-primary" id="accordionFlushExample">
    <div class="accordion-item bg-primary">
        <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Regalos para Niños
        </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">“Juguetes, peluches y sorpresas llenas de magia para los más pequeños. ¡Haz que esta Navidad sea inolvidable!”</div>
        </div>
    </div>
    <div class="accordion-item bg-primary">
        <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Regalos para Adultos
        </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Detalles útiles, elegantes y originales que alegrarán a todos. Encuentra opciones pensadas con cariño.</div>
        </div>
    </div>
    <div class="accordion-item bg-primary">
        <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Detalles Económicos
        </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Pequeños regalos con gran encanto. Ideas accesibles que no sacrificarán la magia de la Navidad.</div>
        </div>
    </div>
    </div>
                    </div>

                </div>
                <div className="col p-3 mt-3">
    <Decoraciones fondoGif="https://img1.picmix.com/output/stamp/normal/3/0/3/1/701303_07519.gif" />
    <Decoraciones fondoGif="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjDN8e0hq1SnmssMQUnxreJJmpgFMwA1waw&s" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Pagina3