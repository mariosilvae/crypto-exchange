import React, { useState, useEffect, useReducer } from "react";

import TableComponent from "../components/TableComponent/TableComponent";
import Header from "../components/Header/Header";
import TableRowComponent from "../components/TableRowComponent/TableRowComponent";
import Button from "@material-ui/core/Button";
import useInitialState from "../hooks/useInitialState";
import Footer from "../components/Footer/Footer";

import "./Home.scss";

const API = "https://api.coincap.io/v2/assets";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [coins, setApi] = useInitialState();
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    console.log(initialState.favorites);
    setApi(`${API}?limit=${limit}&offset=${offset}`);
  }, [offset]);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  return (
    <div className="app">
      <Header />
      <div className="table__container">
        <TableComponent>
          {coins.map((coin) => (
            <TableRowComponent
              key={coin.id}
              {...coin}
              //handleClick={handleClick(coin)}
            />
          ))}
        </TableComponent>
      </div>
      <div className="button">
        <Button
          onClick={() => setOffset((offset) => offset + 20)}
          variant="contained"
          color="primary"
        >
          Cargar más
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
