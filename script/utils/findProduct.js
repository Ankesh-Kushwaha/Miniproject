import { products } from "../../data/data.js";

export function findProduct(productid) {
    let matchingProduct='';
    products.forEach((product)=>{
        if(product.productId===productid){
           matchingProduct=product;
        }
    })
    return matchingProduct;
}








