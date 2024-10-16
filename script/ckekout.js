import { cart ,removeFromCart } from "./cart.js";
import { products } from "../data/data.js";
import { findProduct } from "./utils/findProduct.js";

export function cartsummaryRender(){
  let cartItemHTML = ''; 
  cart.forEach((cartItem) => {
    const matchingProduct=findProduct(cartItem.productId);
    cartItemHTML += `
  <div class="delivery-section-grid js-deleivery-section-${matchingProduct.productId}">
        <div class="item-detail">
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
           <div><input type="radio">Monday 15 october</div>
           <div><input type="radio"> Tuesday 16 october</div>
           <div><input type="radio">WednesDay 17 october</div>
         </div>
       </div>
     </div>
        
    `
});

let totalCartItem=0;
cart.forEach(()=>{
   totalCartItem++;
})

document.querySelector('.js-checkout-quantity')
.innerHTML=`Checkout(${totalCartItem})`;


document.querySelector('.js-item-section')
.innerHTML=cartItemHTML;

}

cartsummaryRender();


document.querySelectorAll('.js-remove-item')
.forEach((remove) => {
    remove.addEventListener('click', () => {
        const productId = remove.dataset.productId;
        removeFromCart(productId);
        // Escape the productId for use in querySelector
        const sanitizedProductId = CSS.escape(productId);

        // Now use the escaped productId in the selector
        const container = document.querySelector(`.js-delivery-section-${sanitizedProductId}`);
         
        if(container){
           container.remove();
          
        }
        cartsummaryRender();  
    });
});




