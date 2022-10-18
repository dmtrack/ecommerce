import { createContext, useReducer } from "react";
import { reducer } from "../src/reducer";
export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};
export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  value.handleCloseAlert = () => dispatch({ type: "CLOSE_ALERT" });
  value.handleBasketShow = () => dispatch({ type: "HANDLE_BASKET_SHOW" });
  value.removeFromBasket = (itemId) =>
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  value.incrementItem = (itemId) =>
    dispatch({ type: "INCREMENT_ITEM", payload: { id: itemId } });
  value.decrementItem = (itemId) =>
    dispatch({ type: "DECREMENT_ITEM", payload: { id: itemId } });
  value.addToBasket = (itemId) =>
    dispatch({ type: "ADD_TO_BASKET", payload: itemId });
  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
