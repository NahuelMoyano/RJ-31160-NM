import React, { useEffect, useState } from 'react'
import productos from '../data/productos'
import ItemList from './ItemList';

function getProductos() {
  return new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve (productos);
      }, 500);
  });
}

function ItemListContainer ( props ) {
  const [productos, setProductos] = useState([])
  useEffect( () =>{
    getProductos().then (respuestaPromise => {
      setProductos (respuestaPromise)
    })
  }, [])
  return (
    <div>
      <h1>{props.titulo}</h1>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;