import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './header.js';
import Home from './home'
import Auth from './auth.js'
import ToDos from './todos.js';

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

            <Route path="/login" render={(routerProps) => (<Auth type="signin" 
            setToken={this.setToken} {...routerProps}/>)}>
            </Route>

            <Route path="/signup" render={(routerProps) => (<Auth type="signup" 
            setToken={this.setToken} {...routerProps}/>)}>
            </Route>

            <Route path="/todos" render={(routerProps) =>
                this.state.token ? (
                  <ToDos
                    token={this.state.token}
                    {...routerProps}/>
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

        </Switch>

      </BrowserRouter>
     );
  }
}

export default App;