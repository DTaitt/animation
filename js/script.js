function Move () {
	var bb8 = $("#bb8");
	var pos = -210;
	var id = setInterval(frame, 1);
	function frame () {
		if (pos === 900) {
			clearInterval(id);
			$("#container").removeClass("initial_bg").addClass("second_bg")
		} else {
			pos ++;
			bb8.css("left", pos + "px")
		}
	}
}