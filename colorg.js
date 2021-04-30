var head = document.querySelector("h1");
var colors = [];
var pickedColor = "rgb(22, 44, 56)";
var square = document.querySelectorAll(".square");
var span = document.querySelector("span");
var num = 6;
var statement = document.querySelector("#statement");
var reset = document.querySelector("#reset");
var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");
var level = document.querySelectorAll(".level");
refresh();
for(var i=0; i<level.length; i++)
{
	level[i].addEventListener("click",function(){
		easy.classList.remove("selected");
		hard.classList.remove("selected");
		this.classList.add("selected");
		
        refresh();
	})
}


for( var i=0; i<square.length; i++)
{
	square[i].addEventListener("click", function()
	{
	   if(this.style.background===pickedColor)
	   {
		    sameAll();
		    statement.textContent="correct!";
		    reset.textContent= "play again?";
		    head.style.background = pickedColor;
	   }	
	   else
	   {
		    this.style.background = "#232323";
		    statement.textContent = "Try again";
	   }
    })
}


//on pressing reset button
reset.addEventListener("click", function(){
	refresh();
	if(this.textContent==="play again?")
	{
       this.textContent="New colors";
       statement.textContent="";
	}
})


function refresh(){
	statement.textContent = "";
	if(easy.classList.contains("selected")){
	       num=3;
        }
        else{
	       num=6;
        }
	colors = [];
	for(var i=0; i<num; i++)
     {//making colors according to num
       
	   colors.push(generateColor());
     }
    for(var i=0; i<square.length; i++)
    {
    	if(colors[i])
    	  {
	      //adding colors to squares
	       square[i].style.display = "block";
	       square[i].style.background = colors[i];
          }
        else{
           square[i].style.display = "none";
        }
    }
    pickedColor = colors[Math.floor(Math.random() * num)]; 
    span.textContent = pickedColor;
    head.style.background = "rgb(47, 79, 79)";
}
function generateColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}

function sameAll(){
	for(var i=0; i<square.length; i++)
		square[i].style.background = pickedColor;
}

