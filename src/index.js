import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode >
    <BrowserRouter >
    <Provider store={store} >
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);