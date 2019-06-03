import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../Item/Item.css'

class Skills extends Component {
  state = {
    skillList: {},
    result:[],
    search:'', 
  }

  componentDidMount() {
    
    this.doGetSkill()
      .then(res=>
        this.setState({
          skillList:res,
          result:res
        })
      )
      console.log(this.state.result)
      // console.log(this.state.itemsList.id,'=======itemnslist')
  }
 
  
  doGetSkill = async e => {
    try {
      const skill = await fetch(`d3/data/hero/${this.props.charClass}/skills/${this.props.skill}`
        )  
      const parsedSkill = await skill.json()
          console.log(parsedSkill,'======parse')
      return parsedSkill

    } catch(err) {

      console.log(err)
    }
  }
 
  render() {
 
    return (
      <div>
        hi there
       {/* <div style={{'textAlign':'center'}}>{this.state.itemsList.requiredLevel}
       {this.state.itemsList.damage}<br/>
      {this.state.itemsList.flavorText}</div> */}
     
      </div>
    )
  }
}

export default withRouter(Skills)