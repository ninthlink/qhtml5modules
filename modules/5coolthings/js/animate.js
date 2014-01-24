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

	// #1 "talking"
	$('#talking').each(function() {
		$(this).waypoint(function() {
			$(this).find('h3').fadeIn(500, function() {
				$('#talking .graphic-position').fadeIn(500, function() {
					$('#talking h3').children('.thick, sup').show(500);
					$('#talking .phone').addClass('chat');
				});
			});
		}).find('.graphic-position, h3, h3 .thick, h3 sup').hide();
	});
	
	// #2 battery charge
	$('#charge').waypoint(function() {
		$(this).find('h3').fadeIn(500, function() {
			$('#charge .graphic-position').fadeIn(500, function() {
				$('#charge h3').children().show(500);
				$('#charge .battery').addClass('charging');
			});
		});
	}).find('.graphic-position, h3, h3 > span').hide();
	
	// #3 satellite signal
	var satellite = $('#satellites .satellite');
	var satellitesignals;
	var signalcount = 0;
	var satellitesignal = function() {
		var sdelay = 200;
		signalcount++;
		if ( signalcount > 5 ) {
			signalcount = 0;
		}
		satellite.attr('class', 'satellite slidedown s'+ signalcount);
		
		clearTimeout(satellitesignals);
		satellitesignals = setTimeout(satellitesignal, sdelay);
	};
	$('#satellites').waypoint(function() {
		$(this).find('h3').fadeIn(500, function() {
			clearTimeout(satellitesignals);
			satellite.addClass('slidedown');
			satellitesignals = setTimeout(satellitesignal, 800);
		});
	}).find('h3').hide();
	
	// #4 cool :: snow fall
	$('#cool').waypoint(function() {
		$(this).find('.snow').addClass('fall');
		$(this).find('h3').fadeIn(1000, function() {
			$(this).children('.thick, sup').fadeIn(500);
		});
	}).find('h3').hide().children('.thick,sup').hide();
	
	// #5 high performance :: text & phone slide
	$('#high-performance').waypoint(function() {
		$(this).find('.phone').addClass('meter');
		$(this).find('h3').fadeIn(500, function() {
			$(this).children('.l2').fadeIn(1000);
		});
	}).find('h3').hide().children('.l2').hide();
	
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