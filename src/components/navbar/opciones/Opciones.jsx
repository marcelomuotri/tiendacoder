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
                                
                                <Link className="link" to='/' >
                                    <a className="nav-item nav-link text" href="#">Inicio</a>
                                </Link>
                                <Link className="link" to='/tienda'>   
                                    <a className="nav-item nav-link text active" href="#">Tienda</a>
                                </Link>
                                <Link className="link" to='/quienessomos'>
                                    <a className="nav-item nav-link text" href="#">Quienes somos</a>
                                </Link>
                                <Link className="link" to='/contacto'>
                                    <a className="nav-item nav-link text" href="#">Contactanos!</a>
                                </Link>
                                </div>
                            </div>
                           
                      
        </div>
    )
}

export default Opciones
