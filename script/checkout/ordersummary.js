import {cart,removeFromCart} from "../../data/cart.js"
import { products } from "../../data/data.js";
import { findProduct } from "../utils/findProduct.js"
import dayjs   from   'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { totalCartItem as cartQuantity, totalCartItem } from "../utils/totalCartItem.js";
import { renderPayementSection } from "./payementsummary.js";


const time = dayjs().format('dddd, MMMM D'); // Example of a valid format
console.log(time);

export function cartsummaryRender(){
  let cartItemHTML = ''; 
  cart.forEach((cartItem) => {
    const matchingProduct=findProduct(cartItem.productId);
    cartItemHTML += `
  <div class="delivery-section-grid js-deleivery-section-${matchingProduct.productId}">
        <div class="item-detail">
           <div class="js-delivery-date"><b>Arrive On:</b> Wednesday ,october 2023</div>
           <div><img src= "${matchingProduct.image}" alt="" class="item-image-detail"></div>
           <div class="item-name">${matchingProduct.name}</div>
   
           <div class="item-price-and-quantity">
             <div class="item-quantity">Quantity:${cartItem.cartQuantity}</div>
            <div class="item-price">Price: &#8377 ${matchingProduct.price}</div>
       </div>
             
        <div><button class="remove-item js-remove-item" data-product-id=${matchingProduct.productId}>Remove</button></div>
           </div>
       <div class="delivery-date-detail">
         <div class="delivery-date">
           <div>Delivery Date :</div>
           <div><input type="radio">${time}</div>
           <div><input type="radio"> ${time}</div>
           <div><input type="radio">${time}</div>
            <div>
            <label for="cars">Choose Duration:</label>
            <select id="duration" name="time">
                <option value="volvo">1 month</option>
              <option value="saab"> 2 month</option>
               <option value="fiat"> 6 month</option>
               <option value="audi">1 year</option>
            </select></div>
         </div>
       </div>

       
       
     </div>
        
    `
});

let totalCartItem=cartQuantity();
document.querySelector('.js-checkout-quantity')
.innerHTML=`Checkout(${totalCartItem})`;


document.querySelector('.js-item-section')
.innerHTML=cartItemHTML;



document.querySelectorAll('.js-remove-item')
.forEach((remove) => {
    remove.addEventListener('click', () => {
        const productId = remove.dataset.productId;
        removeFromCart(productId);
        cartsummaryRender();  
        renderPayementSection();
        // Escape the productId for use in querySelector
        const sanitizedProductId = CSS.escape(productId);

        // Now use the escaped productId in the selector
        const container = document.querySelector(`.js-delivery-section-${sanitizedProductId}`);
         
        if(container){
           container.remove();
        }  
    });
});
}






