import React, { useContext } from 'react';
import ConC from './ConC';
import { FirstName, LastName } from '../ContextAPI';

const ConB = () => {
  const fname = useContext(FirstName);
  const Lname = useContext(LastName);

  return (
    <h1>
      My Name is {fname} {Lname}
    </h1>
  );

  // return <ConC />;
};

export default ConB;
