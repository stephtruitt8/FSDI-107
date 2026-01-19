import { useContext } from 'react'
import GlobalContext from '../state/GlobalContext'

import './cart.css'

function Cart() {
    const cart = useContext(GlobalContext).cart
    const removeProduct = useContext(GlobalContext).removeProductFromCart

function getTotalItems() {
    let sum = 0

    for (let i = 0; i < cart.length; i++) {
        sum = sum + cart[i].quantity
    }

    return sum
  }

  function getTotalPrice() {
    let total = 0

    for(let i = 0; i < cart.length; i++){
        total += cart[i].price * cart[i].quantity
    }

    return total.toFixed(2)
  }


  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <p>Your cart is currently empty.</p>

        {cart.map(product =>
            <div className='d-flex justify-content-between align-items-center gap-4 border rounded-2 mb-4 justify-content pe-4 overflow-hidden'>
                <img width={"200"} height={"200"} src={product.image} alt="" />
                <h6> {product.title}</h6> 
                <span>Quantity: #{product.quantity}</span>
                <span>Price: ${product.price}</span>
                <span>${product.price * product.quantity}</span>
                <button className="btn btn-danger btn-sm" onClick={() => removeProduct(product._id)}>Remove</button>
            </div>

        )}


        <h3>Total Items in Cart: {getTotalItems()}</h3>
        <h4>Total <strong>${getTotalPrice()}</strong></h4>



       {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}

    </div>
  )
}

export default Cart