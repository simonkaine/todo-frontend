import { Component } from 'react';

class Auth extends Component {
    state = { email: '', password: '' }

    getAccountType = () => {
        return this.props.type === 'login' ? 'Login' : 'Sign Up';
    };

    render() { 
        return ( 
            <>
                <h1>{this.getAccountType()}</h1>
                <form>
                    <fieldset>
                    <label>Email: </label>
                    <input type="text"></input>

                    <label> Password: </label>
                    <input type="text"></input>

                    <button>{this.getAccountType()}</button>
                    </fieldset>
                </form>
            </>
         );
    }
}
 
export default Auth;