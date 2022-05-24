import React, { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const CartContext = createContext()
const useCartContext = () => useContext (CartContext)

const { Provider } = CartContext;

export function CartContextProvider ( {children} ) {
    const [cart, setCart] = useState([])

    const addToCart = (item, cant) => {
        if (isInCart(item.id)){
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id){
                    const copyItem = {...cartItem};
                    copyItem.cant += cant;
                    return copyItem;
                }
                else
                    return cartItem;
            })
            setCart (newCart);
        }
        else{
            const newItem = {...item, cant};
            setCart ( [...cart,  newItem] )
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart]
        const cartFilter = newCart.filter ( item => {
            return item.id !== id
        })
        setCart (cartFilter)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some ( itemCart => itemCart.id === id)
    }
    function getTotalPrice () {
        let totalPrice = 0
        cart.forEach (item => { totalPrice += totalPrice + item.precio * item.cant})
        return totalPrice
    }

    function getTotalCant () {
        let totalCant = 0
        cart.forEach (item => { totalCant += item.cant})
        return totalCant
    }

    const contextFunction = () => console.log ("Contexto listo!")
    return(
        <Provider value= { {contextFunction, cart, addToCart, removeFromCart, clearCart,getTotalPrice,getTotalCant} } >
             {children}
        </Provider>
    )
}

export default useCartContext;