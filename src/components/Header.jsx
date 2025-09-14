import { useState } from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";
import MenuIcon from "../assets/images/icon-menu.svg";
import Logo from "../assets/images/logo.svg";
import CartIcon from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";

function Header({ cartItems, onRemoveFromCart }) {
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="page-header">
      {showSidebar && <SideBar onClose={() => setShowSidebar(false)} />}

      {showCart && (
        <section className="cart-section">
          <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
        </section>
      )}

      <section className="header-section">
        <div className="left-side">
          <img
            src={MenuIcon}
            alt="Hamburger menu icon"
            className="icons menu-icon"
            onClick={() => setShowSidebar(true)}
          />

          <img
            src={Logo}
            alt="sneakers logo use by the company"
            className="logo"
          />

          <nav className="navs">
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div className="right-side">
          <div
            className="cart-wrapper"
            onClick={() => setShowCart((prev) => !prev)}
          >
            <img src={CartIcon} alt=" cart icon" className="icons cart-icon" />

            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </div>

          <img
            src={Avatar}
            alt="image avatar for user"
            className="icons avatar"
          />
        </div>
      </section>
    </header>
  );
}

export default Header;
