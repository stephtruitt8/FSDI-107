import { useState } from 'react'

import GlobalContext from './globalContext'


function GlobalProvider(props) {
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({name: "steph", id: 63})

    function addProductToCart(product) {
       // option #1
        // let copy = [...cart]
        // copy.push(product)
        // setCart(copy)


        // option #2
        setCart([...cart, product])
    }

    function clearCart() {
        setCart([])
    }

    function removeProductFromCart(productId) {
        console.log("Removing ", productId)

        const updatedCart = cart.filter(item => item._id !== productId)
        setCart(updatedCart)
    }

    return (
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart

        }}>
            {props.children}
        </GlobalContext.Provider>

    )
}

export default GlobalProvider