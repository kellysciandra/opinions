import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'

import MainChat from './chat/MainChat.js';


//styling
import './App.css';
import './index.css'

//components
import Dashboard from './layout/Dashboard'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'
import Test from './layout/Test'
import ModalExample from './chat/ModalExample'
//history
import history from './history'

class App extends Component {


  render() {

    return (
      <div>
        <Router history={history}>
        <NavBar />
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/test" component={Test}/>
        <Route exact path="/chat" component={MainChat}/>
        <Route exact path="/modal" component={ModalExample}/>
        <Footer />
        </Router>
   
      </div>
    );
  }
}

export default App;


















