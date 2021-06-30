import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import './itemFilter.css'



const ItemFilter = () => {

    const value = useContext(DataContext);
    const [userData, setUserData] = value.userData;

    const data = value.data


    const verPlantasExterior = () => {
        var filtrarExterior = data
            .filter(function (exterior) {
                return exterior.tipo === "exterior"
            })

        setUserData(filtrarExterior)
    }


    const verPlantasInterior = () => {

        var filtrarInterior = data
            .filter(function (interior) {
                return interior.tipo === "interior"
            })
        setUserData(filtrarInterior)
    }

    const verPlantasTodas = () => {
        setUserData(data)
    }

   

    const verPlantasMil = () => {
        
        var filtrarMil = data
            .filter(function (mil) {
                return mil.precio >= 1000 & mil.precio <= 2000
            })
        setUserData(filtrarMil) 
    }

    
    const verPlantasDosMil = () => {
        
        var filtrarMil = data
            .filter(function (mil) {
                return mil.precio >= 2000 & mil.precio <= 3000
            })
        setUserData(filtrarMil) 
     
    }

    const verPlantasTresMil = () => {
        
        var filtrarMil = data
            .filter(function (mil) {
                return mil.precio >= 3000 & mil.precio <= 4000
            })
        setUserData(filtrarMil) 
        
    }

  

    return (

        <div className="categorias filterBox">
            <h5 className="categorias_titulo" >Refinar por</h5>
            <hr className="categirias_linea"></hr>
            <p className="categorias_tipo mt-4" >Tipo:</p>
            <ul>
                <button className="categorias_botones mt-2 " onClick={verPlantasTodas} > Todas las plantas</button>
                <button className="categorias_botones mt-2 " onClick={verPlantasExterior} > De interior</button>
                <button className="categorias_botones mt-2 " onClick={verPlantasInterior} > De exterior</button>
                {/* <button className="categorias_botones mt-2" onClick={verPlantasFeas} > Cactus</button>
                <button className="categorias_botones mt-2" onClick={verPlantasFeas} > Suculentas</button> */}
            </ul>
            <p className="categorias_tipo mt-4" >Precio:</p>
            <ul>
               
                <li className="filtro_precios mt-2">
                    <span >Todos los precios</span> <input onClick={verPlantasTodas} name="precios" type="radio" className="cbox0" value="second_checkbox"  />
                </li>
                <li className="filtro_precios mt-2">
                    <span >1000-2000</span> <input onClick={verPlantasMil} name="precios" type="radio" className="cbox1" value="checked"  />
                </li>
                <li className="filtro_precios mt-2">
                    <span >2000-3000</span> <input onClick={verPlantasDosMil}  name="precios" type="radio" className="cbox2" value="second_checkbox" />
                </li>
                <li className="filtro_precios mt-2">
                    <span >3000-4000</span> <input onClick={verPlantasTresMil} name="precios" type="radio" className="cbox3" value="second_checkbox" />
                </li>
            </ul>

        </div>
    )
}

export default ItemFilter
