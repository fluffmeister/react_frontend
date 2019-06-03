import React from 'react'

import '../Display/Display.css'
import Skills from '../Skills/Skills';


const DisplayS = (props)=>{
    console.log(props)
    const passiveSkills= props.found.skills.passive.map((skill,i)=>
        <div className='display'>
            <ul key={i}>
            
            <div  style={{'textAlign':'center','borderRadius':'10px'}}>{skill.name}<br/>        
            
            <img src={`http://media.blizzard.com/d3/icons/skills/64/${skill.icon}.png`}></img>
            Level Aquired:{skill.level}
           
            <p>{skill.description}</p>
           
            {/* <Skills charClass={props.charClass} skill={skill.slug}/> */}
                <button onClick>ADD</button>
            </div>
            </ul>   
        </div> 
    )
    const activeSkills= props.found.skills.active.map((skill,i)=>
        <div className='display'>
            <ul key={i}>
            
            <div  style={{'textAlign':'center','borderRadius':'10px'}}>{skill.name}<br/>        
            <img src={`http://media.blizzard.com/d3/icons/skills/64/${skill.icon}.png`}></img>
            Level Aquired:{skill.level}
            <p>{skill.description}</p>
            <Skills charClass={props.charClass} skill={skill.slug}/>
                <button onClick>ADD</button>
            </div>
            </ul>   
        </div> 
    )  
    return( 
        <div>
            <h4>Display Skills</h4>
            <h1>Passive Skills</h1>
                {passiveSkills}
            <h1>Active Skills</h1>
                {activeSkills}     
        </div>
        )
    }
export default DisplayS





