import React, { Component } from "react";
import formatCurrency from "../utils";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header"> Cart is empty </div>
        ) : (
          <div className="cart cart-header">
            {" "}
            You have {cartItems.length} in the cart{" "}
          </div>
        )}

        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  <img src={item.image_url} alt="image" />
                </div>

                <div>
                  <div> {item.title}</div>
                  <div className="right">
                    {"$"}
                    {item.count} x {item.price} = {"$"}
                    {Number(item.count * item.price, 2).toLocaleString()}
                    {"   "}
                    <button
                      className="button"
                      onClick={() => this.props.removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {cartItems.length !== 0 && (
          <div className="cart">
            <div className="total">
              <div>
                Total :{" "}
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
              <button className="button primary">Proceed Order</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
