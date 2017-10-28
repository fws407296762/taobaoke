/**
 * Created by fws on 2017/10/28.
 */

import React from "react";
import ReactDOM from "react-dom";
import {Router,Route} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import "./reset.css";
import App from "./App";

ReactDOM.render(
    <Router history={history}>
        <Route path="/" component={App} />
    </Router>,
    document.getElementById("root")
)