import axios from "axios";
import uuid from "react-uuid";

export const getTotalPrice = items =>{
    let totalPrice = 0;
    items.map(i=>{
        let basePrice = i.product.discountPrice > 0 ? i.product.discountPrice : i.product.price;
        let totalAddOns = 0;
        i.addOns && i.addOns.map(add=>{totalAddOns += add.price});
        totalPrice += (i.quantity * (basePrice + totalAddOns));
        
        if(i.exchange) {totalPrice = totalPrice - i.exchange.exchangePrice}
    })
    
    
    return totalPrice;
}

export const getCartTotal = items =>{
    let totalPrice = 0;
    items.map(i=>{
        let basePrice = i.price;
        let totalAddons = 0;
        i.addOns.map(add=>{
            totalAddons += add.price;
        })
        totalPrice += i.quantity * (basePrice + totalAddons);
        
        if(i.exchange !== undefined && Object.keys(i.exchange).length > 0 ){
            totalPrice = totalPrice - i.exchange.exchangePrice;
        }
    })

    return totalPrice;
}

export const buyNow = async (
  productId,
  addOns,
  count,
  exchangeProduct,
) => {

  const product = await axios.get(`/product/color/${productId}`);
  let data = { product: product.data, count, addOns, exchangeProduct };
  let items = [{
    quantity : data.count,
    _id : uuid(),
    product : data.product._id,
    slug : data.product.slug,
    name : data.product.slug,
    price : data.product.price,
    productImage : `/api/serveImage/product/${data.product.product}/0/thumb`,
    addOns : data.addOns,
    exchange : data.exchangeProduct !== undefined && Object.keys(data.exchangeProduct).length > 0  ? data.exchangeProduct : undefined
  }]
  let totalPrice = getCartTotal(items);

  return { items,totalPrice };




};