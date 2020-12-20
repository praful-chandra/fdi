export const getTotalPrice = items =>{
    let totalPrice = 0;
    items.map(i=>{
        let totalAddOns = 0;
        i.addOns && i.addOns.map(add=>{totalAddOns += add.price});
        totalPrice += (i.quantity * (i.price + totalAddOns));
        
        if(i.exchange.exchangePrice) {totalPrice = totalPrice - i.exchange.exchangePrice}
    })
    
    
    return totalPrice;
}