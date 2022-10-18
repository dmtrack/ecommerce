import { GoodsCard } from "./GoodsCard";
import { useContext } from "react";
import { ShopContext } from "../context";

const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);
  return (
    <>
      <div className="goods">
        {goods.length ? (
          goods.map((card) => <GoodsCard {...card} key={card.id} />)
        ) : (
          <h3 className="flow-text">Nothing here</h3>
        )}
      </div>
    </>
  );
};

export { GoodsList };
