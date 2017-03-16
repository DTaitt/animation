function Move () {

	setInterval(blue, 2000);
	setInterval(yellow, 1000);
	setInterval(red, 500);
	setInterval(green, 400);

	function blue () {
		var blue = $("#blue");
		var posX = 0;
		var posY = 0;
		var id = setInterval(frame, 10);
		function frame () {
			if (posX === 525) {
				clearInterval(id);
				$("#outer").css("background", "blue")
			} else {
				posX ++;
				posY ++;
				blue.css("left", posX + "px")
				blue.css("top", posY + "px")
			}
		}
	}
	function yellow () {
		var yellow = $("#yellow");
		var posX = 525;
		var posY = 525;
		var id = setInterval(frame, 20);
		function frame () {
			if (posX === 0) {
				clearInterval(id);
				$("#outer").css("background", "yellow")
			} else {
				posX --;
				posY --;
				yellow.css("left", posX + "px")
				yellow.css("top", posY + "px")
			}
		}
	}
	function red () {
		var red = $("#red");
		var posX = 0;
		var posY = 525;
		var id = setInterval(frame, 30);
		function frame () {
			if (posX === 525) {
				clearInterval(id);
				$("#outer").css("background", "red")
			} else {
				posX ++;
				posY --;
				red.css("left", posX + "px")
				red.css("top", posY + "px")
			}
		}
	}
	function green () {
		var green = $("#green");
		var posX = 525;
		var posY = 0;
		var id = setInterval(frame, 40);
		function frame () {
			if (posX === 0) {
				clearInterval(id);
				$("#outer").css("background", "green")
			} else {
				posX --;
				posY ++;
				green.css("left", posX + "px")
				green.css("top", posY + "px")
			}
		}
	}
	blue()
	yellow()
	red()
	green()
}