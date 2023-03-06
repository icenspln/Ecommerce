import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("bf_store_cart");
  if (localCartData === []) {
    return [];
  } else if (localCartData === null)
    return [];
  else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product, flavor, size) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product, flavor, size } });
  };

  // increment and decrement the product

  const setDecrease = (id, flavor, size) => {
    dispatch({ type: "SET_DECREMENT", payload: { id, flavor, size } });
  };

  const setIncrement = (id, flavor, size) => {
    dispatch({ type: "SET_INCREMENT", payload: { id, flavor, size } });
  };

  // to remove the individual item from cart
  const removeItem = (id, flavor, size) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id, flavor, size } });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add the data in localStorage
  // get vs set

  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem("bf_store_cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };