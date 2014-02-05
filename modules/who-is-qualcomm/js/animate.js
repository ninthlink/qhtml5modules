/* *******************************
	Javascript Animations
******************************* */

$(document).ready(function() {
	// default animation offset for each section (variance from top of <section>)
	var offsetDefault = 0;
	// scale full bg img slides?
	$('.bg-img').each(function() {
		var bgh = $(this).data('bg-height');
		$(this).height(function( index, height ) {
			return ( bgh > height ) ? bgh : height;
		});
	});
	
	// #18 tap + 19 explore
	$('#tap, #explore').waypoint(function() {
		$(this).addClass('onn');
	}, {
		offset: offsetDefault
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
					return -( $(this).height() * 0.9 );
				},
				triggerOnce: true
			});
		}
	});

});