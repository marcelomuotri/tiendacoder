import React, { useState, useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import './itemFilter.css'



const ItemFilter = () => {

    const value = useContext(DataContext);
    const [userData, setUserData] = value.userData;

    const data = value.data

    const verPlantasLindas = () => {
        var filtrarLindas = data
            .filter(function (lindas) {
                return lindas.tipo === "linda"
            })

        setUserData(filtrarLindas)
    }


    const verPlantasFeas = () => {
        var filtrarFeas = data
            .filter(function (feas) {
                return feas.tipo === "fea"
            })
        setUserData(filtrarFeas)

    }

    const verPlantasTodas = () => {
        setUserData(data)
    }

    return (

        <div className="categorias filterBox">
            <h5 className="categorias_titulo" >Refinar por</h5>
            <hr className="categirias_linea"></hr>
            <p className="categorias_tipo mt-4" >Tipo:</p>
            <ul>
                <button className="categorias_botones mt-2 " onClick={verPlantasTodas} > Todas las plantas</button>
                <button className="categorias_botones mt-2 " onClick={verPlantasLindas} > De interior</button>
                <button className="categorias_botones mt-2 " onClick={verPlantasFeas} > De exterior</button>
                <button className="categorias_botones mt-2" onClick={verPlantasFeas} > Cactus</button>
                <button className="categorias_botones mt-2" onClick={verPlantasFeas} > Suculentas</button>
            </ul>
            <p className="categorias_tipo mt-4" >Precio:</p>
            <ul>
                <li className="filtro_precios mt-2">
                    <span >0-500</span> <input type="checkbox" className="cbox1" value="second_checkbox" />
                </li>
                <li className="filtro_precios mt-2">
                    <span >500-1000</span> <input type="checkbox" className="cbox2" value="second_checkbox" />
                </li>
                <li className="filtro_precios mt-2">
                    <span  >1000-1500</span> <input type="checkbox" className="cbox3" value="second_checkbox" />
                </li>
            </ul>

        </div>
    )
}

export default ItemFilter
