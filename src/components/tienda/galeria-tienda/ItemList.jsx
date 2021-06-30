import React, {useContext} from 'react'
import {DataContext} from '../../context/DataProvider'

import Producto from './producto/Producto'
import './itemList.css'

import ModalProducto from './modal/ModalProducto'
import ModalCheckout from './modal-checkout/ModalCheckout'
import ModalRepetido from './modal/ModalRepetido'
import CartWidget from '../../navbar/login/forms/CartWidget'



const GaleriaTienda = (props) => {
    //context
    const value = useContext(DataContext);
    
    const handleOpen = value.handleOpen

    const[userData, setUserData] = value.userData;
 
    return (

        <div className="container">
                
                <CartWidget className="carroverde"/>
           
            <div className="row grupotarjetas">
                    {userData.map((item) => (
                    <div key={item.id}  className='col-lg-4 mt-4'>
                        <Producto imagen= {item.url} titulo={item.titulo} precio={item.precio} 
                        tocame={ () => handleOpen(item.id, item.url, item.titulo, item.precio)} />{/* //()=> compro (item.id, item.url, item.titulo, item.precio)//  */}
                    </div>
                    )
                    )
                    } 
                      {/* se mapean productos desde userData, cuando filtro cambio userData */}       
                <div> 
                    <ModalProducto />
                </div>
                <div> 
                    <ModalCheckout firebaseUser= {props.firebaseUser} />
                </div>
                <div>
                    <ModalRepetido />
                </div>
            </div>
        </div>
    )
}

export default GaleriaTienda
