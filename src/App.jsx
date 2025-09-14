import { useState } from "react";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      // Check if product already in cart
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <main className="main-container">
        <Header cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />

        <section className="product-section">
          <ProductImage />

          <ProductInfo onAddToCart={handleAddToCart} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
