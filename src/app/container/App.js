import React from "react";
import { connect } from "react-redux";
import { User } from '../components/User';
import { Main } from '../components/Main';
import { setName } from '../actions/userActions';



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
      dispatch(setName(name));
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
