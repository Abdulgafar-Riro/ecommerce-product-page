import React from "react";
import CloseIcon from "../assets/images/icon-close.svg";

function SideBar({ onClose }) {
  return (
    <section className="side-bar">
      <button onClick={onClose} aria-label="Close menu" className="close-btn">
        <img src={CloseIcon} alt="close menu" className="icons close-icon" />
      </button>

      <nav className="drop-down">
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </section>
  );
}

export default SideBar;
