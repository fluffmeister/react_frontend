import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../Item/Item.css'

class Item extends Component {
  state = {
    itemsList: {},
    result:[],
    search:'', 
  }

  componentDidMount() {
    
    this.doGetItem()
      .then(res=>
        this.setState({
          itemsList:res,
          result:res
        })
      )
      // console.log(this.state.result)
      // console.log(this.state.itemsList.id,'=======itemnslist')
  }
 
  
  doGetItem = async e => {
    try {
      const item = await fetch(`d3/data/item/${this.props.slug}/${this.props.id}`
        )  
      const parsedItem = await item.json()
          
      return parsedItem

    } catch(err) {

      console.log(err)
    }
  }
 
  render() {
 
    return (
      <div>
       <div style={{'textAlign':'center'}}>{this.state.itemsList.requiredLevel}
       {this.state.itemsList.damage}<br/>
      {this.state.itemsList.flavorText}</div>
     
      </div>
    )
  }
}

export default withRouter(Item)