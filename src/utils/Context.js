import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <Context.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
