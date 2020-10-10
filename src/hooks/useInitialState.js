import { useState, useEffect } from "react";

const useInitialState = () => {
  const [coins, setCoins] = useState([]);
  const [api, setApi] = useState("")

  useEffect(() => {
    if(api !== "") {
      fetch(api)
        .then((response) => response.json())
        .then((result) => {
          setCoins((coins)=> [...coins, ...result.data]);
        });
      } 
  }, [api]);

  return [coins,setApi];
};

export default useInitialState;
