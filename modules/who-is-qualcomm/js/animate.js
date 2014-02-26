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
	var qwh, qww, offsetDefault = '30%';//'bottom-in-view';
	// scale full bg img slides?
	$('.bg-img').each(function() {
		$(this).data('og-height', $(this).height());
	});
	$(window).bind('resize.qmod', function() {
		qwh= $(this).height();
		qww = $(this).width();
		$('.bg-img').each(function() {
			var ogh = $(this).data('og-height');
			var bgh = $(this).data('bg-height');
			$(this).height(function( index, height ) {
				if ( $(this).hasClass('max-height') ) return qwh;
				
				var nh = Math.round(qww * bgh / 1280);
				return ( nh > ogh ) ? nh : ogh;
			});
		});
		//offsetDefault = qww < 600 ? '30%' : 'bottom-in-view';
	}).trigger('resize.qmod');
	
	// qualcommreveal
	$('.content-container').qualcommreveal({
      targets: '.block',
	  scrollspeed: 0,
    });
	$.subscribe('qualcommreveal/reveal-finish', function(event, elem, counter) {
		/*
		console.log('qualcommreveal/reveal-finish : # ');
		console.log(counter);
		console.log('++');
		console.log(elem);
		*/
		elem.trigger('qinview');
	});
	
	/* waypoints and other such mayhem */
	var onoffsets = new Array();
	$('.comeon').each(function(i) {
		if ( $(this).is('[data-waypoint-offset]') == false ) {
			$(this).data('waypoint-offset', offsetDefault);
		}
		var ofs = $(this).data('waypoint-offset');
		onoffsets[i] = ofs;
		$(this).on('qinview', function() {
			$(this).waypoint(function() {
				$(this).addClass('onn');
				//console.log('# ' + i +' '+ $(this).attr('id') + ' onn?? ' + onoffsets[i] );
			}, {
				offset: onoffsets[i]
			});
		}).on('inview', function(event, isInView, visiblePartX, visiblePartY) {
			//$(this).waypoint('destroy');
			if(isInView) {
				//$(this).waypoint('enable');
				//console.log('block #'+ i + ' ' + $(this).attr('id') + ' IS inview? visiblePartY = '+ visiblePartY);
			} else {
				$(this).trigger('reset');//.removeClass('onn')
				//console.log('block #'+ i + ' ' + $(this).attr('id') + ' IS NOT inview? visiblePartY = '+ visiblePartY);
			}
		});
	});
	
	// #1 intro
	$('#intro li').each(function(i) {
		$(this).addClass('fadein l'+ i); //sit
	});
	
	// #3 whatname video stuff
	/*
	var bready = function(player_id) {
		var bplayer = $f(player_id);
		
		$('#whatname img').unbind('click').click(function() {
			jQuery('#what-video').show().siblings().hide();
			bplayer.api('play');
		});
		
		bplayer.addEvent('finish', function(data) {
			jQuery('#what-video').hide().siblings().show();
		});
	};
	$f(document.getElementById('whatvid')).addEvent('ready', bready);
	*/
	// pause video when off screen
	$('#whatname').bind('reset', function() {
		$f('whatvid').api('pause');
	});
	
	// #10 inventing the future
	$('#future').bind('qinview', function() {
		$(this).find('.imageblock').waypoint(function() {
			$(this).find('img').fadeIn(2000);
		}, {
			offset: '80%'
		}).find('img').fadeOut();
	});
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
	$('#driving').swipe({
		swipeRight: function( event, direction, distance, duration, fingerCount) {
			$(this).find('a.prev').click();
		},
		swipeLeft: function( event, direction, distance, duration, fingerCount) {
			$(this).find('a.next').click();
		}
	});
	
	// #13 billion
	$('#billion').bind({
		'count': function() {
			$(this).find('.number').stop().html('&nbsp;');
			var billitime = $(this).data('billitime');
			clearTimeout(billitime);
			billitime = setTimeout(function() {
				var bn = jQuery('#billion .number');
				var bt = bn.data('billitime');
				clearTimeout(bt);
				bn.css('left',0).animate({
					left: 25000000000
				}, {
					duration: 1200, 
					step: function( c ) {
						var n = Math.round(c);
						$(this).html(commaSeparateNumber(n));
					}
				});
			}, 500);
			$(this).data('billitime', billitime);
		},
		'reset': function() {
			$(this).trigger('count');
		},
		'qinview': function() {
			$(this).waypoint(function() {
				$(this).addClass('comeon onn').trigger('reset');
			}, {
				offset: 'bottom-in-view'
			});
		}
	});
	// #14 applying
	$('#applying').find('h2, p, .circles li').addClass('fadein');
	
	// #16 digital 18 tap 19 explore
	
	// sliders : "28 years" + the other one
	$('.slider').each(function() {
		var slides = $(this).children('ul').addClass('slides');
		var count = slides.children().size();
		var dots = '<ul class="dots">';
		for ( var i = 0; i < count; i++ ) {
			dots += '<li />';
		}
		dots += '</ul>';
		$(this).append(dots);
		
		var slidefade = $(this).data('slide-fade');
		var slideduration = $(this).data('slide-duration');
		
		$(this).children('.dots').children().each(function(i) {
			$(this).click(function() {
				var slider = $(this).parents('.slider');
				slider.trigger('stopcycle');
				$(this).addClass('onn').siblings('.onn').removeClass();
				var slides = $(this).parent().siblings('.slides').children();
				slides.filter('.onn').stop().fadeOut(slidefade, function() { $(this).removeClass('onn'); slides.eq(i).stop().fadeIn(slidefade, function() { $(this).addClass('onn'); }); });
				
				slider.trigger('timereset');
			});
		});
		$(this).bind({
			'nextslide': function() {
				var onn = $(this).children('.dots').children('li.onn');
				var nex = onn.next();
				if ( nex.size() == 0 ) nex = onn.siblings('li:first-child');
				nex.click();
			},
			'prevslide': function() {
				var onn = $(this).children('.dots').children('li.onn');
				var nex = onn.prev();
				if ( nex.size() == 0 ) nex = onn.siblings('li:last');
				nex.click();
			},
			'timereset': function() {
				var thisslider = $(this);
				var timo = setTimeout( function() { thisslider.trigger('nextslide'); }, slideduration);
				$(this).data('qslidetimer', timo);
			},
			'stopcycle': function() {
				var timo = $(this).data('qslidetimer');
				clearTimeout(timo);
			},
			'slidereset': function() {
				//if ( $(this).children('.slides').children('li:first-child').hasClass('onn') == false ) {
					$(this).children('.slides').children().hide().removeClass().filter(':last-child').addClass('onn')
						.parent().next().children('li:first-child').click();
				/*} else {
					$(this).trigger('timereset');
				}*/
			}
		});/*.on('inview', function( event, isInView, visiblePartX, visiblePartY ) {
			if ( isInView ) {
				//console.log('inview ' + $(this).parents('.block').attr('id'));
				$(this).trigger('slidereset');
			} else {
				//console.log('OUT of inview ' + $(this).parents('.block').attr('id'));
				$(this).trigger('stopcycle');
			}
		});
		*/
		$(this).parents('.block').swipe({
			swipeRight: function( event, direction, distance, duration, fingerCount) {
				$(this).find('.slider').trigger('prevslide');
			},
			swipeLeft: function( event, direction, distance, duration, fingerCount) {
				$(this).find('.slider').trigger('nextslide');
			}
		}).bind('qinview', function() {
			//console.log('slider parent #' + $(this).attr('id') + ' QINVIEW');
			$(this).find('.slider').trigger('slidereset');
		});
	});
 
	  // Callback function references the event target and adds the 'swipeleft' class to it
	  function swipeleftHandler( event ){
	  alert('swipe left');
		$( event.target ).removeClass( "swiperight" ).addClass( "swipeleft" );
	  }
	  function swiperightHandler( event ) {
		$( event.target ).removeClass( "swipeleft" ).addClass( "swiperight" );
	  }
	
	$('.block').append('<a href="#" class="btn-reset"><i></i></a>').children('.btn-reset').click(function() {
		var bpid = '#' + $(this).parent().removeClass('onn').attr('id');
		//console.log('reset '+ bpid);
		
		
		setTimeout(function() {
		$(bpid).addClass('onn').trigger('reset');
		}, 0);
		
		return false;
	});
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
	// fun with ecos
	$('.eco:not(.bg)').click(function() {
		$(this).fadeOut(100,function() { $(this).fadeIn(1000) });
	});
});