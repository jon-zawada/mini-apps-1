import React from 'react';

// const Box = (props) => (
//   <th className="box"></th>
// );

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let cStr = 'whiteBox';
    if(this.props.board[this.props.rowId][this.props.colId] === 1) {
      cStr = 'redBox';
    } else if(this.props.board[this.props.rowId][this.props.colId] === 2) {
      cStr = 'yellowBox';
    }
    return (
      <th className={cStr} onClick={(e) => this.props.playFunc(e, this.props.rowId, this.props.colId)}></th>
    )
  }
}

export default Box;