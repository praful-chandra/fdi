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