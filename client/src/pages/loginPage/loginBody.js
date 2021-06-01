import React, { Component } from 'react';
import { Row, Col, Div , Text, Input, Button} from 'atomize';
import LoginArea from './components/loginArea'

class LoginBody extends Component {
  // Initialize state
  state = { message : "" }

  // Fetch passwords after first mount
  componentDidMount() {
    this.checkConnection();
  }

  checkConnection = () => {
    // Get the passwords and store them in state
    fetch('/api/hello')
      .then(res => res.json())
      .then(str => this.setState({ message : str['message'] }));
  }

  render() {
    var str  = this.state.message;
    console.log(str);
    return (
      <Div h = "100vh" w = "100vw" align="center" d="flex" justify="center" >
          <LoginArea/>
      </Div>
    );
  }
}

export default LoginBody;