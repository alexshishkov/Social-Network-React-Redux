import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'
import store from "./redux/redux-store";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

export let rerenderEntireTree = (state) => {
    ReactDOM.render (
            <BrowserRouter>
                <App state={state} dispatch = {store.dispatch.bind(store)} store={store} />
            </BrowserRouter>, document.getElementById ('root'));
};

rerenderEntireTree = (state.getState());

state.subscribe( () => {
    let state = state.getState();
    rerenderEntireTree(state)
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

serviceWorker.unregister();

