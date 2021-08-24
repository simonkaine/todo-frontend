import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header.js';
import Home from './home'
import Auth from './auth.js'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter>

        <Header />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" >
              <Auth type="login"/>
            </Route>
            <Route path="/signup" component={Auth}></Route>
        </Switch>
        
      </BrowserRouter>
     );
  }
}

export default App;