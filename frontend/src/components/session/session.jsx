import React from 'react';
import Login from './login';
import SignUp from './sign-up'

class Session extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newAccount: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        if (this.state.newAccount === false) {
            this.setState({newAccount: true})
        } else {
            this.setState({newAccount: false})
        }
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li 
              key={`error-${i}`}
              className="error"
              >
                {error}
              </li>
            ))}
          </ul>
        );
      }

      render(){
          const {login, createNewUser} = this.props
          return (
              <div>
                  {this.state.newAccount === false ? 
                  <Login 
                  login = {login}/> : <SignUp createNewUser = {createNewUser} /> }
                  {this.props.errors ? this.renderErrors() : <div></div>} 
                 { this.state.newAccount === false ? <button onClick={this.toggle}>Create New Account</button> : <button onClick={this.toggle}>back</button>

                 } 
              </div>
          )
      }
}

export default Session