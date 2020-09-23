import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // StrictMode 는 에러를 탐지하기 위한 목적인가 뭐라나 하여간 그래서 2번 호출해서 뭐시기 한다.
  <React.StrictMode>
    <App />
  </React.StrictMode>, // 랜더링할 거
  document.getElementById("root") // 랜더링할 위치
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
