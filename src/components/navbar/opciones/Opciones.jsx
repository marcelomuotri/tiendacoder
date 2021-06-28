import React from 'react'
import {
    Link
  } from "react-router-dom";
import './opciones.css'



const Opciones = () => {

   

    return (
        <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                      
                            <div className="collapse navbar-collapse justify-content-center" >
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
