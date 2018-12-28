import React from "react";
import { connect } from "react-redux";
import { User } from './User';
import { Main } from './Main';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={(name)=> this.props.setName("Anuj")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

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
