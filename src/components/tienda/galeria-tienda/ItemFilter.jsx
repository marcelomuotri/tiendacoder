import React, {useState, useContext} from 'react'
import { DataContext } from '../../context/DataProvider'



const ItemFilter = () => {


    const value = useContext(DataContext);

    const data = value.data

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

    return (
        
        <div className="categorias">
            <h5 className="categorias_titulo" >CATEGORIAS</h5>
            <hr className="categirias_linea"></hr>
            <button className="categorias_botones mt-4" onClick={verPlantasTodas} > Todas las plantas</button>
            <button className="categorias_botones mt-4" onClick={verPlantasLindas} > Plantas interior</button>
            <button className="categorias_botones mt-4" onClick={verPlantasFeas} > Plantas exterior</button>
        </div>
    )
}

export default ItemFilter
