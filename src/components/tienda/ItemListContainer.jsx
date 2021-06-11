import React from 'react'
import ItemList from './galeria-tienda/ItemList'
import ItemFilter from './galeria-tienda/ItemFilter'

const ItemListContainer = () => {

    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <ItemFilter/>
                </div>
                <div className="col-lg-10">
                    <ItemList/>
                </div>
               
            </div>
        </div>
    )
}

export default ItemListContainer
