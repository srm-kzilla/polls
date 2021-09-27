import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HompePage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/admin/:id" component={AdminPage} />
      </Switch>
    </div>
  );
}

export default App;
