import {products} from '../data/data.js';
import {cart,addTocart} from  '../script/cart.js';

let productHtml='';
products.forEach((product)=>{ 
  productHtml+=
    ` <div class="item-container">
            <div class="product-image">
              <img src="${product.image}" alt="" class="product-image-css"> 
            </div>

            <div class="rating-section">
              <div class="product-rating">
                <img src="${product.rating.rating_image}" alt="" class="rating-css">
              </div>

              <div class="rated-people">
                ${product.rating.rating_people}*
              </div>
            </div>

            <div class="product-detail">
              <div class="product-name">
                 ${product.name}
              </div>
              <div class="product-price">
                &#8377 ${product.price}
              </div>
            </div>

            <div class="button-margin">
              <button class="rent-button js-rent-button" data-product-id=${product.productId}>
                Rent it !
              </button></div>   
        </div>
    `
})

document.querySelector('.js-product-container')
.innerHTML=productHtml;


function updateCartQuantity() {
  let quantity = 0;
  cart.forEach((cartItem) => {
      // Ensure cartQuantity is treated as a number
      quantity += parseInt(cartItem.cartQuantity, 10) || 0;
  });

  console.log(quantity);

  // Update the cart quantity in the DOM
  document.querySelector('.js-cart-quantity').innerHTML = quantity;
}

document.querySelectorAll('.js-rent-button')
.forEach((button)=>{
     button.addEventListener('click',()=>{
          const productId=button.dataset.productId;
          addTocart(productId);
          updateCartQuantity();
     })
})
