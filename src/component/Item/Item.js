import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class Item extends Component {
  state = {
    itemsList: {},
    search:''
  }

  componentDidMount() {
    this.doGetItem()
      .then(res=>
        this.setState({itemsList:res})
      )
      console.log(this.state.itemsList,'=======itemnslist')
  }
  // doUpdateSearch = e =>
  //   this.setState({
  //     [e.currentTarget.name]: e.currentTarget.value
  // })
  // onSubmit = async (e) => 
  //   e.preventDefault();
 

  doGetItem = async e => {

    try {
      const item = await fetch(
       `https://us.api.blizzard.com/d3/data/item/corrupted-ashbringer-Unique_Sword_2H_104_x1?locale=en_US&access_token=USojOkHyGAb62Z1bHNsVRA3aAMldeBqxTQ`
        //`https://us.api.blizzard.com/d3/data/item-type${this.state.search}?locale=en_US&access_token=SojOkHyGAb62Z1bHNsVRA3aAMldeBqxTQ`
       // `https://us.api.blizzard.com/d3/data/item-type/${this.state.search}?locale=en_US&access_token=SojOkHyGAb62Z1bHNsVRA3aAMldeBqxTQ`

        )  
         
      const parsedItem = await item.json()
         console.log(parsedItem,'====parseditems')
      return parsedItem

    } catch(err) {
      console.log(err)
    }
  }
 
  render() {
    return (
      <div>
          <h1>Search Item</h1>
          <h2>{this.itemsList}</h2>
     
        
      </div>
    )
  }
}

export default withRouter(Item)