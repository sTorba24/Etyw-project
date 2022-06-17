import React from "react";
import {ProductCard} from "./productCard";


export const ProductsList = ({ products, productPage}) => {
    if(!products.length) {
        <span>Unfortunelly, you have no selected products</span>
    }

    return (
        <>
            {products.map(el => <ProductCard product={el} productPage={productPage} key={el.id}></ProductCard>)}
        </>
    )
}