// var boxes = document.getElementsByClassName('box');
// console.log(boxes);

// var player1 = 'X';
// var player2 = 'O'

//boolean to determin what plays next
var playX = false;
var gameWon = false;

//board storage to eventually run a winner on
var board = [['','',''],['','',''],['','','']];
console.log(board);

//change playX everytime play is called
var play = function(){
  //if not playX
  if(!playX) {
    //change it for the next turn
    playX = true;
    return 'X'
  } else {
    playX = false;
    return 'O'
  }
}

for(var i = 0; i <= 8; i++) {
  var box = document.getElementById(i);
  box.addEventListener('click', function(){
    if(!event.target.innerHTML) {
      (event.target).append(play());
    }
    // console.log(document.getElementById(event.target.id).parentElement.className);
    // console.log(event.target.id);
    board[document.getElementById(event.target.id).parentElement.className][event.target.className] = event.target.innerHTML;
    console.log(board);
    // rowWinner();
    columnWinner();
    //eventually after every play() we need to check for a winner
    //if board is full and no winner return a tie
  })
}

var rowWinner = function(){
  // console.log('hi from row winner')
  for(var i = 0; i < board.length; i++) {
    if(board[i][0] !== '' && board[i][1] !== '' && board[i][2] !== '' &&
      board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][1] === board[i][2]) {
      gameWon = true;
      alert('WE HAVE A WINNER');
    }
  }
}

var columnWinner = function(){
  for(var i = 0; i < board.length; i++) {
    if(board[0][i] !== '' && board[1][i] !== '' && board[2][i] !== ''
      && board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[1][i] === board[2][i]
    ){
      gameWon = true;
      alert('WE HAVE A WINNER');
    }
  }
}
//function to check for winner

console.log('hello from app.js');