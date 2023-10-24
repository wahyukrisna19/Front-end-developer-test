import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "mobx-react";
import "./index.css";
import shoesStore from "./Store/ShoesStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={shoesStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
