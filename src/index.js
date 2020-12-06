import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from "./utils/Context";
import Home from "./views/Home";

ReactDOM.render(
  <ContextProvider>
    <Home />
  </ContextProvider>,
  document.getElementById("root")
);
