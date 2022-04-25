import React, {useState} from 'react'

function ItemCount(props) {
  const [count, setCount] = useState(props.initial)

  function handleAdd(){
    if(count < props.stock) {
      setCount(count + 1)
    }
  }
  function handleSubstract(){
    if(count > props.initial){
      setCount(count - 1)
    }
  }

  return (
    <div>
      <p>Que cantidad deseas?</p>
      <div>
        <button onClick = {handleSubstract}>-</button>
        <span> {count} </span>
        <button onClick = {handleAdd}>+</button>
      </div>
      <div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount