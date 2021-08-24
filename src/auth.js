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
                    <input type="text" onChange={(e) => this.setState({ email: e.target.value})}></input>

                    <label> Password: </label>
                    <input type="text" onChange={(e) => this.setState({ password: e.target.value})}></input>

                    <button>{this.getAccountType()}</button>
                    </fieldset>
                </form>
            </>
         );
    }
}
 
export default Auth;