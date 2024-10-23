import { cart } from "../../data/cart.js";

export function totalCartItem(){
  let totalCartItem=0;
   cart.forEach(()=>{
        totalCartItem++;
    })
    return totalCartItem;
}