import React from 'react'
import './footer.css'
import facebook from '../../assets/footer/facebook.png'
import instagram from '../../assets/footer/instagram.png'
import whatsapp from '../../assets/footer/whatsap.png'
import visa from '../../assets/footer/visa.png'
import master from '../../assets/footer/master.png'
import american from '../../assets/footer/american.png'
import mercadopago from '../../assets/footer/mercapago.png'
import copyright from '../../assets/footer/copyright.png'

const Footer = () => {
    return (
        <div className="row contenedor_footer ">
            <div className="col-lg-4 centralos">
                <h4> AYUDA </h4>
                <p>Politica de cambio</p>
                <p>Politica de devolucion</p>
                <p>Politica de privacidad</p>
            </div>

            <div className="col-lg-4 centralos">
            <h4> SIGUENOS</h4>
                <div>
                    <img src={instagram} alt="facebook verde"></img>
                    <img className="whatsap" src={whatsapp} alt="facebook verde"></img>
                    <img src={facebook} alt="facebook verde"></img>
                </div>
                <p>Haz tu consulta!</p>
                <p>info@mrjungle.com.ar</p>
            </div>

            <div className="col-lg-4 centralos">
                <h4>METODOS DE PAGO</h4>
                <div>
                    <img  className="tarjetas" src={visa} alt="facebook verde"></img>
                    <img  className="tarjetas" src={master} alt="facebook verde"></img>
                    <img  className="tarjetas" src={american} alt="facebook verde"></img>
                </div>
                <div>
                    <img className="mercado" src={mercadopago} alt="facebook verde"></img>
                </div>
            </div>
            <div className="centralos">
                <h3>Copyright <img className="copyright" src={copyright} ></img> 2021</h3>
            </div>
        </div>
    )
}

export default Footer
