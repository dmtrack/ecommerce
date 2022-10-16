import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../config";
import { Preloader } from "../components/Preloader";
import { GoodsList } from "../components/GoodsList";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      {!loading ? <GoodsList goods={goods} /> : <Preloader />}
    </main>
  );
}

export { Shop };
