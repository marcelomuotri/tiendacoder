import React from 'react'
import {
    Link
  } from "react-router-dom";
import './opciones.css'



const Opciones = () => {
    return (
        <div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                      
                            <div class="collapse navbar-collapse justify-content-center" >
                                <div class="navbar-nav ">
                                
                                <Link class="link" to='/' >
                                    <a class="nav-item nav-link text " href="#">INICIO</a>
                                </Link>
                                <Link class="link" to='/tienda'>   
                                    <a class="nav-item nav-link text" href="#">TIENDA</a>
                                </Link>
                                <Link class="link" to='/quienessomos'>
                                    <a class="nav-item nav-link text" href="#">QUIENES SOMOS</a>
                                </Link>
                                <Link class="link" to='/contacto'>
                                    <a class="nav-item nav-link text" href="#">CONTACTO</a>
                                </Link>
                                </div>
                            </div>
                           
                      
        </div>
    )
}

export default Opciones
