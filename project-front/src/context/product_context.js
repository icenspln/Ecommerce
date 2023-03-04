import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "http://localhost:4000/products/getAllProducts";
const API_SingleProduct = "http://localhost:4000/products/getProductById/"
const API_AddOrder = "http://localhost:4000/products/addOrder";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  addOrderLoading : false,
  addOrderError : false,
  addOrderSuccess : false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data['result'];
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(API_SingleProduct+url);
      const singleProduct = await res.data['result'];
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  const addOrder = async (data) => {
    dispatch({ type: "ADD_ORDER_LOADING" });
    try {
      await axios.post(API_AddOrder , data);
      dispatch({ type: "ADD_ORDER_SUCCESS" });
    } catch (error) {
      dispatch({ type: "ADD_ORDER_ERROR" });
    }
  };



  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct , addOrder }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
