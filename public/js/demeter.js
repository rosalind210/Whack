<script>

function getHealthStatus(shower, hrsSleep, minsExercise) {
	// start at 0 points
	var health = 0;

	// you get two points for showering
	// shower should be boolean value
	if (shower) {
		health = health +2;
	}

	// one point for exercising more than 30 min
	if (minsExercise > 30) {
		health = health + 1;
	}

	// one point for sleeping more than 6 hours
	if (hrsSleep > 6) {
		health = health +1;
	}
	
	return health;

</script>
