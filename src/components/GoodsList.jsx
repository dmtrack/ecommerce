import { GoodsCard } from "./GoodsCard";

const GoodsList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props;
  return (
    <>
      <div className="goods">
        {goods.length ? (
          goods.map((card) => (
            <GoodsCard {...card} key={card.id} addToBasket={addToBasket} />
          ))
        ) : (
          <h3 className="flow-text">Nothing here</h3>
        )}
      </div>
    </>
  );
};

export { GoodsList };
