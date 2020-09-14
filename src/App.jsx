import React, { createContext } from 'react'
import CompA from './CompA'



let Fname=createContext();

function App() {

  
    return (
        <div>

        <Fname.Provider value={"Shamim"}>
        
       </Fname.Provider>
  
        </div>
    )
}

export default App;

export {Fname};
