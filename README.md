# react-redux-basics
# 04-react-redux this branch have following learnings

1. In Previous branches we learned how to use redux we can use it alone or with any other framework in order to use it with react we need a bridge which communicate between them and that bridge is.

``` javascript
import { connect } from "react-redux";

```
2. How to pass your store to the App (Check Index.js)

``` javascript
import { Provider } from "react-redux";

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    window.document.getElementById('app'));

```

3. As with Redux we have a Global Store which has so many state and in a component if i want to use/update few of them we can use it like -


``` javascript
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
