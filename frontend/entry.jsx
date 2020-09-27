import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import { fetchBusiness, fetchBusinesses } from "./actions/business_actions";
// import { login, logout, signup } from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.dispatch = store.dispatch;
    window.getState = store.dispatch;
    window.fetchBusinesses = fetchBusinesses;

    ReactDOM.render(<Root store={store}/>, root)
})