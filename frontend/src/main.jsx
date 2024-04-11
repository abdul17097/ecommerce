import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Index from "./routes/Index";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastContainer />
    <Provider store={store}>
      <Index />
    </Provider>
  </BrowserRouter>
);
