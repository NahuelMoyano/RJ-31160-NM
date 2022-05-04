import React, { useEffect, useState } from 'react'
import productos from '../data/productos'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'

function getProductos(categoryid) {
  return new Promise ( (resolve, reject) => {
    setTimeout(() => {
      if (categoryid){
        const arrayFiltered = productos.filter ( (producto) => {
          return producto.categoria === categoryid
        })
        resolve (arrayFiltered)
      } else {
        resolve (productos);
      }
      }, 700);
  });
}

function ItemListContainer ( props ) {
  const [productos, setProductos] = useState([])
  const categoryid = useParams().categoryid;

  useEffect( () =>{
    getProductos(categoryid).then (respuestaPromise => {
      setProductos (respuestaPromise)
    })
  }, [categoryid])
  return (
    <div>
      <h1>{props.titulo}</h1>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;