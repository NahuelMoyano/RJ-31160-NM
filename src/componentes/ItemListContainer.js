import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'
import { getAllItems as getProductos, getItemsByCategory } from '../data'

function ItemListContainer ( props ) {
  const [productos, setProductos] = useState([])
  const { categoryid } = useParams();

  useEffect(()=>{
    if (categoryid === undefined) {
      getProductos().then((respuestaPromise) => {
        setProductos(respuestaPromise);
      });
    } else {
      getItemsByCategory(categoryid).then((respuestaPromise) => {
        setProductos(respuestaPromise);
      });
    }
  }, [categoryid]);

 
  
  return (
    <div>
      <h1>{props.titulo}</h1>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;