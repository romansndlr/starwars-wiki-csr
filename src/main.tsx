import axios from "axios";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

dayjs.extend(relativeTime);

axios.defaults.baseURL = "https://swapi.dev/api/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
