import React from 'react'
import useCartContext from '../store/CartContext'
import { Link } from 'react-router-dom'
import { createBuyOrder } from '../data' 


function CartView() {
    const { cart, removeFromCart, clearCart, getTotalPrice } = useCartContext()
    function handleBuy () {
        const itemsToBuy = cart.map ((item) => ({
            tittle: item.nombre,
            cant: item.cant,
            price: item.precio,
            id: item.id
        }))
        const buyOrder = {
            buyer: {
                name: "Nahuel",
                phone: "987654321",
                email: "nahuel@gmail.com",
            },
            items: itemsToBuy,
            total: getTotalPrice(),
        }

        createBuyOrder(buyOrder)
        clearCart()
    }
    if (cart.length === 0) {
        return (
            <div>
              <h4>No hay productos en el carrito</h4>
              <Link to="/" className="btn btn-outline btn-secondary m-3">Volver al catalogo</Link>
            </div>
          ) 
    }
    else {
        return <div>
            {cart.map ( itemCart => {
            return <div key= {itemCart.id}>
                <h2 className="h-7 tracking-widest text-yellow-400 font-bold title-font"> Titulo: {itemCart.nombre} </h2>
                <h2 className="h-7 tracking-widest text-yellow-400 font-bold title-font"> Artista: {itemCart.autor} </h2>
                <h2 className="title-font font-medium text-black"> Cantidad: {itemCart.cant} </h2>
                <h2 className="title-font font-medium text-black"> Precio final: {itemCart.cant * itemCart.precio} </h2>
                <button className="btn btn-sm btn-outline btn-error m-3" onClick={ () =>removeFromCart(itemCart.id)}> X </button> <br/><hr/>
            </div>
        })}
        <Link to="/" className="btn btn-outline btn-secondary m-3">Volver al catalogo</Link>
        <button className="btn btn-outline btn-error m-3" onClick={clearCart}>Vaciar carrito</button>
        <button className="btn btn-outline btn-info m-3" onClick={handleBuy}>COMPRAR</button>
        </div>
    }
}

export default CartView