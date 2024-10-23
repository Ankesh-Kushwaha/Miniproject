
 export let cart=JSON.parse(localStorage.getItem('cart')) || 
 [{
  productId:'#123-asdf-789-retey-bhye-00000',
  cartQuantity:1,
  cartOptionId:'1',
},
{ 
  productId:'cxv9v-3y6sp-v13zv-tcv4p',
  cartQuantity:1,
  cartOptionId:'2'
}];

function storeItem(){
   localStorage.setItem('cart',JSON.stringify(cart));
}

 export function addTocart(productId){
     let matchingItem;
      cart.forEach((cartItem)=>{
          if(productId==cartItem.productId){
             matchingItem=cartItem;
          }
      })

      if(matchingItem){
        matchingItem.cartQuantity+=1;
      }
      else{
        cart.push({
            productId:productId,
            cartQuantity:1,
            cartOptionId:'1',
        })
      }
      storeItem();
 }

 export function removeFromCart(productId){
     const newCart=[];
     cart.forEach((product)=>{
         if(product.productId !==productId){
             newCart.push(product);
         }
     })
    cart=newCart;
    storeItem();
 }
