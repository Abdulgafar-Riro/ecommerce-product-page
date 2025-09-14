import React, { useState } from "react";
import PrevIcon from "../assets/images/icon-minus.svg";
import NextIcon from "../assets/images/icon-plus.svg";
import CartIcon from "../assets/images/icon-cart.svg";
import ProductThumb from "../assets/images/image-product-1-thumbnail.jpg";

function ProductInfo({ onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      const product = {
        id: Date.now(), // unique product ID
        title: "Fall Limited Edition Sneakers",
        price: 125.0,
        quantity: quantity,
        image: ProductThumb,
      };
      onAddToCart(product);
      setQuantity(0); // reset after adding
    }
  };

  return (
    <section className="product-info">
      <header>
        <p className="company-name">SNEAKER COMPANY</p>
      </header>

      <div className="about-product">
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>

      <div className="price">
        <div className="sales-price">
          <p className="new-price">$125.00</p>
          <p className="discount">50%</p>
        </div>

        <div className="marked-price">
          <p className="old-price">$250.00</p>
        </div>
      </div>

      <div className="add-to-cart-section">
        <div className="add-to-cart">
          <img
            src={PrevIcon}
            alt="decrease quantity"
            onClick={handleDecrement}
          />
          <p>{quantity}</p>
          <img
            src={NextIcon}
            alt="increase quantity"
            onClick={handleIncrement}
          />
        </div>

        <button
          className="add-to-cart-btn"
          type="button"
          onClick={handleAddToCart}
        >
          <img src={CartIcon} alt="cart icon" />
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
