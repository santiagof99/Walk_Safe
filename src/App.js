import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Welcome} exact />
        <Route path="/home" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
