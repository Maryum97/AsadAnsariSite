import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path={'/'} component={MainPage} ></Route>
          <Route exact path={'/contact'} component={Contact} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
