import React from "react";
import { render } from "react-dom";
import App  from "./container/App";
import { Provider } from "react-redux";
import store from "./store"

// Connect Store with react App
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    window.document.getElementById('app'));
