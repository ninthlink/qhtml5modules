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
	var onoffsets = new Array();
	$('.comeon').each(function(i) {
		if ( $(this).is('[data-waypoint-offset]') == false ) {
			$(this).data('waypoint-offset', offsetDefault);
		}
		var ofs = $(this).data('waypoint-offset');
		/*
		$(this).bind('checkoff', function() {
				console.log('comeon : '+ i + ' ' + $(this).attr('id') + ' :: ' + ofs );
		}).trigger('checkoff');
		*/
		onoffsets[i] = ofs;
		$(this).waypoint(function() {
			$(this).addClass('onn');
		}, {
			offset: onoffsets[i]
		});
	
//		console.log('comeon : '+ i + ' ' + $(this).attr('id') + ' :: ' + $(this).data('waypoint-offset') );
	});
	// #1 intro
	$('#intro li').each(function(i) {
		$(this).addClass('fadein l'+ i); //sit
	});
	// #3 whatname video stuff
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
	
	// #10 inventing the future
	$('#future .imageblock').waypoint(function() {
		$(this).find('img').fadeIn(2000);
	}, {
		offset: '80%'
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
	$('#billion').bind({
		'count': function() {
			$(this).find('.number').css('left',0).animate({
				left: 25000000000
			}, {
				duration: 1200, 
				step: function( c ) {
					var n = Math.round(c);
					$(this).html(commaSeparateNumber(n));
				}
			});
		},
		'reset': function() {
			$(this).trigger('count');
		}
	}).waypoint(function() {
		$(this).addClass('comeon onn').trigger('reset');
	}, {
		offset: '50%'
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
			dots += '<li'+ (i==0 ? ' class="onn"' : '') + '></li>';
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
			'timereset': function() {
				var thisslider = $(this);
				var timo = setTimeout( function() { thisslider.trigger('nextslide'); }, slideduration);
				$(this).data('qslidetimer', timo);
			},
			'stopcycle': function() {
				var timo = $(this).data('qslidetimer');
				clearTimeout(timo);
			}
		}).trigger('timereset');
	});
	
	$('.block').append('<a href="#" class="btn-reset"><i></i></a>').children('.btn-reset').click(function() {
		var bpid = '#' + $(this).parent().removeClass('onn').attr('id');
		console.log('reset '+ bpid);
		
		
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
	/* dots nav */
	if ( $('.dnav').size() > 0 ) {
		$('section:not(:last)').each(function(i) {
			var h2c = $(this).find('h1,h2').eq(0).text();
			$('.dnav ul').append('<li><a href="#'+ $(this).attr('id') + '" title="'+ h2c +'">'+i+'</a></li>');
			$(this).waypoint(function(direction) {
			var $links = $('a[href="#' + this.id + '"]');
			$links.toggleClass('active', direction === 'down');
			}, {
			offset: '95%'
			})
			.waypoint(function(direction) {
			var $links = $('a[href="#' + this.id + '"]');
			$links.toggleClass('active', direction === 'up');
			}, {
			offset: function() {
			return -$(this).height();
			}
			});
		});
		$('.dnav a').click(function() {
			var tar = $(this).attr('href');
			$(tar).children('.btn-reset').click();
		});
	}
});