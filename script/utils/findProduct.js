import { products } from "../../data/data.js";

export function findProduct(productid) {
    // Convert both to strings for comparison to avoid type mismatch issues
    let matchingProduct='';
    products.forEach((product)=>{
        if(product.productId===productid){
           matchingProduct=product;
        }
    })

    // Log the result to check if the product is found or not
    console.log("Matching Product:", matchingProduct);

    // Return the matching product or undefined if no match is found
    return matchingProduct;
}






