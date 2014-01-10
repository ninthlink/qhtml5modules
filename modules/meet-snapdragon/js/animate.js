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

	// #2 "Loading" :: fade in h3 and rotator
	$('#loading').waypoint(function(){ 
		$('#loading .text-position h3').fadeIn( 600, function() {
			$('#loading .graphic-position').fadeIn( 400 );
		} );
	}, {
		offset: offsetDefault
	});

	// #3 "Difference" :: parallax <li> text; fade in graphic
	$('#difference').waypoint(function(){ 
		$('#difference #parallax1').animate({
			top: "0px",
			opacity: "1",
		}, 400 );
		$('#difference #parallax2').animate({
			top: "50px",
			opacity: "1",
		}, 500 );
		$('#difference #parallax3').animate({
			top: "100px",
			opacity: "1",
		}, 600 );
	}, {
		offset: offsetDefault
	});

	$('#difference').waypoint(function(){
		$('#difference .graphic-position').animate({
			right: "10%",
			opacity: "1",
		}, 800 );
	}, {
		offset: offsetDefault
	});

	// #4 "Earth" :: flicker in Earth image, then rings around it
	$('#earth').waypoint(function(){
		$('#earth .earth').animate({
			opacity: ".5",
		}, 500, 'easeInElastic', function() {
			$('#earth .earth').animate({
				opacity: "1",
			}, 1000, 'easeInElastic');
		});
		$('#earth .ring').delay(1000).each(function(e){
			$(this).delay(250*e).fadeTo( 500, 1, 'easeInElastic');
		});
	}, {
		offset: offsetDefault
	});

	// #5 "Every Phone" :: load icons one-by-one
	$('#every-phone').waypoint(function(){
		$('#every-phone .text-position').fadeTo( 400, 1, 'easeInOutSine' );
	}, { offset: 200 });
	$('#every-phone').waypoint(function(){
		$('#every-phone .graphic-position .three-row').each(function(e){
			$(this).delay(300*e).fadeTo( 300, 1, 'easeInOutElastic' );
		});
	}, {
		offset: offsetDefault
	});

	// #6 "Processes" :: loadicons one-by one, then slide in phone when scroll low enough
	$('#processes').waypoint(function(){
		$('#processes .graphic-position .four-row').each(function(e){
			$(this).delay(250*e).fadeTo( 200, 1, 'easeInExpo');
		});
	}, {
		offset: offsetDefault
	});

	$('#processes').waypoint(function(){
		$('#phone-with-chip').animate({
			top: "0px",
		}, 800, 'easeInOutSine' );
	}, {
		offset: function() {
			return -( $(this).height() - 750 );
		}
	});

	// #7 "Delivers" :: fade in graphic, then slide in <li> text from behind graphic
	$('#delivers').waypoint(function(){
		$('#delivers .graphic-position ul').delay(500).animate({
			left: "0px",
			opacity: "1"
		}, 900, 'easeInOutBounce' );
	}, {
		offset: offsetDefault
	});

	// #8 "Mobile Power" ::

	// #9 "Single Chip" :: slide phone to side (large screen) or bottom (small screen), then pop in icons and fade in text
	$('#single-chip').waypoint(function(){
		if ( $('#single-chip .inner').width() >= 960 ) {
			$('#single-chip .graphic-position').animate({
				right: "68px",
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

	// #10 "Multiple Taks" :: slide chips across frame revealing red image, one at a time
	var startr = $('#multiple-tasks #red-scroll').css('left');
	var startg = $('#multiple-tasks #grey-scroll').css('left');
	var slide = function(count) {
		count = count - 1;
		$('#frame').css('cursor', 'auto');
		$('#red-scroll').delay(500).animate({
			left: "-=277px",
		}, 500, function() {
			$('#red-scroll').delay(1000).animate({
				left: "-=277px",
			}, 500, function() {
				$('#red-scroll').delay(1000).animate({
					left: "-=277px",
				}, 500, function() {
					$('#red-scroll').delay(1000).animate({
						left: "-=277px",
					}, 500, function() {
						$('#red-scroll').delay(1000).animate({
							left: startr,
						}, 500 );
					});
				});
			});
		});
		$('#grey-scroll').delay(500).animate({
			left: "-=277px",
		}, 500, function() {
			$('#grey-scroll').delay(1000).animate({
				left: "-=277px",
			}, 500, function() {
				$('#grey-scroll').delay(1000).animate({
					left: "-=277px",
				}, 500, function() {
					$('#grey-scroll').delay(1000).animate({
						left: "-=277px",
					}, 500, function() {
						$('#grey-scroll').delay(1000).animate({
							left: startg,
						}, 500, function() {
							if ( count > 0 ) {
								slide(count);
							}
							$('#frame').css('cursor', 'pointer');
						});
					});
				});
			});
		});
	};

	$('#multiple-tasks').waypoint(function(){
		if ( $('#multiple-tasks #grey-scroll').css('left') == "585px" ) {
			slide(1);
		}
	}, { 
		offset: offsetDefault,
		triggerOnce: true,
	});

	$('#frame').click(function(){
		if ( $('#multiple-tasks #grey-scroll').css('left') == "585px" ) {
			slide(1);
		};
	});

	// #11 "CPU Performance" ::

	// #12 "GPU Performance" ::

	// #13 "Modem Performance" :: slide in side text from outside frame (arrows rotate via CSS)
	$('#modem-performance').waypoint(function(){
		$('#modem-performance .graphic-position .left p').animate({
			"left": "0px",
			opacity: 1, 
		}, 1000, 'easeInOutBack' );
		$('#modem-performance .graphic-position .right p').animate({
			"right": "0px",
			opacity: 1, 
		}, 1000, 'easeInOutBack' );
	}, {
		offset: offsetDefault
	});

	// #14 "Thermal Performance" :: fade in image
	$('#thermal-performance').waypoint(function(){
		$('#thermal-performance .graphic-position').animate({
			opacity: "1",
		}, 1200, 'easeInOutBounce' );
	}, {
		offset: offsetDefault
	});

	// #15 "Features" :: text slides in looped "n" times
	$('#features').waypoint(function(){
		var slidein = function(count) {
			var s = "600px";
			count = count - 1;
			$('#connectivity').delay(800).animate({
				left: "0px",
				opacity: "1",
			}, 1500, function(){
				$('#connectivity').fadeTo(800, 0).delay(800).css('left', s);
				$('#performance').delay(500).animate({
					left: "0px",
					opacity: "1",
				}, 1500, function(){
					$('#performance').fadeTo(800, 0).delay(800).css('left', s);
					$('#longer-battery').delay(500).animate({
						left: "0px",
						opacity: "1",
					}, 1500, function(){
						$('#longer-battery').fadeTo(800, 0).delay(800).css('left', s);
						$('#speed').delay(500).animate({
							left: "0px",
							opacity: "1",
						}, 1500, function(){
							$('#speed').fadeTo(800, 0).delay(800).css('left', s);
							if ( count > 0 ) {
								slidein(count);
							};
						});
					});
				});
			});
		};
		slidein(100);
	}, {
		offset: '50%',
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