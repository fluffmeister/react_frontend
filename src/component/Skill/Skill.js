import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class Skill extends Component {
  state = {
    skillList: {},
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
      const skill = await fetch()  
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