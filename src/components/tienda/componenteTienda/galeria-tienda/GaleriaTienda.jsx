import React, {useState, useContext} from 'react'
import {DataContext} from '../../../context/DataProvider'

import Producto from './producto/Producto'
import './galeriaTienda.css'


import ModalProducto from './modal/ModalProducto'
import ModalCheckout from './modal-checkout/ModalCheckout'


const GaleriaTienda = () => {
    //context
    const value = useContext(DataContext);
    const handleOpen = value.handleOpen
    
    const data = value.data


    //context

    const[userData, setUserData] = useState(data);
    

     const verPlantasLindas = () => {
     var filtrarLindas = data
     .filter(function(lindas) {
        return lindas.tipo === "linda"
     })   
        
     setUserData(filtrarLindas)
    }
    

    const verPlantasFeas = () => {
        var filtrarFeas = data
        .filter(function(feas) {
           return feas.tipo === "fea"
        })   
           setUserData(filtrarFeas)
          
       }
    
    const verPlantasTodas = () => {
        setUserData(data)
    } 
////////////////comprar

    
 
    

    
    return (

        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-2 mt-4">
                    <div className="categorias">
                        <h5 className="categorias_titulo" >CATEGORIAS</h5>
                        <hr className="categirias_linea"></hr>
                        <button className="categorias_botones mt-4" onClick={verPlantasTodas} > Todas las plantas</button>
                        <button className="categorias_botones mt-4" onClick={verPlantasLindas} > Plantas interior</button>
                        <button className="categorias_botones mt-4" onClick={verPlantasFeas} > Plantas exterior</button>
                        
                    </div>

                
                </div>
                <div className="row col-lg-10">
                    {userData.map((item) => (
                    <div key={item.id}  className='col-lg-3 mt-4'>
                        <Producto imagen= {item.url} titulo={item.titulo} precio={item.precio} 
                        tocame={ () => handleOpen(item.id, item.url, item.titulo, item.precio)} />{/* //()=> compro (item.id, item.url, item.titulo, item.precio)//  */}
                    </div>
                    )
                    )
                    }
                            
                </div>
                <div> 
                    <ModalProducto />
                </div>
                <div> 
                    <ModalCheckout />
                </div>
                
            </div>
        </div>
    )
}

export default GaleriaTienda
