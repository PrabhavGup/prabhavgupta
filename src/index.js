import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Strict mode checks are run in development mode only; they do not impact the production build
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
