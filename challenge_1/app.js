var boxes = document.getElementsByTagName('th');
console.log(boxes);
for(var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function(){console.log('X')})
}
console.log('hello from app.js');