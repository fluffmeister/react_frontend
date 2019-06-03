import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Display from '../Display/Display'

class Search extends Component {
  state = {
    found:[],
    itemsList: {},
    search:'',
  }

  componentDidMount() {
    this.fetchCall()
      .then(res=>
        this.setState({itemsList: res})
      )
  }
  
  fetchCall = async e => {
  
    try {
      //const item = await fetch(`/d3/data/item/${this.state.search}`)
        const item = await fetch(`d3/data/item-type/${this.state.search}`)   
        const itemJson= await item.json()
        this.setState({
          itemsList:itemJson,
          found:itemJson
        })
 
        return itemJson
    } catch(err) {
      console.log(err)
    }
  }
  doUpdateSearch = e =>
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })

  newSearch =e =>{
      e.preventDefault()
      this.fetchCall()
      .then(res=>
        this.setState({
          itemsList: res,
          found:res
        })
      ) 
  }

  render() {
    return (
      <div>
          <h1>Item Search</h1>
            <form onSubmit={this.newSearch}>
                <input 
                  type="text" 
                  value={this.search} 
                  name="search" 
                  onChange={this.doUpdateSearch}/>

                <button type="submit">Submit</button>
            </form>

            <Display found={this.state.found}/>
           
      </div>
    )
  }
}

export default withRouter(Search)