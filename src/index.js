import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/AppProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

