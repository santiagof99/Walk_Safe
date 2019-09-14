import React from 'react';
import '../App.css';
import { Link, Route } from 'react-router-dom';
import Home from './Home';

class Welcome extends React.Component {
    render() {
        return (
            <div className="App">
              <header className="App-header">
                <p>
                  Welcome to Walk Safe!
                </p>
                <li>
                  <Link to="/home">Home</Link>
                </li>
              </header>
            </div>
          );
    }
}

export default Welcome;
