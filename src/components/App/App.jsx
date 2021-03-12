import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import PageForm from '../../pages/PageForm/PageForm';
import PagePalette from '../../pages/PagePalette/PagePalette';

import './App.scss';
import { useSelector } from 'react-redux';


function App() {
  const { lightTheme } = useSelector(state => state.theme);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (lightTheme) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [lightTheme]);

  return (
    <Router>
      <div className="app" data-theme={theme}>
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
