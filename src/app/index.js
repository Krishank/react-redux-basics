import { createStore } from "redux";


const intialValue = {
    result: 4,
    lastValue: []
  }
const reducer = (state = intialValue, action)=>{
  switch (action.type) {
    case "ADD":
      //state = state + action.payload;
      state = {
        ...state,
        result : state.result+action.payload,
        lastValue : [...state.lastValue, action.payload]
      }

      break;

    case "SUBTRACT":
      //state = state - action.payload;
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

const store = createStore(reducer);

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
