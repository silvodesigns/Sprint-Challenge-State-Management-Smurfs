import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware} from 'redux'


import "./index.css";
import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(<App />, document.getElementById("root"));
