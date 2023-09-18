import React from 'react';
// import GetData from './components/GetData';
import NewGetData from './components/NewGetData';
// import Counter from './components/Counter';
// import NewCounter from './components/NewCounter';
// import ComA from './components/ComA';
// import Data from './components/Data';
// import Logger from './components/Logger';

// export const NameContext = React.createContext();
// export const AgeContext = React.createContext();

const App = () => {

  // const [isShown , setIsShown] = useState(true);
  // const [name , setName] = useState("Sarok")

  return (
    <div>
      {/* <button onClick={()=> setIsShown(false)}>Delete</button>
      {isShown && <Logger/>} */}
      {/* <Data/> */}
      
      {/* <NameContext.Provider value={name}>
        <AgeContext.Provider value={16}>
        <ComA name={name} />
        </AgeContext.Provider>
      </NameContext.Provider> */}

      {/* <Counter /> */}
      {/* <NewCounter /> */}

      {/* <GetData /> */}
      <NewGetData />
    </div>
  );
};

export default App;