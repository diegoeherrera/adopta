import React, { Component } from 'react';
import WelcomeComp from './components/WelcomeComp'
import { connect } from 'react-redux';
import {initState} from './components/Redux_/Actions'

//import logo from './logo.svg';
//import './App.css';

class App extends Component {

 componentDidMount() {
   //cuando es clase se declara asi
   this.props.initState()
  }


  render() {

    return (
 
      <div className="container">
        <WelcomeComp/ >
      </div>
    );
  }
}


const mapStateToProps = (state) => {
console.log("desde APP: ",state)
  return state
}

export default connect(mapStateToProps,{initState})(App);


