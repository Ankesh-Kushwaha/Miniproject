import {cart} from "../../data/cart.js";
import {products} from  '../../data/data.js';
import { findProduct } from "../utils/findProduct.js";
import { totalCartItem } from "../utils/totalCartItem.js";
import { fixedPrice } from "../utils/formatecurrency.js";

export function renderPayementSection(){
  let itemsPrice=0;
  cart.forEach((cartItem)=>{
    let cartItemId=cartItem.productId;
    let cartQuantity=cartItem.cartQuantity;
    let matchingItem=findProduct(cartItemId);
    itemsPrice+= cartQuantity * matchingItem.price;
  })
  
  const shippingAndHandling= 0.01*itemsPrice;
  const totalBeforeTax = itemsPrice + shippingAndHandling;
  const GST= 0.18 * totalBeforeTax;
  const finalPrice= totalBeforeTax + GST;
  
  let cartTotalQuantity=totalCartItem();

  
  let paymentHtml=`
        <div class="order-summary">ORDER SUMMARY :</div>
      <div class="checkout-items">Checkout Items (${cartTotalQuantity}) :</div>
      <div class="order-summary-payement">
        <div class="items-grid"><span class="price">Items Price:</span> &#8377 ${fixedPrice(itemsPrice)}</div>
        <div  class="items-grid"><span class="price">shipping & handling :</span> &#8377 ${fixedPrice(shippingAndHandling)}</div>
        <div  class="items-grid"><span class="price">Total Before Tax:</span><span class="total-before-tax"> &#8377 ${fixedPrice(totalBeforeTax)}</span></div>
        <div class="items-grid"><span class="price"> GST(18%) :</span> &#8377 ${fixedPrice(GST)}</div>
        <div class="items-grid price-border"><span class="price">Final Price:</span> &#8377 ${fixedPrice(finalPrice)}</div>

      <a href="order.html">
        <button class="place-your-order">Place your order</button>
      </a>
   `
   document.querySelector('.js-payement-section')
   .innerHTML=paymentHtml;
}

