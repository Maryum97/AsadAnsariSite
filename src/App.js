import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path={'/'} component={MainPage} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
