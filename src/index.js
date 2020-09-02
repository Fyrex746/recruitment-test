import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer';

import App from "./App";

const defaultTasks = [
  {
    id: "step1",
    text: "Learn development",
    isDone: false
  },
  {
    id: "step2",
    text: "Create stuff",
    isDone: false
  },
  {
    id: "step3",
    text: "????",
    isDone: false
  },
  {
    id: "step4",
    text: "PROFIT!!!",
    isDone: false
  },
];

const previousTasks = JSON.parse(localStorage.getItem('tasks'));
let store = createStore(
  reducer,
  previousTasks || defaultTasks
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
