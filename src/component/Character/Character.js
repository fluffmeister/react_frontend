import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
// import Skill from '../Skill/Skill'
import SkillTree from '../SkillTree/SkillTree';

class Character extends Component {
  state = {
    charClass:'',
  }

  
  changeClassWizard=(e)=>{this.setState({charClass:'wizard'})}
  changeClassBarbarian=(e)=>{this.setState({charClass:'barbarian'})}
  changeClassMonk=(e)=>{this.setState({charClass:'monk'})}
  changeClassDemonHunter=(e)=>{this.setState({charClass:'demon-hunter'})}
  changeClassNecro=(e)=>{this.setState({charClass:'necromancer'})}
  changeClassCrusader=(e)=>{this.setState({charClass:'crusader'})}
  
  doGetSkill = async e => {
    try {
      const skill = await fetch()  
      const parsedItem = await skill.json()
          
      return parsedItem

    } catch(err) {

      console.log(err)
    }
  }
 
  render() {
        console.log(this.state.charClass,'======class')
    return (
      <div>
       
          <button className='button' name='Wizard' value='Wizard'onClick={this.changeClassWizard}>Wizard</button>
          
          <button className='button'  name='Barbarian' value='Barbarian'onClick={this.changeClassBarbarian} >Barbarian</button>

          <button className='button'  name='Monk' value='Monk' onClick={this.changeClassMonk}>Monk</button>

          <button className='button'  name='Demon Hunter' value='Demon Hunter' onClick={this.changeClassDemonHunter}>Demon Hunter</button>
          
          <button className='button'  name='crusader' value='crusader' onClick={this.changeClassCrusader}>Crusader</button>

          <button className='button'  name='necromancer' value='necromancer' onClick={this.changeClassNecro}>Necromancer</button>
          
          
          
          {
            this.state.charClass=='wizard'?<h1>WIZARD</h1>
            :this.state.charClass=='barbarian'?<h1>BARBARIAN</h1>
            :this.state.charClass=='monk'?<h1>MONK</h1>
            :this.state.charClass=='demon-hunter'?<h1>DEMON HUNTER</h1>
            :this.state.charClass=='necromancer'?<h1>NECROMANCER</h1>
            :this.state.charClass=='crusader'?<h1>CRUSADER</h1>
            :<h1>Choose Class</h1>
            }

            
        <SkillTree charClass={this.state.charClass}/>
        
      </div>
    )
  }
}

export default withRouter(Character)