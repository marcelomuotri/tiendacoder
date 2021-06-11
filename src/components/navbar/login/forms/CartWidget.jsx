
import React,{useContext} from 'react'

import {DataContext} from '../../../context/DataProvider'

import imagenCarrito from '../../../../assets/login/carroIcono.png'
import './cartWidget.css'





const CartWidget = () => {

    const value = useContext(DataContext);  

    const handleMostrarCheckout = value.handleMostrarCheckout

    return (
        <div className="divBoton">
            {/* <button onClick={()=> handleMostrarCheckout ()}> <img scr={imagenCarrito}></img>MI CARRITO</button> */}
            <a onClick={()=> handleMostrarCheckout ()} class="boton">
                <img class="icono" src={imagenCarrito} alt="auto"></img>
                <a class= "texto" > Mi Carrito </a>
            </a>
            <span class= "numerito">2</span>


                            
        </div>
        
        
    )
}

export default CartWidget
