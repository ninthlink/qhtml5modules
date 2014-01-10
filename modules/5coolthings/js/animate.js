/* *******************************
	Javascript Animations
******************************* */

$(document).ready(function() {

	// Loading rotator
	var opts = {
		lines: 12, // The number of lines to draw
		length: 44, // The length of each line
		width: 12, // The line thickness
		radius: 46, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#000', // #rgb or #rrggbb or array of colors
		speed: 0.15, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: 'auto', // Top position relative to parent in px
		left: 'auto' // Left position relative to parent in px
	};
	var target = document.getElementById('spinner');
	var spinner = new Spinner(opts).spin(target);

	// default animation offset for each section (variance from top of <section>)
	var offsetDefault = 0;

	// all <h2> will fade in???
	$('h2').each(function(){
		$(this).addClass('fade-in');
	});

	// #8 "Mobile Power" :: ??

	// #9 "Single Chip" :: slide phone to side (large screen) or bottom (small screen), then pop in icons and fade in text
	$('#single-chip').waypoint(function(){
		if ( $('#single-chip .inner').width() >= 960 ) {
			$('#single-chip .graphic-position').animate({
				left: "68px",
			}, 600, 'easeInOutSine');
		}
		else {
			var h = $('#single-chip').height;
			$('#single-chip').animate({
				height: "+=300px",
			}, 600, 'easeInOutSine');
			$('#single-chip .graphic-position').animate({
				top: "400px",
			}, 600, 'easeInOutSine');	
		}

		$('#single-chip .text-position').fadeTo( 2000, 1, 'easeInOutCubic' );
	
		$('#pop-lines').delay(600).animate({
			width: "76px",
		}, 150, 'easeInOutElastic', function() {
			$('#pop-chip').delay(10).animate({
				width: "101px",
			}, 150, 'easeInOutElastic', function() { 
				$('#pop-power').delay(150).animate({
					width: "53px",
				}, 150, 'easeInOutElastic' );
			});
		});
	}, {
		offset: offsetDefault,
		triggerOnce: true,
	});
	// #16 "Legal" :: No animations in footer area

	// ALL :: slide section to top at specific interval
	$('header').waypoint(function(direction) {
		if ( direction == 'down') {
			$('html, body').animate({
				scrollTop: $(this).waypoint('next').offset().top + 10
			}, 1000);
		}
	}, {
		offset: function() {
			return -( $(this).height() * 0.75 );
		}
	});

	$('section').each(function(){
		if ( $(this).attr('id') != 'legal' ) {
			$(this).waypoint(function(direction) {
				if ( direction == 'down') {
					$('html, body').animate({
        				scrollTop: $(this).waypoint('next').offset().top + 10
					}, 1000);
				}
			}, {
				offset: function() {
					return -( $(this).height() * 0.75 );
				},
				triggerOnce: true
			});
		}
	});

});