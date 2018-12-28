# react-redux-basics
This App is a Basic Example of Using Redux and Redux with React App has multiple branches to explain the use of redux in a simple way please find the branches description below

#Prerequisites: ES6, React if you are not familiar with React please go through with the below link:
https://github.com/Krishank/reactjs-basics


# 00-basic-setup:  
    Basic setup to start our project

# 01-redux-basic:
    This branch has a very high level setup for working redux model without React (index.js)
  a. How to create store
  b. how to create reducer
  c. subscribe to store in order to see changes in store
  d. how to dispatch actions to reducer and then reducer will handle the action and update the store.

# 02-immutable-state:
    This is very important to understand immutability for redux and this branch will explain that.

``` javascript
      state = {
              ...state,
              result : state.result+action.payload,
              lastValue : [...state.lastValue, action.payload]
            }

      state = {
              ...state,
              result : state.result-action.payload,
              lastValue : [...state.lastValue, action.payload]
            }
```

# 03-multiple-reducers:
    will Explain how to use multiple reducer (mathReducer, userReducer) in index.js

# 04-redux-middleware:
    Role and use of middleware in redux will explain logger but in other branches we will discuss about thunk, axios and redux-promise-middleware

``` javascript
  import {logger} from "redux-logger"

  const store = createStore(
  combineReducers({mathReducer, userReducer}),
  {},
  applyMiddleware(logger)
);

```

# 05-react-redux:
    Now we start using Redux with React.

  a. In Previous branches we learned how to use redux we can use it alone or with any other framework in order to use it with react we need a bridge which communicate between them and that bridge is.

  ```javascript

  import { connect } from "react-redux";

  ```

  b. How to pass your store to the App (Check Index.js)

  ```javascript

  import { Provider } from "react-redux";

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    window.document.getElementById('app'));

  ```

  c. As with Redux we have a Global Store which has so many state and in a component if i want to use/update few of them we can use it like -

  ```javascript

    import { connect } from "react-redux";

    // Map which all global State we wanna use as prop in this component

    const mapStateToProp = (state)=>{
      return{
        math: state.mathReducer,
        user: state.userReducer
      }
    }

    // Now this will Update our State
    const mapDispatchToProp = (dispatch)=>{
      return{
        setName:(name)=>{
          dispatch({
            type: "SET_NAME",
            payload: name
          });
        }
      }
    }

    export default connect(mapStateToProp, mapDispatchToProp)(App);


  ```

# 06-smart-and-dumb-component:
    Not all component use redux be aware while using it see the image on root smart-and-dumb-component.png we can divide components in container and components only container will react with Redux.


# 07-better-folder-strcture:
    Till now most of the redux code is in index.js now divide it in actions, reducers, store etc.

# 08-async-actions:
    Now we have a good scalable code structure the missing stuff is till now we are not performing any async action like fetching data from API, using promises for that we can use multiple middleware like thunk, saga, axios (fetch data), redux-promise-middleware
