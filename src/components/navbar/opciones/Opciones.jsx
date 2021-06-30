import React from 'react'
import {
    Link
  } from "react-router-dom";
import './opciones.css'



const Opciones = () => {

   

    return (
        <div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                      
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup" >
                                <div className="navbar-nav navbar_opciones ">
                                
                                <Link className="link nav-item nav-link text" to='/' >
                                   Inicio
                                </Link>
                                <Link className="link nav-item nav-link text active" to='/tienda'>   
                                   Tienda
                                </Link>
                                <Link className="link nav-item nav-link text" to='/quienessomos'>
                                  Quienes somos
                                </Link>
                                <Link className="link nav-item nav-link text" to='/contacto'>
                                   Contactanos!
                                </Link>
                                </div>
                            </div>
                           
                      
        </div>
    )
}

export default Opciones
