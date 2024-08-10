import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/sections/header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <Header />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
