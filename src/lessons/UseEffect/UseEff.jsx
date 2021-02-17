import React, { useState, useEffect } from 'react';

const UseEff = () => {
  const [num, setnum] = useState(0);
  const [nums, setnums] = useState(0);

  useEffect(() => {
    alert('I am Clicked');
    console.log('clicked');
  }, [num]);

  //   challange
  useEffect(() => {
    document.title = `You clicked me ${nums} times`;
  }, [nums]);

  return (
    <>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        Click Me ! {num}
      </button>
      <button
        onClick={() => {
          setnums(nums + 1);
        }}
      >
        Click to change title in browser {nums}
      </button>
    </>
  );
};

export default UseEff;
