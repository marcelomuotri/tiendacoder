import React from 'react'
import quienes from '../../assets/quienes/fotoQuienes.jpg'
import './quienes.css'

const Quienes = () => {
    return (
        <div className= "container mt-4">
            <div className="row ">
                <div className="col-lg-6 ">
                    <h2 className="tituloQuienes" >Quienes Somos</h2>
                    <p className="textoQuienes">Hola a todos! Gracias por visitar nuestro sitio. Somos Victoria y Gonzalo, comenzamos con este proyecto porque somos amantes de la naturaleza y el arte. Creemos en la importancia de tener plantas naturales en el interior para darle vida a tu hogar. Por esto, nuestro deseo es hacerte llegar los mejores diseños de macetas, trayéndote propuestas innovadoras y creativas que te sorprenderán a la hora de decorar tu casa o elegir un regalo.</p>
                </div>
                <div className="col-lg-6 ">
                    <img className= "rounded mx-auto d-block fotoQuienes" src={quienes} alt="quienes somos"></img>
                </div>
            </div>
        </div>
    )
}

export default Quienes
