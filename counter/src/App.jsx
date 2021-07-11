import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import Home from './components/Home/Home';
import './styles/App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
