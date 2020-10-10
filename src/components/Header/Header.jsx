import React from "react";

import "./Header.scss";

const Header = ({ keyWord, onChange }) => (
  <header className="header">
    <div className="header__title">
      <h1>Crypto Exchange</h1>
    </div>
    <div className="header__input">
      <img
        src="https://img.icons8.com/android/24/000000/search.png"
        alt="search icon"
      />
      <input
        type="text"
        className="input"
        placeholder=" Find your favorite Crypto..."
        value={keyWord}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </header>
);

export default Header;
