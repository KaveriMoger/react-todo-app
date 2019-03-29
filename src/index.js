import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App.jsx";
import $ from 'jquery';
import Bootstrap from "bootstrap/dist/css/bootstrap.css"
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer  from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from './Firebase'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase })),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)
  )
);
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById("app"));

