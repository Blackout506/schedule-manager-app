import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import NavBar from './components/Navigation/NavBar/NavBar';
import HomePage from './containers/HomePage/HomePage';
import Schedule from './containers/Schedule/Schedule';
import Calendar from './containers/Calendar/Calendar';
import Search from './containers/Search/Search';
import SignIn from './containers/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path='/' exact component={HomePage} />
      <Route path='/Schedule' component={Schedule} />
      <Route path='/Calendar' component={Calendar} />
      <Route path='/Search' component={Search} />
      <Route path='/SignIn' component={SignIn} />
    </div>
  );
}

export default App;
