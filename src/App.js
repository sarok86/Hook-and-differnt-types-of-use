import React, { useState } from 'react';
import Data from './components/Data';
// import Logger from './components/Logger';

const App = () => {

  // const [isShown , setIsShown] = useState(true);

  return (
    <div>
      {/* <button onClick={()=> setIsShown(false)}>Delete</button>
      {isShown && <Logger/>} */}
      <Data/>
    </div>
  );
};

export default App;