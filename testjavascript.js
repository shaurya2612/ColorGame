var numSquares=6;
var colors= generateRandomColors(numSquares);
var pickedColor=pickColor();
var colorDisplay= document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.background="steelblue";
	easyBtn.style.color="white";
	easyBtn.style.background="steelblue";
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
	}
	h1.style.background="steelblue";
	hardBtn.style.color="white";
	hardBtn.style.background="steelblue";
});

for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		if(this.style.background===	pickedColor){
				messageDisplay.textContent="Correct!";
				changeColors(pickedColor);
				h1.style.background=pickedColor;
				reset.textContent="Play Again?";
			}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again!";
		}
	});
}

function changeColors(color){
	for(var j=0;j<squares.length;j++){
				squares[j].style.background=color;
	}
}

function pickColor(){
	var index=Math.floor(Math.random()*colors.length);
	return colors[index];
} 

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")"
}

reset.addEventListener("click",function(){
	reset.style.textContent="New Colors";
	colors=generateRandomColors(numSquares);
	colorDisplay.textContent=pickedColor;
	pickedColor=pickColor();
		for(var i=0;i<squares.length;i++)
		{
		squares[i].style.background=colors[i];
		}
	h1.style.background="steelblue";
});