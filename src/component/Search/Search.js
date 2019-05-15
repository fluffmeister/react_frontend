import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class Search extends Component {
  state = {
    itemsList: {},
    search:''

  }

  componentDidMount() {
    this.fetchCall()
      .then(res=>
        this.setState({itemsList: res})
      )
  }


  fetchCall = async e => {
   
    try {
      const item = await fetch(`/d3/data/item/${this.state.search}`)
             
        const itemJson= await item.json()
        this.setState({itemsList:itemJson})
    console.log(itemJson,'itemjson')
    console.log(this.state.itemsList,'=======itemnslist')
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
          this.setState({itemsList: res})
        )
    }

  render() {
    return (
      <div>
          <h1>API Fetch</h1>
            <h2>{this.state.itemsList.name}</h2>

            <form onSubmit={this.newSearch}>

                <input type="text" value={this.search} name="search" onChange={this.doUpdateSearch}/>
                <button type="submit">Submit</button>
            </form>
           
      </div>
    )
  }
}

export default withRouter(Search)