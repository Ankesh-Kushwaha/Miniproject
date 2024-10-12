import {products} from '../data/data.js';

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
                ${product.rating.rating_people}
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
              <button class="rent-button">
                Rent
              </button></div>   
        </div>
    `
})

document.querySelector('.js-product-container')
.innerHTML=productHtml;

