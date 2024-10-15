import { cart } from "./cart.js";
import { products } from "../data/data.js";
import { findProduct } from "./utils/findProduct.js";

let cartItemHTML = ''; // Initialize cartItemHTML as an empty string
cart.forEach((cartItem) => {
    console.log(cartItem.productId);
    console.log(typeof(cartItem.productId));
    const matchingProduct=findProduct(cartItem.productId);
    cartItemHTML += `
  <div class="delivery-section-grid">
        <div class="item-detail">
           <div><img src= "${matchingProduct.image}" alt="" class="item-image-detail"></div>
           <div class="item-name">${matchingProduct.name}</div>
   
           <div class="item-price-and-quantity">
             <div class="item-quantity">Quantity:${cartItem.cartQuantity}</div>
            <div class="item-price">Price: &#8377 ${matchingProduct.price}</div>
           </div>
           <div><button class="remove-item">Remove</button></div>
       </div>
   
       <div class="delivery-date-detail">
         <div class="delivery-date">
           <div>Delivery Date :</div>
           <div><input type="radio">Monday 15 october</div>
           <div><input type="radio"> Tuesday 16 october</div>
           <div><input type="radio">WednesDay 17 october</div>
         </div>
       </div>
     </div>
        
    `
});

document.querySelector('.js-item-section')
.innerHTML=cartItemHTML;

