import React from 'react';
import Landing from './Landing'
import Main from './Main'
import '../css/App.css';
import {HashRouter as Router,Route} from "react-router-dom";

class App extends React.Component {
  
  state ={
    userID: ""
  }

  getUser(){

  }

  setUser(user){
    this.setState({userID: user})
  }

  render(){
    return (
      <div className="App">
          <Router>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/main" exact component={Main}></Route>
          </Router>
      </div>
    );
  }

}

export default App;
