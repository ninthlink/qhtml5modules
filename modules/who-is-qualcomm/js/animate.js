/**
 * Javascript Animations & Helpers
**/
$(document).ready(function() {
	// default animation offset for each section (variance from top of <section>)
	var qwh, qww, offsetDefault = '30%';
	// scale full bg img slides
	$('.bg-img').each(function() {
		$(this).data('og-height', $(this).height());
	});
	$(window).bind('resize', function() {
		qwh= $(this).height();
		qww = $(this).width();
		$('.bg-img').each(function() {
			var ogh = $(this).data('og-height');
			var bgh = $(this).data('bg-height');
			$(this).height(function( index, height ) {
				//if ( $(this).hasClass('max-height') ) return qwh;
				
				var nh = Math.round(qww * bgh / 1280);
				if ( $(this).hasClass('max-height') ) {
					if ( nh > qwh ) nh = qwh;
				} else if ( nh > ogh ) {
					nh = ogh;
				}
				return nh;
			});
		});
	}).trigger('resize');
	
	// "qualcommreveal" loader
	$('.content-container').qualcommreveal({
      targets: '.block',
	  scrollspeed: 0,
    });
	$.subscribe('qualcommreveal/reveal-finish', function(event, elem, counter) {
		elem.trigger('qinview');
	});
	
	// waypoints & more mayhem
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
			}, {
				offset: onoffsets[i]
			});
		}).on('inview', function(event, isInView, visiblePartX, visiblePartY) {
			if(!isInView) {
				$(this).trigger('reset');
			}
		});
	});
	// #1 intro
	$('#intro li').each(function(i) {
		$(this).addClass('fadein l'+ i); //sit
	});
	// #3 video
	$('#whatname').bind('qinview', function() {
		sublime.prepare('3eb3c5c9');
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
		swipeRight: function() {
			$(this).find('a.prev').click();
		},
		swipeLeft: function() {
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
				$(this).children('.slides').children().hide().removeClass().filter(':last-child').addClass('onn')
					.parent().next().children('li:first-child').click();
			}
		});
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
	// add reset btn to each block?
	$('.block').append('<a href="#" class="btn-reset"><i></i></a>').children('.btn-reset').click(function() {
		var bpid = '#' + $(this).parent().removeClass('onn').attr('id');
		setTimeout(function() {
			$(bpid).addClass('onn').trigger('reset');
		}, 0);
		return false;
	});
	// fun with ecos
	$('.eco:not(.bg)').click(function() {
		$(this).fadeOut(100,function() { $(this).fadeIn(1000) });
	});
});

function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
		val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	}
	return val;
}

//browser-update.org
var $buoop = {vs:{i:9,f:5,o:12,s:5,n:9},reminder:0,onshow:function(infos) {
	jQuery('#buorg > div').prepend('<strong>This module is built with the latest HTML5 + CSS3 in mind.</strong> ');
	}}; 
$buoop.ol = window.onload; 
window.onload=function(){ 
 try {if ($buoop.ol) $buoop.ol();}catch (e) {} 
 var e = document.createElement("script"); 
 e.setAttribute("type", "text/javascript"); 
 e.setAttribute("src", "//browser-update.org/update.js"); 
 document.body.appendChild(e); 
} 