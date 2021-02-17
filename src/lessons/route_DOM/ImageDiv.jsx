import React from 'react';

const ImageDiv = (props) => {
  const img = `https://source.unsplash.com/600x400/?${props.name}`;
  return (
    <>
      <img src={img} alt="randomImage" />
    </>
  );
};

export default ImageDiv;
