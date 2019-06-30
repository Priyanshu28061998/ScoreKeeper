var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2");
var resetbutton=document.querySelector("#reset");
var p1score=0;
var p2score=0;
var p1display=document.getElementById("p1display");
var p2display=document.getElementById("p2display");
var target=5;
var gameover=false;
var numInput=document.querySelector("input");
var winnerScoreDisplay=document.querySelector("#target");
var target=5;
p1button.addEventListener("click",function(){
	if(!gameover)
	{
		p1score++;
	if(p1score==target)
	{
       gameover=true;
       p1display.classList.add("winner");
	}
	p1display.textContent=p1score;
	}
});

p2button.addEventListener("click",function(){
	if(!gameover)
	{
		p2score++;
	if(p2score==target)
	{
       gameover=true;
       p2display.classList.add("winner");
	}
	p2display.textContent=p2score;
	}
});


resetbutton.addEventListener("click",function(){
	reset();
})

 function reset()
{
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	winnerScoreDisplay.textContent=5;
	numInput.value=5;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover=false;
	target=5;
}

numInput.addEventListener("change",function(){
  winnerScoreDisplay.textContent=numInput.value;
  target=(Number)numInput.value;
   p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
		p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover=false;
})