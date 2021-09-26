import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/HompePage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/admin/:adminUnique" component={AdminPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
