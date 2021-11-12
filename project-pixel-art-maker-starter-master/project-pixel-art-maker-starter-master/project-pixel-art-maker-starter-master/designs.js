// Select color input
var color = document.getElementById('colorPicker');
// Select size input
var sizePicker = document.getElementById('sizePicker');
var canvas = document.getElementById('pixelCanvas');
var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid(height.value, width.value);
});

function makeGrid(x, y) {
  canvas.innerHTML = '';
  for (var i=1; i<=x; i++){
    var row = canvas.insertRow(i-1);
    for (var j=1; j<=y; j++){
      var column = row.insertCell(j-1);
      column.addEventListener('click',function(event){
        event.target.style.backgroundColor=color.value;
      });
    };
  };

// Your code goes here!

}
