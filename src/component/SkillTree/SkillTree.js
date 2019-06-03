import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import DisplayS from '../DisplayS/DisplayS'
import '../SkillTree/SkillTree.css'

class SkillTree extends Component {
  state = {
    skillList: {},
    found:[],
    search:'',
    active:false
  }

  componentDidMount() {
   this.doGetSkill()
   .then(res=>
    this.setState({
      skillList:res,
      result:res
    })
  )
  console.log(this.state.result,'result')
  }
 
  
  doGetSkill = async e => {
    try {
      const skill = await fetch(`d3/data/hero/${this.props.charClass}`)  
      const parsedSkill = await skill.json()
      this.setState({skillList:parsedSkill,found:parsedSkill,active:true})
      console.log(this.state.found.skills.active,'this was the found')
    } catch(err) {

      console.log(err)
    }
  }
 
  render() {
  
    return (
      <div>
          <button onClick={this.doGetSkill}>Display Skill</button>
          {this.state.active?
          <DisplayS charClass={this.props.charClass} found={this.state.found}/>:null
          }
      </div>
    )
  }
}

export default withRouter(SkillTree)