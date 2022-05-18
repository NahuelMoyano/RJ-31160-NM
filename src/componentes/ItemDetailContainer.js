import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getItem as getProducto} from '../data/index'

function ItemDetailContainer () {
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

export default ItemDetailContainer;