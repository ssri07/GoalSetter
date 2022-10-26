import React from 'react'
import {store} from "./App/store";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from "./serviceWorker.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
)
serviceWorker.unregister();
