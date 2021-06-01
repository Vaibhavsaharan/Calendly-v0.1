import React from 'react';
import './App.css';
import LoginBody from './pages/loginPage/loginBody';
import HomeBody from './pages/homePage/homeBody';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import BookingBody from './pages/bookingPage/bookingBody';

function App() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LoginBody} />
          <Route path="/home"  component={HomeBody} />
          
        </div>
      </Router>
    );
}

export default App;