/* *******************************
	Javascript Animations
******************************* */
function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
		val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	}
	return val;
}
	
$(document).ready(function() {
	// default animation offset for each section (variance from top of <section>)
	var offsetDefault = 'bottom-in-view';
	// scale full bg img slides?
	$('.bg-img').each(function() {
			$(this).data('og-height', $(this).height());
	});
	$(window).bind('resize.qmod', function() {
		var qwh= $(this).height();
		var qww = $(this).width();
		$('.bg-img').each(function() {
			var ogh = $(this).data('og-height');
			var bgh = $(this).data('bg-height');
			$(this).height(function( index, height ) {
				var nh = Math.round(qww * bgh / 1280);
				return ( nh > ogh ) ? nh : ogh;
			});
		});
	}).trigger('resize.qmod');
	
	/* waypoints and other such mayhem */
	$('#hdr').waypoint(function() {
		$(this).addClass('onn');
	}, {
		offset: 0
	});
	
	$('.comeon:not(#hdr)').waypoint(function() {
		$(this).addClass('onn');
	}, {
		offset: offsetDefault
	});
	
	// #10 inventing the future
	$('#future .imageblock').waypoint(function() {
		$(this).find('img').fadeIn(2000);
	}, {
		offset: '10%'
	}).find('img').fadeOut();
	
	// #12 driving : cycler
	var arrowd = function() {
		$('.arrowd a.next').click();
	};
	var arrowt = setTimeout(arrowd, 2000);
	$('.arrowd a').click(function() {
		clearTimeout(arrowt);
		var onn = $('.arrowd li.onn').css('left',0).removeClass('onn');
		var nex;
		var dir = '-=100%';
		if ( $(this).hasClass('prev') ) {
			dir = '+=100%';
			nex = onn.prev();
			if ( nex.size() < 1 ) nex = $('.arrowd ul li:last-child');
			nex.css('left','-100%');
		} else {
			nex = onn.next();
			if ( nex.size() < 1 ) nex = $('.arrowd ul li:first-child');
			nex.css('left','100%');
		}
		nex.addClass('onn').add(onn).animate({
			left: dir
		}, 1000);
		arrowt = setTimeout(arrowd, 3000);
		
		return false;
	});
	
	// #13 billion
	$('#billion').waypoint(function() {
		$(this).find('.number').css('left',0).animate({
			left: 25000000000
		}, {
			duration: 1200, 
			step: function( c ) {
				var n = Math.round(c);
				$(this).html(commaSeparateNumber(n));
			}
		});
	}, {
		offset: 0
	});
	// #14 applying
	$('#applying').find('h2, p, .circles li').addClass('fadein');
	
	// #16 digital 18 tap 19 explore

/*
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
*/
});