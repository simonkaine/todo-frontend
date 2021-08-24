import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div className="consistent-header">
                <h1>Sign In || Sign Up</h1>
                </div>
                <div className="links-box">
                    <NavLink exact to="/" className="home-link">Home</NavLink>
                    <NavLink to="/login" className="sign-in-link">Login</NavLink>
                    <NavLink to="/signup" className="sign-up-link">Sign Up</NavLink>
        
                </div>
            </header>
         );
    }
}
 
export default Header;