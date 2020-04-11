import React from "react";

import Item from "./Todo";

const GroceryList = props => {
  // console.log("groceries", props.groceries);
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.state.map(item => (
        <Item
          key={item.id}
          item={item}
          togglePurchased={props.togglePurchased}
        />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Purchased
      </button>
    </div>
  );
};

export default GroceryList;
