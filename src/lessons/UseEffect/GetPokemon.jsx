import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetPokemon = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    async function getDeta() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getDeta();
  }, [num]);

  return (
    <>
      <h1>
        You have choosed <span style={{ color: 'red' }}>{num} </span> value
      </h1>
      <h1>
        My name is <span style={{ color: 'red' }}>{name} </span>
      </h1>
      <h1>
        I have <span style={{ color: 'red' }}> {moves} </span> moves
      </h1>
      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="25">25</option>
        <option value="10">10</option>
      </select>
    </>
  );
};
export default GetPokemon;
