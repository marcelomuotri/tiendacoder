import React, { useEffect, useContext} from 'react'

import Producto from './componenteTienda/galeria-tienda/producto/Producto';
import './../tienda/Checkout.css'
import {DataContext} from '../../components/context/DataProvider'
import {Button} from 'react-bootstrap'
import ProductoCheckOut from './componenteTienda/checkout/producto-checkout/Producto-checkOut';



const Checkout = () => {
    
    //data provider
    const value = useContext(DataContext);
   
    const [carrito, setCarrito] = value.carrito
    const [total, setTotal] = value.total
    const[numProducto, setNumProducto] = value.numProducto
    const[cantidad, setCantidad] = value.cantidad
    const eliminarCarrito = value.eliminarCarrito
    


    
    //data provider
     useEffect( () =>{
		setNumProducto ( JSON.parse(localStorage.getItem('productos')) )
        
	},[])

    const eliminarItem = (id) => {
        
        numProducto.forEach((item, index) => {
            if(item.detalle.id == id){
                numProducto.splice(index,1)
            }
        });
           setNumProducto([...numProducto])
    }
    
        
    return (
        
        <div className="container">
            <div className="row mt-4">
                <div className="row col-lg-8">
                    {numProducto.map((item) => (
                            <div key={item.detalle.id}  className='col-lg-4 mt-4'>
                                <ProductoCheckOut id={item.detalle.id} imagen= {item.detalle.url} titulo={item.detalle.titulo} precio={item.detalle.precio}
                                subtotal={item.subtotal} cantidad={item.cantidad} eliminarItem={ () =>eliminarItem (item.detalle.id)} />
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
                            numProducto.map( (item) => (
                            <div key={item.detalle.id} className="listaCheckOut">
                                <div>
                                <p>{item.detalle.titulo}</p>
                                </div>
                                <div >
                                <p className="precio"> $ {item.subtotal}</p>
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
                                <p>$ { total }</p>
                                </div>
                            </div>    
                    </div>
                </div>         
            </div>
        </div>
    )
}

export default Checkout
