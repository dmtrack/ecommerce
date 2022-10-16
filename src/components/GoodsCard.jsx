const GoodsCard = (card) => {
  const { id, name, description, price, full_background } = card;
  console.log(card);
  return (
    <>
      <div className="card" id={id}>
        <div className="card-image">
          <img src={full_background} alt={name} />
          <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
          </a>
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className="btn">Buy</button>
          <span className="right flow-text">{price}$</span>
        </div>
      </div>
    </>
  );
};
export { GoodsCard };
