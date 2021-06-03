import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addItem, removeItem } from "./redux/cart/cart.actions";
import { selectCartItems } from "./redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CheckOut = ({ removeItem, addItem, cart }, props) => {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    setCartItems(cart);
  };

  useEffect(() => {
    getCartItems();
  });

  console.log("cart", cart);

  return (
    <div>
      <button
        onClick={() => {
          addItem();
          getCartItems();
        }}
      >
        {" "}
        Add to Cart
      </button>
      <button
        onClick={() => {
          removeItem();
        }}
      >
        {" "}
        Remove Item From Cart{" "}
      </button>
      <ul>
        <li>{cartItems && cartItems.map((item) => <ul>{item.name}</ul>)}</li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: () => dispatch(addItem()),
  removeItem: () => dispatch(removeItem()),
});

const mapStateToProps = createStructuredSelector({
  cart: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
