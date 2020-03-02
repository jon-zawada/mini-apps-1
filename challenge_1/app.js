// var boxes = document.getElementsByClassName('box');
// console.log(boxes);

// var player1 = 'X';
// var player2 = 'O'

//boolean to determin what plays next
var playX = false;

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
    //eventually after every play() we need to check for a winner
    //if board is full and no winner return a tie
  })
}

//function to check for winner

console.log('hello from app.js');