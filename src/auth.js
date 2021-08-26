import { Component } from 'react';
import { getToken } from './fetch-utils';

class Auth extends Component {
    state = { email: '', password: '' }

    getAccountType = () => {
        return this.props.type === 'signin' ? 'Login' : 'Sign Up';
    };
    // call to getToken function that takes two 
    // parameters of login info and type (email and pw)
    // set the token in local storage

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password,
            },
            this.props.type
        );
        console.log(token)
        this.props.setToken(token);
        this.props.history.push('/todos');
    };

    render() { 
        return ( 
            <>
                <h1>{this.getAccountType()}</h1>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                    <label>Email: </label>
                    <input type="email" onChange={(e) => this.setState({ email: e.target.value})}></input>

                    <label> Password: </label>
                    <input type="password" onChange={(e) => this.setState({ password: e.target.value})}></input>

                    <button>{this.getAccountType()}</button>
                    </fieldset>
                </form>
            </>
         );
    }
}
 
export default Auth;