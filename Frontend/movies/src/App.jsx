import React from 'react'
import './styles/App.css';
import Movies from './components/Movies/Movies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/movies' component={Movies} />
                {/* <Route path='/about' component={About} /> */}
                <Route path='/about' render={(props) => (
                    <About {...props} isAuth={true} />
                )} />
            </Switch>
        </Router>
    )
}

export default App;
