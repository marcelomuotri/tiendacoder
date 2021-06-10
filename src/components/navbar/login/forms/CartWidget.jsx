
import React,{useContext} from 'react'

import {DataContext} from '../../../context/DataProvider'





const CartWidget = () => {

    const value = useContext(DataContext);  

    const handleMostrarCheckout = value.handleMostrarCheckout

    return (
        <div>
            <button onClick={()=> handleMostrarCheckout ()}>MI CARRITO</button>
        </div>
    )
}

export default CartWidget
