import React, {useState , useEffect} from 'react'

import data from '../../sample/articulos.json'

import GaleriaTienda from './componenteTienda/galeria-tienda/GaleriaTienda';
import Producto from './componenteTienda/galeria-tienda/producto/Producto';




const Checkout = () => {

    const[userData, setUserData] = useState(data);
    const[numProducto, setNumProducto] = useState(2)
    

    useEffect(() => {

            const obtenerNumeros = () => {
       
            var setNumProducto = (localStorage.getItem("producto numero"));
            
            }
            obtenerNumeros();
            

            
      } ,[]);

      const arrayData = await
            
      
    

    

    return (
        <div>
          
           <Producto imagen= {userData[numProducto].url} titulo={userData[numProducto].titulo} precio={userData[numProducto].precio}/>         
        </div>
    )
}

export default Checkout
