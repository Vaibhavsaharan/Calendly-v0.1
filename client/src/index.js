import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StyleReset } from 'atomize';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Provider } from 'react-redux';
import {store , persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>  
        <StyleReset />
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App />  
            </PersistGate>
          </Provider> 
      </StyletronProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
