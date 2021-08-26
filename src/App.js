import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header.js';
import Home from './home'
import Auth from './auth.js'

class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

  setToken = (theTokenValue) => {
    this.setState({ token: theTokenValue });
  }

  render() { 
    return ( 
      <BrowserRouter>

        <Header />
        <Switch>

            <Route exact path="/" component={Home}></Route>

            <Route path="/login" >
              <Auth type="signin" setToken={this.setToken}/>
            </Route>

            <Route path="/signup" >
              <Auth type="signup" setToken={this.setToken}/>
            </Route>

        </Switch>

      </BrowserRouter>
     );
  }
}

export default App;