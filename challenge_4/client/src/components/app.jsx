import React from 'react';
import Table from './Table.jsx';
import PlayerSelect from './PlayerSelect.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentPlay: 0,
      board: [[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]]
    }
    this.startingColor = this.startingColor.bind(this);
    this.play = this.play.bind(this);
  }

  startingColor(event){
    event.preventDefault();
    let num = event.target.innerHTML === 'Red' ? 1 : 2;
    this.setState({currentPlay: num});
  }

  play(event, row, col){
    let play = this.state.currentPlay;
    let board = JSON.parse(JSON.stringify(this.state.board));
    const colPlay = (colId) => {
      for(let i = board.length - 1; i >= 0; i--) {
        if(board[i][colId] === 0) {
          board[i][colId] = play;
          return;
        }
      }
    }
    colPlay(col);
    this.setState({board: board});
    if(this.state.currentPlay === 1) {
      this.setState({currentPlay: 2});
    } else {
      this.setState({currentPlay: 1});
    }
  }

  render(){
    return(
      <div>
        {this.state.currentPlay ? null : <PlayerSelect startingColor={this.startingColor}/>}
        {this.state.currentPlay ? <Table board={this.state.board} playFunc={this.play}/> : null}
        {/* <Table board={this.state.board} playFunc={this.play}/> */}
      </div>
    )
  }
}


export default App;