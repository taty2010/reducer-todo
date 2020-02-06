import React from "react";

const Item = props => {
  // console.log("Item props", props);
  return (
    <div
      onClick={event => props.togglePurchased(props.item.id)}
      className={`item ${props.item.purchased ? " completed" : ""}`}
    >
      <h2>{props.item.name}</h2>
    </div>
  );
};

export default Item;
