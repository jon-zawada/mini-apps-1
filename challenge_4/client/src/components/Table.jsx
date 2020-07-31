import React from 'react';
import Row from './Row.jsx';

const Table = ({board, playFunc}) => (
  <table className="table">
    <tbody>
    {board.map((row, index) => (
      <Row row={row} rowId={index} board={board} playFunc={playFunc}/>
    ))}
    </tbody>
  </table>
);

export default Table;