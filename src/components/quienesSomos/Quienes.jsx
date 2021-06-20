import React from 'react'

import './quienes.css'

import fotoizquierda from '../../assets/quienes/fotoizquierda.jpg'
import fotoderecha from '../../assets/quienes/fotoderecha.jpg'

const Quienes = () => {


    {document.body.style = 'background: #F3F4EE'} {/* cambio el color de fondo */}

    
    return (
        <div class="container">
            <div className= "row">
                <div className="col-lg-6 col-sm-12">
                   <div className="cuadradosVerdes izquierda">
                        <div className="cardIzquierda">
                            <img className="fotoizquierda" src={fotoizquierda}></img>
                            <div className="divTextoIzquierda">
                                <p className="ambosTextos">Hola a todos!</p>
                                <p className="ambosTextos">Somos Victoria y Gonzalo, comenzamos con este proyecto porque nos encanta la naturaleza y la decoracion.</p>
                                <p className="ambosTextos">Creemos en la importancia de tener plantas naturales en el interior para darle vida a tu hogar.</p>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="col-lg-6 col-sm-12" >
                    <div className="cuadradosVerdes derecha">
                        <div className="cardDerecha">
                            <img className="fotoDerecha" src={fotoderecha}></img>
                            <div className="divTextoIzquierda">
                                <p className="ambosTextos">Por esto, nuestro deseo es hacerte llegar los mejores diseños de macetas, trayendote propuestas innovadoras y creativas que te sorprenderan a la hora de decorar tu casa o elegir un regalo.</p>
                                <p className="ambosTextos">Esperamos poder conocerte muy pronto!</p>
                                <p className="ambosTextos">Gracias por visitarnos</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Quienes
