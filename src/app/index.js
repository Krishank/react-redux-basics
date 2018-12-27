import { createStore, combineReducers } from "redux";


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



const store = createStore(combineReducers({mathReducer, userReducer}),);

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

store.dispatch({
  "type": "SET_NAME",
  "payload": "Anuj Sachan"
});

store.dispatch({
  "type": "SET_AGE",
  "payload": 30
});
