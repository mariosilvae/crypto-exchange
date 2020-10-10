import React, { useState, useEffect } from "react";

import TableComponent from "../components/TableComponent/TableComponent";
import Header from "../components/Header/Header";
import TableRowComponent from "../components/TableRowComponent/TableRowComponent";
import Button from "@material-ui/core/Button";
import useInitialState from "../hooks/useInitialState";
import Footer from "../components/Footer/Footer";

import "./Home.scss";

const API = "https://api.coincap.io/v2/assets";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [coins, setApi] = useInitialState();

  useEffect(()=>{
    setApi(`${API}?limit=${limit}&offset=${offset}`)
  },[offset])
  

  return (
    <div className="app">
      <Header />
      <div className="table__container">
        <TableComponent>
          {coins.map((coin) => (
            <TableRowComponent key={coin.id} {...coin} />
          ))}
        </TableComponent>
      </div>
      <div className="button">
        <Button onClick={()=> setOffset((offset)=> offset + 20)} variant="contained" color="primary">
          Cargar más
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
