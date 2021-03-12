import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import PageForm from '../../pages/PageForm/PageForm';
import PagePalette from '../../pages/PagePalette/PagePalette';

import './App.scss';


function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__container">
          <Navbar/>
          <Switch>
            <Route path="/" component={PageForm} exact/>
            <Route path="/palette" component={PagePalette}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
