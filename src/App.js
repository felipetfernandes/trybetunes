import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Album from './services/pages/Album';
import Favorites from './services/pages/Favorites';
import Login from './services/pages/Login';
import Profile from './services/pages/Profile';
import ProfileEdit from './services/pages/ProfileEdit';
import Search from './services/pages/Search';
import NotFound from './services/pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route exact path="/" component={ Login } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
