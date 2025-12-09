import React from 'react'
import './ads.css'  
function Pagina1() {
    return (
    <>
    <div className="container p-3">
        <div className="row">
            <div className="col">
            <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="https://wallpapers.com/images/hd/beautiful-christmas-pictures-dw1ft945qw39avwg.jpg" class="d-block w-100" alt="..."/>
        </div>
                <div class="carousel-item">
        <img src="https://cdn.pixabay.com/photo/2023/11/26/10/16/christmas-ball-8413268_1280.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/003/503/465/small/holiday-new-year-and-merry-christmas-background-illustration-free-vector.jpg" class="d-block w-100" alt="..."/>
            </div>
        <div class="carousel-item">
        <img src="https://i.ytimg.com/vi/o6waUCc-dvA/hq720.jpg?sqp=-oaymwExCK4FEIIDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYICAjKH8wDw==&rs=AOn4CLABgSGtemmzPacdxl7ART7k8Ryvog" class="d-block w-100" alt="..."/>
            </div>
        <div class="carousel-item">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/028/707/583/small/new-year-holiday-concept-large-christmas-tree-decorated-with-balls-and-garland-ai-generated-image-photo.jpg" class="d-block w-100" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>

            </div>
            <div className="col">
    <div class="ads" >
        
            <section id="ad" aria-label="Publicidad">
            <div class="ad-overlay">
            <div class="ad-text">
            <h2>¡REGISTRAT  E AHORA!</h2>
            <form>
    <div class="row mb-2">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3"/>
        </div>
    </div>
    <div class="row ">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3"/>
        </div>
    </div>
    <fieldset class="row">
        <legend class="col-form-label col-sm-2 pt-0">Registrar</legend>
        <div class="col-sm-10">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
            <label class="form-check-label" for="gridRadios1">
            Feliz navidad
            </label>
        </div>
        
    
        </div>
    </fieldset>
    <div class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
            <a class="ad-btn" href="#">Ver promociones</a>
            </div>
            </div>
            </section>
<section id="ad" aria-label="Publicidad">
        <div class="ad-overlay">
        <div class="ad-text">
        <h2>¡APORTA PARA UNA BUENA NAVIDAD!</h2>
            <div class="row g-3">
    <div class="col">
        <input type="text" class="form-control" placeholder="CVV" aria-label="First name"/>
    </div>
    <div class="col">
        <input type="text" class="form-control" placeholder="CVC" aria-label="Last name"/>
    </div>
    </div>
        <a class="ad-btn" href="#">!DONAR FACIL CLICK!</a>
        </div>
        </div>
        </section>

        </div>

            </div>
        </div>
    </div>
    </>
    )


}

export default Pagina1