import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {reducer} from './reducers/index.js';


import "./index.css";
import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
