import React, { useState } from 'react';
import ComA from './components/ComA';
// import Data from './components/Data';
// import Logger from './components/Logger';

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

const App = () => {

  // const [isShown , setIsShown] = useState(true);
  const [name , setName] = useState("Sarok")

  return (
    <div>
      {/* <button onClick={()=> setIsShown(false)}>Delete</button>
      {isShown && <Logger/>} */}
      {/* <Data/> */}
      
      <NameContext.Provider value={name}>
        <AgeContext.Provider value={16}>
        <ComA name={name} />
        </AgeContext.Provider>
      </NameContext.Provider>
    </div>
  );
};

export default App;