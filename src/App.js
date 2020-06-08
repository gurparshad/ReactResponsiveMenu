import React from 'react';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import Lost from './lost';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
      <Navbar/>

       <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/lost" component={Lost}/>
        </Switch>
      
     
    </div>
    </Router>
    
  );
}

export default App;
