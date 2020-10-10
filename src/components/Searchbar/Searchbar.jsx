import React from "react";
import "./Searchbar.scss";

const SearchBar = ({ keyWord, onChange }) => {
  return (
    <section className="searchBar">
      <h2 className="searchBar__title">Find your favorite Crypto</h2>
      <input
        type="text"
        className="input"
        placeholder="Search..."
        value={keyWord}
        onChange={(e) => onChange(e.target.value)}
      />
    </section>
  );
};

export default SearchBar;
