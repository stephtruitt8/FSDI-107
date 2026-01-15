import { createContext } from 'react'

const GlobalContext = createContext({
    cart: [], // default car is an empty array, will hold project objects later
    user: {}, // default user is an empty ocj, can store use info like name, email etc.

    addProductTocart: () => {}, // placeholder function to add a product to the cart
    clearCart: () => {}, // placeholder function to remove all items from the cart
    removeProductFromCart: () => {} // placegolder function to remove a specific item from the cart
})

// Export the context so it can be used in another components
export default GlobalContext

