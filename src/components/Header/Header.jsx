import React, { useContext } from "react";
import { Context } from "../../utils/Context";

import "./Header.scss";

const Header = () => {
  const { search, setSearch } = useContext(Context);

  const handleChangeSearchbar = (e) => {
    setSearch(e.target.value);
  };

  return (
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
          value={search}
          name="search"
          onChange={handleChangeSearchbar}
        />
        <button type="button">search</button>
      </div>
    </header>
  );
};

export default Header;
