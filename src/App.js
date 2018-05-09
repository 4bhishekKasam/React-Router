import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
<Router>
     <div>
    <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
       <div class="uk-navbar-left">
      
        <ul class="uk-navbar-nav">
            <li class="uk-active"><Link to={'/'}><b> <span uk-icon="icon: joomla; ratio: 1.5"></span>React</b> </Link></li>

            <li class="uk-active"><Link to={'/'}>Home</Link></li>
            <li class="uk-active"><Link to={'/Register'}>Register</Link></li>
            <li class="uk-active"><Link to={'/Login'}>Login</Link></li>

        </ul>
    </div>
  </nav>

<Switch >
   <Route exact path='/' component={Home} />
   <Route exact path='/Register' component={Register} />
   <Route exact path='/Login' component={Login} />
</Switch>
</div>
</Router>  
  
 </div>

    );
  }
}

export default App;
