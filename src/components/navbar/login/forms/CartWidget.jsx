
import React,{useContext} from 'react'

import {DataContext} from '../../../context/DataProvider'

import carroverde from '../../../../assets/tienda/carroverde.png'
import './cartWidget.css'





const CartWidget = () => {

    const value = useContext(DataContext);  

    const [cantidadTotal, setCantidadTotal] = value.cantidadTotal
    const handleMostrarCheckout = value.handleMostrarCheckout

    return (
        <div className="carroverde2">
            {/* <button onClick={()=> handleMostrarCheckout ()}> <img scr={imagenCarrito}></img>MI CARRITO</button> */}
            <a onClick={()=> handleMostrarCheckout ()} >
                <img className="icono" src={carroverde} alt="auto"></img>
            </a>
            <span className= "numerito">{cantidadTotal}</span>                            
        </div>
        
        
    )
}

export default CartWidget
