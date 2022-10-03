import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import LoadingHandler from "./model/LoadingHandler";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const loadingHandler = new LoadingHandler();

axios.interceptors.request.use(
  function (response) {
    loadingHandler.addLoading();
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    loadingHandler.removeLoading();
    return response;
  },
  function (error) {
    loadingHandler.removeLoading();
    return Promise.reject(error);
  }
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
