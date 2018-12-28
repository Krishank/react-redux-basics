import React from "react";
import { render } from "react-dom";
import App  from "./container/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger"
import { Provider } from "react-redux";

const mathReducer = (state = {
    result: 1,
    lastValue: []
  }, action)=>{
  switch (action.type) {
    case "ADD":

      state = {
        ...state,
        result : state.result+action.payload,
        lastValue : [...state.lastValue, action.payload]
      }

      break;

    case "SUBTRACT":

      state = {
        ...state,
        result : state.result-action.payload,
        lastValue : [...state.lastValue, action.payload]
      }

      break;
    default:

  }
  return state;
}


const userReducer = (state = {
    name: "Krishank",
    age: 27
  }, action)=>{
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name : action.payload
      }

      break;

    case "SET_AGE":

      state = {
        ...state,
        age : action.payload
      }

      break;
    default:

  }
  return state;
}

const store = createStore(
  combineReducers({mathReducer, userReducer}),
  {},
  applyMiddleware(logger)
);

// Connect Store with react App
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    window.document.getElementById('app'));
