import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import ShowUser from './component/ShowUser/ShowUser'
// import Skills from './component/Skill/Skill'
import Search from './component/Search/Search'
import Register from './component/Register/Register'
import Character from './component/Character/Character'
import * as routes from './constants/routes'
import './App.css';

class App extends Component {
  state = {
    logged:false,
    token:'',
    currentUser: null,
    item:[]
  }
  auth = async e =>{
    try {
      const oauth = await fetch('http://localhost:3001/auth/bnet')

      console.log(oauth,'this is oauth')

    } catch(err) {

      console.log(err)
    }
  }
  
  render() {
    return (
      
      <div style={{'textAlign':'center'}}>
        
        <NavBar currentUser={this.state.currentUser}/>
        {
        this.state.logged ?
        
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
         
  
          <Route exact path={routes.USERS} render={() => <div>USER</div>} />
          <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
          <Route exact path={routes.CHARACTER} render={() => <Character/>} />
          <Route exact path={routes.SEARCH} render={() => <Search />} />
          <Route exact path={routes.REGISTER} render={() => <Register />} />
          <Route exact path={'/login'} render={() => <Login currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
        // :<a href='auth/bnet'>bnet login</a>
        :<button onClick={this.auth}>Log in with Bnet</button>
        }
      </div>
      
    );
  }
}



export default App;