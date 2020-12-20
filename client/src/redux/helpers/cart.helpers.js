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
  console.log(product);
  let existingProduct = allCart.find((ac) => ac.product === product._id);

  if (existingProduct && existingProduct.quantity + 1 < product.quantity) {
    const newCart = allCart.map((ac) =>
      ac.product === product._id
        ? {
            ...ac,
            quantity: ac.quantity + 1,
            productImage: `/api/serveImage/product/${product.product}/0/thumb`,
          }
        : ac
    );
    updateLocalStorage(newCart);
    return newCart;
  } else if (product.quantity > 0) {
    const newCart = [
      ...allCart,
      {
        product: product._id,
        quantity: 1,
        price: product.price,
        productImage: `/api/serveImage/product/${product.product}/0/thumb`,
      },
    ];
    updateLocalStorage(newCart);
    return newCart;
  }
};

export const updateLocalStorage = (allCart) => {
  let stringCart = JSON.stringify(allCart);

  window.localStorage.setItem("cart", stringCart);
};
