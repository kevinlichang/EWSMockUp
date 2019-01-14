import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import WhoIsSko from './components/WhoIsSko/WhoIsSko';
import Home from './components/Home/Home';
import VideoPage from './components/VideoPage/Video';
import Photo from './components/Photo/Photo';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header /> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/video' component={VideoPage} />
          <Route exact path='/photo ' component={Photo} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/who-is-sko' component={WhoIsSko} />
          <Route component={Home} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
