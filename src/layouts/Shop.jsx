import { API_URL, API_KEY } from "../config";
import { useEffect, useContext } from "react";
import { ShopContext } from "../context";
import { Preloader } from "../components/Preloader";
import { GoodsList } from "../components/GoodsList";
import { Cart } from "../components/Cart";
import { BasketList } from "../components/BasketList";
import { Alert } from "../components/Alert";

function Shop() {
  const { goods, setGoods, alertName, isBasketShow, order, loading } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main className="container content">
        <Cart quantity={order ? order.length : null} />

        {!loading ? <GoodsList /> : <Preloader />}
        {isBasketShow && <BasketList />}
      </main>
      {alertName && <Alert />}
    </>
  );
}

export { Shop };
