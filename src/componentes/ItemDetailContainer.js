import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/productos';
import ItemDetail from './ItemDetail';

function getProducto(id){
  return new Promise( (resolve, reject) =>{
    setTimeout (() =>{
      const productoFound = productos.find( (producto) =>{
        return parseInt(id) === producto.id
      })
      resolve(productoFound);
   }, 700);
  });
}

function ItemListContainer () {
  const [producto, setProducto] = useState([])
  const { itemid } = useParams ();
  useEffect( () =>{
    getProducto(itemid).then (respuestaPromise => {
      setProducto (respuestaPromise)
    })
  }, [itemid])

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemListContainer;