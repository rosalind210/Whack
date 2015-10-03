

function getHealthStatus(shower, hrsSleep, minsExercise) {
	// start at 0 points
	var health = 0;

	// you get two points for showering
	// shower should be boolean value
	if (shower) {
		health = health + 2;
	}

	// one point for exercising more than 30 min
	if (minsExercise > 30) {
		health = health + 1;
	}

	// one point for sleeping more than 6 hours
	if (hrsSleep > 6) {
		health = health + 1;
	}
	
	// last point for doing all three
	if ((shower) && (minsExercise>30) && (hrsSleep>6)){
		health = health + 1;	
	}
	return health;

function addImage(status){
	var img = document.createElement('img');
	img.src = "../../flowerimg/stage"+status+".png";
	document.body.appendChild(img);
}

// Plugin options and our code
$("#modal_trigger").leanModal({
        top: 100,
        overlay: 0.6,
        closeButton: ".modal_close"
});

$(function () {
    // Calling Login Form
    $("#login_form").click(function () {
        $(".user_login").show();
        return false;
    });
 
    // Calling Register Form
    $("#register_form").click(function () {
    	$(".user_login").hide();
        $(".user_register").show();
        $(".header_title").text('Register');
        return false;
    });
 
    // Going back to Social Forms
    $(".back_btn").click(function () {
        $(".user_login").show();
        $(".user_register").hide();
        $(".header_title").text('Login');
        return false;
    });
 
})

