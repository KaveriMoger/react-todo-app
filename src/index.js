import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Store from "./js/store/index"
import App from "./App.jsx";

ReactDOM.render(<Provider store = {Store}><App /></Provider>, document.getElementById("app"));
