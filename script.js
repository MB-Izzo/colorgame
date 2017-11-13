var numberOfSquares = 6;
var colors = generateRandomColorArr(numberOfSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColorArr(numberOfSquares);
	colorToFind = pickRandomColor();
	colorDisplay.textContent = colorToFind;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColorArr(numberOfSquares);
	colorToFind = pickRandomColor();
	colorDisplay.textContent = colorToFind;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

// RESET LOGIC
var resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function(){
	// generate all new colors, pick a random color from array.
	colors = generateRandomColorArr(numberOfSquares);
	colorToFind = pickRandomColor();
	// change colors of squares
	colorDisplay.textContent = colorToFind;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	resetBtn.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

})

var colorToFind = pickRandomColor();
colorDisplay.textContent = colorToFind;

for (var i = 0; i < squares.length; i++)
{
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// events on click
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === colorToFind)
		{
			// Win!
			messageDisplay.textContent = "Correct!"
			changeAllSquaresColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetBtn.textContent = "Play again!"
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!"
		}
	})
}

function changeAllSquaresColors(color){
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickRandomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColorArr(n){
	// make array, add n random colors, return array.
	var arr = [];
	for (var i = 0; i < n; i++){
		// get random color and push into array.
		arr.push(generateRandomColor());
	}

	return arr;
}

function generateRandomColor(){
	// pick a red (0 to 255), same for green/blue.
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
