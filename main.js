canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width = "100";
car_height = "90";
car_x = "10";
car_y = "10";
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y>=0){
		car_y= car_y-10 ;
		console.log("When up arrow is pressed,x="+car_x+",y="+car_y);
		uploadbackground();
		uploadgreencar();
	}
}

function down()
{
	if(car_y>=500){
		car_y= car_y+10 ;
		console.log("When down arrow is pressed,x="+car_x+",y="+car_y);
		uploadbackground();
		uploadgreencar();
	}
}

function left()
{
	if(car_y>=0){
		car_y= car_y-10 ;
		console.log("When left arrow is pressed,x="+car_x+",y="+car_y);
		uploadbackground();
		uploadgreencar();
	}
}

function right()
{
	if(car_y>=700){
		car_y= car_y+10 ;
		console.log("When right arrow is pressed,x="+car_x+",y="+car_y);
		uploadbackground();
		uploadgreencar();
	}
}
