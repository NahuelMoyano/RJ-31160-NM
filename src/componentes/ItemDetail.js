import React, { useState } from "react";
import ItemCount from './ItemCount';
import useCartContext from '../store/CartContext'

const ItemDetail=({producto})=>{
  const [isInCart, setIsInCart] = useState(false)
  const { addToCart } = useCartContext();

  function onAdd (count) {
    setIsInCart(true);
    addToCart (producto, count)
    console.log ("Agregado al cart:", producto, count)
  }
 
  return(
    <div>
      <img
        width="300"
        src= {producto.img}
        alt= {producto.nombre}
        className="mt-5 inline-flex items-center"
      />
      <h3 className="h-7 tracking-widest text-indigo-500 font-bold title-font">
        {producto.nombre}
      </h3>
      <h3 className="h-7 tracking-widest text-red-900 font-bold">
        {producto.autor}
      </h3>
      <span className="title-font font-medium text-black">
        <h2>${producto.precio}</h2>
      </span>
      <p className="leading-relaxed text-black">{producto.categoria}</p>
      { isInCart? 
        <button>Ver en carrito</button>
      : 
        <ItemCount onAdd= {onAdd} stock={producto.stock} initial={1}/>
      }
    </div>
  );
}; 

export default ItemDetail;