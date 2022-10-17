import { BasketItem } from "./BasketItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incrementItem = Function.prototype,
    decrementItem = Function.prototype,
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  const basketStyle =
    order.length < 6 ? "collection basket" : "collection basket-big";
  const orderMessage = () => toast("order accomplished");
  return (
    <ul className={basketStyle}>
      <li className="collection-item active">
        Basket{" "}
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          clear
        </i>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            removeFromBasket={removeFromBasket}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">Basket is empty</li>
      )}

      <li className="collection-item active">
        <button onClick={orderMessage} className="btn-small button-checkout">
          Checkout
        </button>
        Summary: {totalPrice} v
      </li>
    </ul>
  );
}

export { BasketList };
