import React from 'react'
import ItemList from './galeria-tienda/ItemList'
import ItemFilter from './galeria-tienda/ItemFilter'


const ItemListContainer = (props) => {

    document.body.style = 'background: #F3F4EE' /* cambio el color de fondo */

    
    return (
        <div >
            
            <div className="">

                <div className="row">
                    <div className="col-lg-3 col-sm-0 ">
                        <ItemFilter/>
                    </div>
                    <div className="col-lg-9 col-sm-12">
                        <ItemList firebaseUser= {props.firebaseUser}/>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer
