import React, {createContext, useState, useEffect} from 'react'
import data from '../../sample/articulos.json'


export const DataContext = createContext();

export const DataProvider = (props) => {
    
    const[numProducto, setNumProducto] = useState([]);
    const[carrito, setCarrito] = useState([])
    const[total, setTotal] = useState(0)
    const[show, setShow] = useState(false);
    
    //abrir modal
    const handleOpen = () => setShow(true);
    
    
    
    const compro =  (id, url, titulo, precio) => {  
        setShow(true);
       
        setNumProducto([
            ...numProducto,
            {id: id, url:url, titulo:titulo, precio:precio
        }])
        return(
            numProducto
        )
    }

    useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('productos'))
		if(dataCarrito){
			setNumProducto(dataCarrito)
		}
	},[])

    useEffect(  ()  => {

        localStorage.setItem("productos" , JSON.stringify(numProducto))
        

    }, [numProducto])


    useEffect(  () => {
        
        const sumate =  () => {
            console.log(numProducto)
            var suma = 0;
              if(numProducto.length === 0) {
                console.log("no voy a correr")//si el numProducto esta vacio, no corre
            } else{
               for (var i=0 ; i<numProducto.length ; i++){  
                 console.log("entre al for")
             
                suma= suma + parseInt((numProducto[i].precio))
                console.log(suma)
                }    
            setTotal(suma)
            }  
        }
        sumate()
        
       
        
    }, [numProducto])

//esta funcion es para eliminar el carrito de una
    const eliminarCarrito = () => {
       
        localStorage.setItem("productos" , JSON.stringify([]))
        
       setCarrito([])
       setNumProducto([])    
       setTotal([])
    }  

    


    //cada vez que se renderiza el componente, primero guarda los datos viejos del storage, y los vuelvo a colocar en la variable 
    //numProducto.
    
  


    const value= {
        numProducto: [numProducto, setNumProducto],
        carrito: [carrito, setCarrito],
        total: [total, setTotal],
        show: [show, setShow],
        compro: compro,
        eliminarCarrito: eliminarCarrito,
        handleOpen:  handleOpen,
        data : data
        

    }
    return (
        <DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
    )
}

export default DataProvider
