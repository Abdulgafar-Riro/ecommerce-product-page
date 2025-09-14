import React from "react";
import RemoveIcon from "../assets/images/icon-delete.svg";

function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <section className="cart">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty-paragraph">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-thumb" />
              <div>
                <p>{item.title}</p>
                <p>
                  ${item.price.toFixed(2)} × {item.quantity}{" "}
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </p>
              </div>

              <div className="cartItem-delete">
                <img
                  src={RemoveIcon}
                  alt="icon to delete item from cart"
                  onClick={() => onRemoveFromCart(item.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <button type="button" className="checkout-btn">
          Checkout
        </button>
      )}
    </section>
  );
}

export default Cart;
