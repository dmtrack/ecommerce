import { useContext } from "react";
import { ShopContext } from "../../src/context";

function BasketItem(props) {
  const { id, name, price, quantity } = props;

  const { removeFromBasket, incrementItem, decrementItem } =
    useContext(ShopContext);

  return (
    <>
      <li className="collection-item">
        {name}{" "}
        <i
          className="material-icons quantityControl-buttons"
          onClick={() => incrementItem(id)}
        >
          add
        </i>{" "}
        x {quantity}{" "}
        <i
          className="material-icons quantityControl-buttons"
          onClick={() => decrementItem(id)}
        >
          remove
        </i>{" "}
        = {price * quantity} v
        <span
          className="secondary-content"
          onClick={() => removeFromBasket(id)}
        >
          <i className="material-icons basket-delete">clear</i>
        </span>
      </li>
    </>
  );
}

export { BasketItem };
