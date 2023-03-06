const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product, flavor, size } = action.payload;

    // tackle the existing product

    let existingProduct =
      state.cart &&
      state.cart.find(
        (curItem) =>
          curItem.id === id &&
          curItem.flavor === flavor &&
          curItem.size === size
      );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (
          curElem.id === id &&
          curElem.flavor === flavor &&
          curElem.size === size
        ) {
          let newAmount = curElem.amount + amount;

          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id,
        title: product.desc,
        amount,
        flavor: flavor,
        size: size,
        img: product.img,
        //   image: product.image[0].url,
        price: product.price,
        //   max: product.stock,
      };
      console.log(cartProduct);
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // to set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let { id, flavor, size } = action.payload;

    let updatedProduct = state.cart.map((curElem) => {
      if (
        curElem.id === id &&
        curElem.flavor === flavor &&
        curElem.size === size
      ) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let { id, flavor, size } = action.payload;
    let updatedProduct = state.cart.map((curElem) => {
      if (
        curElem.id === id &&
        curElem.flavor === flavor &&
        curElem.size === size
      ) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let { id, flavor, size } = action.payload;

    let updatedCart = state.cart.filter(
      (curItem) =>
        curItem.id !== id || curItem.flavor !== flavor || curItem.size !== size
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }

  return state;
};

export default cartReducer;
