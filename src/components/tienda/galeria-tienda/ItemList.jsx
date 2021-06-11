import React, {useState, useContext} from 'react'
import {DataContext} from '../../context/DataProvider'

import Producto from './producto/Producto'
import './galeriaTienda.css'

import ModalProducto from './modal/ModalProducto'
import ModalCheckout from './modal-checkout/ModalCheckout'
import ModalRepetido from './modal/ModalRepetido'


const GaleriaTienda = () => {
    //context
    const value = useContext(DataContext);
    
    const handleOpen = value.handleOpen

    
    const data = value.data


    //context

    const[userData, setUserData] = useState(data);
    
 
    return (

        <div className="container">
            <div className="row mt-4">
                    {userData.map((item) => (
                    <div key={item.id}  className='col-lg-3 mt-4'>
                        <Producto imagen= {item.url} titulo={item.titulo} precio={item.precio} 
                        tocame={ () => handleOpen(item.id, item.url, item.titulo, item.precio)} />{/* //()=> compro (item.id, item.url, item.titulo, item.precio)//  */}
                    </div>
                    )
                    )
                    }
                            
                <div> 
                    <ModalProducto />
                </div>
                <div> 
                    <ModalCheckout />
                </div>
                <div>
                    <ModalRepetido />
                </div>
            </div>
        </div>
    )
}

export default GaleriaTienda
