import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Register extends Component{
   state={
       username:'',
       password:''
   }
   
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    onSubmit = async (e) => {
        
        e.preventDefault();
        const registerResponse = await fetch('/users', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers:{
                "Content-type" : 'application/json'
            }
        })
        console.log(registerResponse)
        const parsedResponse = await registerResponse.json();
        console.log(parsedResponse)
        if(parsedResponse.user) {
          this.props.doSetCurrentUser(parsedResponse.user)
            this.setState({
                logged: true,
            })
        }
    }

render(){
    const {username,password}=this.state
    return(
        <div>
            {
                this.state.logged
                ?<Redirect to ={`users/${this.props.currectUser._id}`}/>
                :<RegisterForm 
                changeHandler={this.changeHandler}
                onSubmit={this.onSubmit}
                username={username}
                password={password}
                />
            }
        </div>
       
    )
    }
}


const RegisterForm= ({changeHandler,onSubmit,username,password})=> 
    <form onSubmit={e =>this.onSubmit(e)}>
        <lablel htmlFor='username'>username</lablel>
        <input onChange={e=> changeHandler(e)} value={username} name='username' 
        type='text' placeholder='username' />
        
        <lablel htmlFor='password'>password</lablel>
        <input onChange={e=> changeHandler(e)} name='password' value={password}
        type='password' placeholder='password'/>
        
        <button type='submit'>SUBMIT</button>
    </form>

export default Register