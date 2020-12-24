import uuid from "react-uuid";

export const addToCart = (allCart, product) => {
  let existingProduct = allCart.find((ac) => ac.product === product.product);

  if (existingProduct) {
    return allCart.map((ac) =>
      ac.product === product.product ? { ...product } : { ...ac }
    );
  } else {
    return [...allCart, { ...product }];
  }
};

export const addToLocalCart = (allCart, product) => {
  
  if ( product.product.quantity >= product.count ) {
    
    let finalCart = allCart.filter(ac => ac.product != product.product._id);
    
   finalCart = [...finalCart ,{
    quantity : product.count,
    _id : uuid(),
    product : product.product._id,
    slug : product.product.slug,
    name : product.product.slug,
    price : product.product.price,
    productImage : `/api/serveImage/product/${product.product._id}/0/thumb`,
    addOns : product.addOns,
    exchange : product.exchangeProduct
  }]
    
    return finalCart;

    // const newCart = allCart.map((ac) =>
    // ac.product === product._id
    // ? {
    //   ...ac,
    //   quantity: product.count,
    //   productImage: `/api/serveImage/product/${product.product}/0/thumb`,
    // }
    // : ac
    // );
    // updateLocalStorage(newCart);
    // return newCart;
  }
};

export const updateLocalStorage = (allCart) => {
  let stringCart = JSON.stringify(allCart);

  window.localStorage.setItem("cart", stringCart);
};
