import carro from '../../../../assets/login/carro-de-la-compra.png'
import React from 'react'



const CartWidget = () => {
    return (
        <div>
            <img className="carrito" src={carro} alt="hola"></img>
        </div>
    )
}

export default CartWidget
