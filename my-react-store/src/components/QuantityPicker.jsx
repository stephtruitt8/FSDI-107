import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props){




    const [quantity, setQuantity] = useState(1);
    //      name     function         initial Value

    // let quantity = 1;
    // let quantity =


    //quantity = 2; //this wont work in react
    //we need to use setQuantity to udate the value

    function handleIncrease(){
        let temporalValue = quantity + 1;
        setQuantity(temporalValue);
        props.onChange (temporalValue);
    }

    function handleDecrease(){
        let temporalValue = quantity - 1;
        if(temporalValue === 0){
            return;
        }
        setQuantity(temporalValue);
        props.onChange (temporalValue);
    }

    // create the handleDecrease function
    // prevent the quantity from going below 1
    // disable the button


    //function handleIncrease(){
      //  let value = quantity + 1;
        //if (value < 1) 
        // setQuantity(value);
    
   // }



    return (
        <div className="quantity-picker">
            <button className="btn btn-dark" onClick={handleDecrease} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-dark" onClick={handleIncrease}>+</button>
        </div>
    ); 
}

export default QuantityPicker;