import { useContext, useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";

import GlobalContext from "../state/globalContext";

function Product(props){
    const [quantity, setQuantity] = useState(1);
    //  const user = useContext(GlobalContext).user
    const globalAdd = useContext(GlobalContext).addProductToCart;

    function handleQuantityChange(quantity){
        console.log("Quantity changed to: ", quantity);
        setQuantity(quantity);
    }

    function getTotal(){
        let Total = props.data.price * quantity;
        return Total.toFixed(2);
    }

    function onAdd(){
        console.log("Adding to cart", quantity, "units of ", props.data.title);
        //props.onAddToCart(props.data, quantity);
        console.log(props);
        //globalAdd(props.data, quantity);

        let fixedProduct = {...props.data};
        fixedProduct.quantity = quantity;

        globalAdd(fixedProduct);
    }
    
    return(
        <div>
            <div className="img-box">
                <img src={props.data.image} alt={props.data.title} />
            </div>

            {/* <img src="https://picsum.photos/200/300"></img> */}
            {/* "/images/" + props.data.image */}
            
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>Unit: ${props.data.price.toFixed(2)}</label>
                {/* <label>Total: ${getTotal()}</label> */}
            </div>
            
            <div className="product">
                <QuantityPicker onChange={handleQuantityChange} />
                <button className="btn btn-dark mt-2" onClick={onAdd}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Product; 