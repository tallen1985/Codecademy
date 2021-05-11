import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = ({objArray}) => {
  
  return (
    <div>
      {objArray.map( (value, index) => <Tile value={value} key={index}/>)}
    </div>
  );
};
