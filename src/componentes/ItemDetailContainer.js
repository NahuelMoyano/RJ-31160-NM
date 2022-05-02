import React, { useEffect, useState } from 'react'
import productos from '../data/productos'
import ItemDetail from './ItemDetail';

function getProducto() {
  return new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve (productos);
      }, 1000);
  });
}

function ItemDetailContainer () {
  const [producto, setProducto] = useState([])
  useEffect( () =>{
    getProducto().then (respuestaPromise => {
      setProducto (respuestaPromise[0])
    })
  }, [])
  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer;
