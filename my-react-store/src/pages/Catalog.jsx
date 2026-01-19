import Product from "../components/Product";
import "./Catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog(){
    const [products, setProducts]  = useState([]);// hold products

    const [categories, setCategories] = useState ([]); //hold categories
    // const products = [];
    const [productsToShow, setProductsToshow] = useState([]);// hold products to show

    function loadCatalog(){
        let cats = ["supplies","merchandise","clothing"];
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        setCategories(cats);
    }

    useEffect (()=> {
        // load your data here
        let serivce = new DataService();
        let data = serivce.getProducts();
        setProducts(data);
        loadCatalog();
    }, []); //we specify how many time this effect runs

    function filter(category){
            let list = [];
             // find products that math the category
             // create the for loop to travel the array fliter the products
            // we already have the products in the products varible

                for (let i = 0; i < products.length; i++) 
                {
                    let prod = products[i];
                    if (prod.category === category) {
                        list.push(prod);
                }
            }
            setProductsToshow(list);
        
    }

    function clearFilter() {
        setProductsToshow(products);
    }


    return(
        <div>
            <h1>Our shop</h1>

            {/* please render back all the products */}
            {/* You need to create a function that clear the filter  */}

            <button 
            className="btn btn-outline-dark me-2 text-capitalize" 
            onClick={clearFilter}>All</button>

            {categories.map(
                cat => <button key={cat} onClick={()=>filter(cat)} >{cat}</button>)}
            
            
            {
            /* for (i=0, i<categories.at.length;i++)
                let cat = categories[i];
                <button>{cat}</button>
            */}


            <div className="catalog">{productsToShow.map(prod => <Product key={prod._id} data={prod}/>)}
            </div>
        </div>
    );
}

export default Catalog;