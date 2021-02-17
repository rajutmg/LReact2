import React, { useState } from 'react';
import ImageDiv from './ImageDiv';
const Search = () => {
  const [image, setimage] = useState('');

  const inputEvent = (e) => {
    // console.log();
    setimage(e.target.value);
  };

  return (
    <>
      <div className="searchPage">
        <h1>Unsplash Photoes Search page</h1>
        <input
          type="text"
          placeholder="Type Any Things"
          onChange={inputEvent}
        />
        <br />
        <br />
        {image === '' ? null : <ImageDiv name={image} />}
      </div>
    </>
  );
};

export default Search;
