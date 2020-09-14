import React from 'react'
import {Fname} from './App'

function CompC() {
    return (
        <div>

        <Fname.Consumer>

        {(v)=>{
         
            return <h1>hy {v}</h1>
        }}
        
        </Fname.Consumer>
            
        </div>
    )
}

export default CompC
