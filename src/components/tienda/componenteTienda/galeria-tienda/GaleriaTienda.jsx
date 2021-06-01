import React, {useState} from 'react'
import Producto from './producto/Producto'
import './galeriaTienda.css'
import data from '../../../../sample/articulos.json'






const GaleriaTienda = (props) => {

    const[userData, setUserData] = useState(data);
    const[numProducto, setNumProducto] = useState([])
    
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

    const compro = (id, url, titulo, precio) => {

        setNumProducto([
            ...numProducto,
            {id: id, url:url, titulo:titulo, precio:precio
        }])
        return( 
        numProducto
        )
    }
   

    
    localStorage.setItem("producto numero" ,JSON.stringify(numProducto))
    

    
    return (

        


        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-2 mt-4">
                    <div class="categorias">
                        <h5 class="categorias_titulo" >CATEGORIAS</h5>
                        <hr class="categirias_linea"></hr>
                        <button class="categorias_botones mt-4" onClick={verPlantasTodas} > Todas las plantas</button>
                        <button class="categorias_botones mt-4" onClick={verPlantasLindas} > Plantas interior</button>
                        <button class="categorias_botones mt-4" onClick={verPlantasFeas} > Plantas exterior</button>
                        
                    </div>

                
                </div>
                <div className="row col-lg-10">
                    {userData.map((item) => (
                    <div key={item.id}  className='col-lg-3 mt-4'>
                        <Producto imagen= {item.url} titulo={item.titulo} precio={item.precio} tocame={()=> compro (item.id, item.url, item.titulo, item.precio)}   />
                    </div>
                    )
                    )
                    }
                </div>
                <div> 
                
                </div>
                
            </div>
        </div>
    )
}

export default GaleriaTienda
