import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import ShowUser from './component/ShowUser/ShowUser'
import Item from './component/Item/Item'
import Search from './component/Search/Search'
import * as routes from './constants/routes'
import './App.css';

class App extends Component {
  state = {
    currentUser: null,
    item:[]
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.ITEM} render={() => <Item />} />
          <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
          <Route exact path={routes.USERS} render={() => <div>USER</div>} />
          <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
          <Route exact path={routes.POSTS} render={() => <div>POST</div>} />
          <Route exact path={routes.SEARCH} render={() => <Search />} />
          <Route exact path={'/login'} render={() => <Login currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}



export default App;