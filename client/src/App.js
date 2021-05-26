import React, { Component } from 'react';
import './App.css';

class App extends Component {
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

    return (
      <div className="App">
        <h6>Sup</h6>
        <h6>{str}</h6>
      </div>
    );
  }
}

export default App;