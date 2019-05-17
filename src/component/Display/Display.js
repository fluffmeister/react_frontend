import React from 'react'
import Item from '../Item/Item'


const Display = (props)=>{
  
    const itemList= props.found.map((found,i)=>
        <ul key={i}>
         
         <div style={{'textAlign':'center','borderRadius':'10px'}}>{found.name}<br/>        
           <img src={`http://media.blizzard.com/d3/icons/items/large/${found.icon}.png`}></img>
           <Item slug= {found.slug} id={found.id}/>
            <button onClick>ADD</button>
          </div>
        </ul>    
    ) 
    return( 
        <div>
            <h4>Display</h4>
                <ul>
                    {itemList}
                </ul>
        </div>
        )
    }
export default Display





