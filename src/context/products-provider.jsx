import { useState } from "react";
import { productsContext } from "./products-context";



function ProductsProvider({children}){
    const [productsList, setProductsList] = useState([])

    return(
        <productsContext.Provider 
        value={[ productsList, setProductsList ]}
        >

        </productsContext.Provider>
    )
    
}

export default ProductsProvider;