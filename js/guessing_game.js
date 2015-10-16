var guess;
var diff;
var answer = Math.round(Math.random() * 100);
var highlow = "";
var remaining = 5;
var guesses = [];
var feedbackText = "";

$('#guess').keyup(function(event){    
    if(event.keyCode==13){
       $('#submit').trigger('click');
    }
});

$('#submit').on('click', function(){
	guess = +$('#guess').val();
	
	if (!(guess > 0 && guess <= 100)){
		$('#feedback').find('h3').text("invalid input, try again");	
	} 
	else if (guesses.indexOf(guess) > 0){
		$('#feedback').find('h3').text("you've already guessed " + guess);
	} 
	else{
	
	remaining--;
	guesses.push(guess);
	$('#guess').val("");
	diff = Math.abs(guess - answer);

	if (guess > answer) {
		highlow = " lower";
	} else {highlow = " higher";}

	if (diff > 0 && remaining == 0){
		$('.wrapper').fadeTo('slow', 0.3, function(){
		$(this).css('background-image', 'url(https://media.giphy.com/media/srNYANrTyYeFW/giphy.gif)');
		}).fadeTo('slow', 1);	
		feedbackText = "GAME OVER";
	}
	else if (diff == 0){
		$('.wrapper').fadeTo('slow', 0.3, function(){
		$(this).css('background-image', 'url(http://media.tumblr.com/tumblr_m7fae47wvT1ro2d43.gif)');
		}).fadeTo('slow', 1);	
		feedbackText = "YOU GOT IT, BABY";
	}
	else if (diff < 10) {
		$('.wrapper').fadeTo('slow', 0.3, function(){
		$(this).css('background-image', 'url(http://tinyurl.com/qfmo396)');	
		}).fadeTo('slow', 1);
		feedbackText = "HOT HOT HOT!! Just a little bit" + highlow;
	}
	else if (diff < 20) {
		$('.wrapper').fadeTo('slow', 0.3, function(){
		$(this).css('background-image', 'url(https://media.giphy.com/media/CiJ470KaadzFe/giphy.gif)');	
		}).fadeTo('slow', 1);
		feedbackText = "It's getting toasty. Guess" + highlow;
	}
	else if (diff < 30) {
		$('.wrapper').fadeTo('slow', 0.3, function(){
		$(this).css('background-image', 'url(http://www.thedigitaldistrict.org/wp-content/uploads/2015/02/fox-jumping-snow.gif)');
		}).fadeTo('slow', 1);
		feedbackText = "Brrr cold, cold, cold. Guess" + highlow;
	}
	else {
		$('.wrapper').fadeTo('slow', 0.3, function(){
		$(this).css('background-image', 'url(http://tinyurl.com/p2mlxms)');
		}).fadeTo('slow', 1);
		feedbackText = "Ice cold. Guess" + highlow;
	}

	$('#remaining').find('h2').text("Guesses remaining: " + remaining); 
	$('#remaining').find('h2').next().text("Your guesses: " + guesses.join(", ")); 
	$('#feedback').find('h3').html(feedbackText);

}
});

$('#hint').on('click', function(){
	alert(answer);
});

$('#reset').on('click', function(){
	location.reload(true);
});



