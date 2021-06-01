import React, {useState , useEffect} from 'react'

import data from '../../sample/articulos.json'

import Producto from './componenteTienda/galeria-tienda/producto/Producto';
import './../tienda/Checkout.css'





const Checkout = () => {

    const[numProducto, setNumProducto] = useState([])
    
    

    useEffect(() => {

              const hello = async () => {
                try{ 
                const numero = await  (localStorage.getItem("producto numero"));
                setNumProducto(JSON.parse(numero))
                
                
            }
         catch(error) {
            console.log(error)
        }
        }
    
        
            

        hello()
            
            
         } ,[]);

        
         /* 
        const sumate = async () => {
                
        var total = await parseInt(numProducto[0].precio)+parseInt(numProducto[1].precio)+parseInt(numProducto[2].precio)
        console.log(total)
        return total 

      } */

    
     
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="row col-lg-8">
                    {numProducto.map((item) => (
                            <div key={item.id}  className='col-lg-4 mt-4'>
                                <Producto imagen= {item.url} titulo={item.titulo} precio={item.precio} />
                            </div>
                            )
                            )
                            }
                </div>   
            
                <div className="col-lg-4 mt-4">
                    <div class="categorias">
                        <h5 class="categorias_titulo" >CHECK OUT</h5>
                        <hr class="categirias_linea"></hr>
                        
                        {
                        numProducto.map( (item) => (
                            <div className="listaCheckOut">
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
                        <hr class="categirias_linea"></hr>

                        <div className="listaCheckOut">
                                <div>
                                <p>TOTAL</p>
                                </div>
                                <div >
                                <p>{   }</p>
                                </div>
                            </div>    
                        

                    </div>

                
                </div>         
            </div>
        </div>
    )
}

export default Checkout
