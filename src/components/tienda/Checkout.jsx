import React, { useEffect, useContext} from 'react'

import Producto from './componenteTienda/galeria-tienda/producto/Producto';
import './../tienda/Checkout.css'
import {DataContext} from '../../components/context/DataProvider'
import {Button} from 'react-bootstrap'



const Checkout = () => {
    
    //data provider
    const value = useContext(DataContext);
   
    const [carrito, setCarrito] = value.carrito
    const [total, setTotal] = value.total
    const [numProducto, setNumProducto] = value.total
    const eliminarCarrito = value.eliminarCarrito

    


    
    //data provider
     useEffect( () =>{
		setCarrito ( JSON.parse(localStorage.getItem('productos')) )
        
	},[])
    
        
        
    
    
    return (
        
        <div className="container">
            <div className="row mt-4">
                <div className="row col-lg-8">
                    {carrito.map((item) => (
                            <div key={item.id}  className='col-lg-4 mt-4'>
                                <Producto imagen= {item.url} titulo={item.titulo} precio={item.precio} />
                            </div>
                            )
                            )
                            }
                </div>   
            
                <div className="col-lg-4 mt-4">
                    <div className="categorias">
                        <h5 className="categorias_titulo" >CHECK OUT</h5>
                        <Button onClick={ () => eliminarCarrito()}> ELIMINAR CARRITO </Button>
                        <hr className="categirias_linea"></hr>
                        
                        {
                        carrito.map( (item) => (
                            <div key={item.id} className="listaCheckOut">
                                <div>
                                <p>{item.titulo}</p>
                                </div>
                                <div >
                                <p className="precio">{item.precio}</p>
                                </div>
                            </div>    
                        )
                        )
                        }
                        <hr className="categirias_linea"></hr>

                        <div className="listaCheckOut">
                                <div>
                                <p>TOTAL</p>
                                </div>
                                <div >
                                <p>{ total }</p>
                                </div>
                            </div>    
                    </div>
                </div>         
            </div>
        </div>
    )
}

export default Checkout
