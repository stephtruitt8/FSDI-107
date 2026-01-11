import { useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props){
    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(quantity){
        console.log("Quantity changed to: ", quantity);
        setQuantity(quantity);
    }

    function getTotal(){
        let Total = props.data.price * quantity;
        return Total.toFixed(2);
    }
    
    return(
        <div className="product">
            <img src={props.data.image} alt={props.data.title} />
            {/* <img src="https://picsum.photos/200/300"></img> */}
            {/* "/images/" + props.data.image */}
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>Unit: ${props.data.price.toFixed(2)}</label>
                {/* <label>Total: ${getTotal()}</label> */}
            </div>
            <QuantityPicker onChange={handleQuantityChange} />
        </div>
    );
}

export default Product; 