import React from 'react';

const PlayerSelect = ({startingColor}) => (
  <div className="playerSelect"> Choose a color to go first
    <div>
      <button className="playerButtons" onClick={startingColor}>Red</button>
        <span id="spacing"></span>
      <button className="playerButtons" onClick={startingColor}>Yellow</button>
    </div>
  </div>
);

export default PlayerSelect;