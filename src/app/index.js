import { createStore } from "redux";


const reducer = (state, action)=>{
  switch (action.type) {
    case "ADD":
      state = state + action.payload;

      break;

    case "SUBTRACT":
      state = state - action.payload;

      break;
    default:

  }
  return state;
}

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});


store.dispatch({
  "type": "ADD",
  "payload": 4
});

store.dispatch({
  "type": "ADD",
  "payload": 9
});

store.dispatch({
  "type": "SUBTRACT",
  "payload": 3
});
