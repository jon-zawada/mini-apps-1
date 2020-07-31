import React from 'react';
import Box from './Box.jsx';

const Row = ({row, rowId, board, playFunc}) => (
  <tr className="row">
    {row.map((box, index) => (
      <Box box={box} rowId={rowId} colId={index} board={board} playFunc={playFunc}/>
    ))}
  </tr>
);

export default Row;