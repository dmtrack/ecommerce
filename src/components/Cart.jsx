import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
  const { quantity = 0, handleBasketShow } = useContext(ShopContext);
  return (
    <div className="cart " onClick={handleBasketShow}>
      <i className="material-icons ">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
export { Cart };
