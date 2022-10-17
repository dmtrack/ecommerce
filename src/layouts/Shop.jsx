import { API_URL, API_KEY } from "../config";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { GoodsList } from "../components/GoodsList";
import { Cart } from "../components/Cart";
import { BasketList } from "../components/BasketList";
import { Alert } from "../components/Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  // const findOrder = (id) => {
  //   return orders.find((order) => order.id === id);
  // };

  // function addToBasket({ id }) {
  //   if (orders === undefined) {
  //     const newOrder = goods.find((good) => good.id === id);
  //     setOrder([newOrder]);
  //   } else {
  //     if (findOrder(id) === undefined) {
  //       const newOrder = goods.find((good) => good.id === id);
  //       setOrder([newOrder, ...orders]);
  //     } else return;
  //   }
  // }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const handleCloseAlert = () => {
    setAlertName("");
  };

  function addToBasket(item) {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  }
  const removeFromBasket = (id) => {
    const newOrder = order.filter((item) => item.id !== id);
    return setOrder(newOrder);
  };

  const incrementItem = (id) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === id) {
        return { ...orderItem, quantity: orderItem.quantity + 1 };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  const decrementItem = (id) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === id) {
        const newQuantity = orderItem.quantity - 1;
        return { ...orderItem, quantity: newQuantity >= 0 ? newQuantity : 0 };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  useEffect(() => {}, [isBasketShow]);

  return (
    <>
      <main className="container content">
        <Cart
          quantity={order ? order.length : null}
          handleBasketShow={handleBasketShow}
        />

        {!loading ? (
          <GoodsList goods={goods} addToBasket={addToBasket} />
        ) : (
          <Preloader />
        )}
        {isBasketShow && (
          <BasketList
            order={order}
            handleBasketShow={handleBasketShow}
            removeFromBasket={removeFromBasket}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
          />
        )}
      </main>
      {alertName && (
        <Alert name={alertName} handleCloseAlert={handleCloseAlert} />
      )}
    </>
  );
}

export { Shop };
