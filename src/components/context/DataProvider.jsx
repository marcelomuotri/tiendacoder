import React, {createContext, useState, useEffect} from 'react'
import data from '../../sample/articulos.json'


export const DataContext = createContext();

export const DataProvider = (props) => {
    
    const[numProducto, setNumProducto] = useState([]);//array con los productos que van al storage
    const[carrito, setCarrito] = useState([])//carrito
    const[total, setTotal] = useState(0)//precio total
    const[show, setShow] = useState(false);//modal tarjeta
    const[detalle, setDetalle] = useState({})//guarda detalles del item cuando lo subis al modal
    const[numeroItem, setNumeroItem] = useState(0)//id para la foto
    const[contador, setContador] = useState(0)//contador que va cambiando
    const[subtotal, setSubtotal] = useState(0)//resultado de la multiplicacion
    const[cantidad, setCantidad] = useState(0)//cantidad de productos que compre 


    
    //abrir modal
    const handleOpen = (id, url, titulo, precio) =>{

        setNumeroItem(id)
        setDetalle( {  id:id, url:url, titulo:titulo, precio:precio }  )
        setShow(true);
        
    } 
    
    //
    const compro =  () => {     
        
        console.log(subtotal)

        setShow(false)
        setNumProducto([
            ...numProducto,
            {detalle,subtotal,cantidad:contador}
        ])
        setContador(0)
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
               
            } else{
               for (var i=0 ; i<numProducto.length ; i++){  
                 /* console.log("entre al for") */
             
                suma= suma + parseInt((numProducto[i].subtotal))
                /* console.log(suma) */
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

    const handleDisminuir = () => {
        if(contador > 0){
        setContador(contador - 1)
        }
    }
    
    const handleAumentar = () => {
        setContador(contador + 1)
        
    }

    
    const handleAumentarCantidad = (id) => {
        
    }

    const handleDisminuirCantidad = () => {
        
    }
    


    //cada vez que se renderiza el componente, primero guarda los datos viejos del storage, y los vuelvo a colocar en la variable 
    //numProducto.
    
  


    const value= {
        numProducto: [numProducto, setNumProducto],
        carrito: [carrito, setCarrito],
        total: [total, setTotal],
        show: [show, setShow],
        detalle: [detalle, setDetalle],
        numeroItem: [numeroItem, setNumeroItem],
        contador: [contador, setContador],
        subtotal : [subtotal, setSubtotal],
        cantidad: [cantidad, setCantidad],
        compro: compro,
        eliminarCarrito: eliminarCarrito,
        handleOpen:  handleOpen,
        data : data,
        handleAumentar: handleAumentar,
        handleDisminuir: handleDisminuir,
        handleAumentarCantidad : handleAumentarCantidad,
        handleDisminuirCantidad: handleDisminuirCantidad

        

    }
    return (
        <DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
    )
}

export default DataProvider
