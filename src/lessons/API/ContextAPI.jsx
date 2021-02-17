import React, { createContext } from 'react';
import ConA from './demo/ConA';

const FirstName = createContext();
const LastName = createContext();
const ContextAPI = () => {
  return (
    <>
      <FirstName.Provider value={'Raju'}>
        <LastName.Provider value={'Tamang'}>
          <ConA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default ContextAPI;
export { FirstName, LastName };
