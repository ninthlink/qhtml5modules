

// ------------------------------------------------------------------------- //
// Vars
// ------------------------------------------------------------------------- //

var $slideshow;

// ------------------------------------------------------------------------- //
// GSAP defautls
// ------------------------------------------------------------------------- //

TweenMax.defaultEase = Power2.easeOut;

// ------------------------------------------------------------------------- //
// Scene functions
// ------------------------------------------------------------------------- //

var scenes = {

    //
    // 1
    //
    scene1 : function() {

        var tl = new TimelineMax({
            paused: true,
            onComplete : setWaypoints
        });
        var headingTL = new TimelineMax({paused: true});

        var $scene = $('.scene--1');
        var $heading = $scene.find('.h1');
        var $circles = $scene.find('.circle');

        // fade in the main scene
        tl.from($scene, 2, {
            autoAlpha : 0
        });
        tl.play();

        // heading timeline
        headingTL.from($heading, 0.5, {
            y : '-=30',
            autoAlpha : 0
        });
        headingTL.staggerFrom($circles, 1, {
            autoAlpha : 0
        }, 0.5);

        function setWaypoints() {

            // spin
            TweenMax.to($circles, 35, {
                rotation : '+=360',
                repeat : -1,
                ease : Linear.easeNone
            });

            // play scene
            $heading.waypoint(function(direction) {
                headingTL.play();
                // circlesTL.play();
            }, {
                offset: '25%'
            });

        }
    },

    //
    // 2
    //
    scene2 : function(){

        var $scene = $('.scene--2');
        var $items = $scene.find('.scene--2__item');
        var $lines = $scene.find('.line');

        var dots = [
            TweenMax.from($items[0], 0.5, {
                autoAlpha : 0,
                x : '+=100'
            }),
            TweenMax.from($items[1], 0.5, {
                autoAlpha : 0
            }),
            TweenMax.from($items[2], 0.5, {
                autoAlpha : 0,
                x : '-=100'
            })
        ];

        var tl = new TimelineMax({
            paused : true,
            stagger : 0.1,
            tweens : dots
        });

        tl.from($lines, 0.5, {
            autoAlpha : 0
        });

        $scene.waypoint(function() {
            tl.play();
        }, {
            offset: '40%'
        });


    },
    //
    // 3
    //
    scene3 : function(){

        var $scene = $('.scene--3');
        var $lightning = $scene.find('.img-stack__front');
        var $arrows = $scene.find('.scene--3__arrows');
        var $circles = $scene.find('.circle');

        var tl = new TimelineMax({ paused : true });

        tl.from($lightning, 0.5, {
            autoAlpha : 0
        });
        tl.from($arrows, 0.5, {
            autoAlpha : 0
        });
        tl.staggerFrom($circles, 0.5, {
            autoAlpha : 0
        }, 0.25);

        $scene.waypoint(function() {
            // spin
            TweenMax.to($circles, 35, {
                rotation : '+=360',
                repeat : -1,
                ease : Linear.easeNone
            });

            tl.play();
        }, {
            offset: '30%'
        });

    },
    //
    // 4
    //
    scene4 : function(){

        var $scene = $('.scene--4');
        var $gaming = $scene.find('.exp-graphic--gaming');
        var $video = $scene.find('.video-exp-front');
        var $videoBack = $scene.find('.video-exp-behind');
        var $appsPhone = $scene.find('.exp-graphic--apps');
        var $appsList = $scene.find('.apps-exp__app');

        var gamingTL = new TimelineMax({ paused : true });
        var videoTL = new TimelineMax({ paused : true });
        var appsTL = new TimelineMax({ paused : true });

        // games
        gamingTL.from( $gaming, 1, {
            autoAlpha : 0,
            x : '-=30'
        });

        // video
        videoTL.from( $video, 0.5, {
            autoAlpha : 0
        // labeled
        }).add('videoFade');

        // add at labels
        videoTL.from( $videoBack[0], 0.5, {
            autoAlpha : 0,
            left : '30%'
        }, 'videoFade');

        videoTL.from( $videoBack[1], 0.5, {
            autoAlpha : 0,
            right : '30%'
        }, 'videoFade');


        // apps
        appsTL.from( $appsPhone, 0.5, {
            autoAlpha : 0
        });
        appsTL.staggerFrom( $appsList, 0.25, {
            autoAlpha : 0,
            rotationX : 180
        }, 0.1);


        $gaming.waypoint(function() {
            gamingTL.play();
        }, {
            offset: '30%'
        });

        $video.waypoint(function() {
            videoTL.play();
        }, {
            offset: '40%'
        });
        $appsPhone.waypoint(function() {
            appsTL.play();
        }, {
            offset: '40%'
        });

    },
    //
    // 5
    //
    scene5 : function() {

        var $scene = $('.scene--5');
        var $lines = $scene.find('.chip__lines');
        var $chip = $scene.find('.chip__diagram');

        var tl = new TimelineMax({ paused : true });

        tl.from( $chip, 0.5, {
            autoAlpha : 0
        });
        tl.from( $lines, 0.5, {
            autoAlpha : 0
        });

        $lines.waypoint(function() {
            tl.play();
        }, {
            offset : '40%'
        });

    },
    //
    // 6
    //
    scene6 : function(){

        var $scene = $('.scene--6');
        var $headline = $scene.find('.h4');
        var $subhead = $scene.find('.scene__subhead');
        var $lis = $scene.find('.ul li');
        var $icons = $scene.find('.col--right img');

        var tl = new TimelineMax({ paused : true });

        tl.staggerFrom( [ $headline, $subhead, $lis[0], $lis[1] ], 0.5, {
            autoAlpha : 0,
            x : '-=30'
        }, 0.25);
        tl.staggerFrom( $icons, 0.5, {
            autoAlpha : 0
        }, 0.25);

        $headline.waypoint(function() {
            tl.play();
        }, {
            offset : '40%'
        });


    },
    //
    // 7
    //
    scene7 : function(){

        var tl = new TimelineMax({ paused : true });

        var $scene = $('.scene--7');
        var $heading = $scene.find('.h2');
        var $circles = $scene.find('.circle');

        tl.staggerFrom( $circles, 0.5, {
            autoAlpha : 0
        }, 0.25);

        // play scene
        $heading.waypoint(function() {
            tl.play();
            TweenMax.to($circles, 35, {
                rotation : '+=360',
                repeat : -1,
                ease : Linear.easeNone
            });
        }, {
            offset: '25%'
        });

    },
    //
    // 8
    //
    scene8 : function(){

        var tl = new TimelineMax({ paused : true });

        var $scene = $('.scene--8');
        var $heading = $scene.find('.h4');
        var $chip = $scene.find('.chip-logo');

        tl.from( $chip, 0.5, {
            autoAlpha : 0,
            x : '+=30'
        });

        $heading.waypoint(function() {
            tl.play();
        }, {
            offset: '40%'
        });


    },
    //
    // 9
    //
    scene9 : function(){

        var tl = new TimelineMax({ paused : true });

        var $scene = $('.scene--9');
        var $screenshots = $scene.find('.screenshots');
        var $left = $scene.find('.col--left');
        var $right = $scene.find('.col--right');

        tl.add('start');
        tl.from( $left, 0.5, {
            left : '25.5%'
        }, 'start');
        tl.from( $right, 0.5, {
            right : '25.5%'
        }, 'start');

        $screenshots.waypoint(function() {
            tl.play();
        }, {
            offset: '40%'
        });

        var $tips = $scene.find('.tooltip');

        $tips.on('click', '.tooltip__switch', function(event) {
            var $tip = $(this).parent();
            $tip.toggleClass('tooltip--open');
        });


    },
    //
    // 10
    //
    scene10 : function(){

        var tl = new TimelineMax({ paused : true });
        var $scene = $('.scene--10');
        var $headline = $scene.find('.h4');

        var $leftText = $scene.find('.delivers-item--left .delivers-item__text');
        var $leftIcons = $scene.find('.delivers-item--left .img-stack img');
        var $rightText = $scene.find('.delivers-item--right .delivers-item__text');
        var $rightIcons = $scene.find('.delivers-item--right .img-stack img');

        tl.add('start');
        tl.from( $leftText, 0.5, {
            autoAlpha : 0
        });
        tl.staggerFrom( $leftIcons, 0.5, {
            autoAlpha : 0
        }, 0.25, '-=0.25' );

        tl.from( $rightText, 0.5, {
            autoAlpha : 0
        });
        tl.staggerFrom( $rightIcons, 0.5, {
            autoAlpha : 0
        }, 0.25, '-=0.25' );

        $headline.waypoint(function() {
            tl.play();
        }, {
            offset: '40%'
        });

    },
    scene11 : function(){
	
        // video
		//var $scene = $('.scene--11');
		
		//$scene.waypoint(function() {
			sublime.prepare('magevid');
		//}, {
		//	offset: '30%'
		//});
    },
    //
    // 12
    //
    scene12 : function(){

        var tl = new TimelineMax({ paused : true });
        var $scene = $('.scene--12');
        var $chart = $('.perf-chart');
        var $items = $scene.find('.perf-chart__item');
        var $bars = $scene.find('.perf-chart__bar');
        var $namesHighlight = $scene.find('.perf-chart__item--highlight .perf-chart__name');
        var $names = $scene.find('.perf-chart__name').not($namesHighlight);

        tl.add('start');
        tl.staggerFrom( $items, 0.5, {
            autoAlpha : 0
        }, 0.25 );

        tl.staggerFrom( $names, 0.5, {
            left : 0
        }, 0.25, 'start+=0.25' );
        tl.add('namesDone');
        tl.staggerFrom( $namesHighlight, 0.5, {
            right : '100%'
        }, 0.25, 'namesDone' );

        tl.staggerFrom( $bars, 0.5, {
            width : 0
        }, 0.25, 'start+=0.25' );

        $chart.waypoint(function() {
            tl.play();
        }, {
            offset: '25%'
        });

    },
    //
    // 13
    //
    scene13 : function(){

        var tl = new TimelineMax({ paused : true });
        var $scene = $('.scene--13');
        var $headline = $scene.find('.h4');
        var $phone = $scene.find('.leading-phone');

        tl.from( $phone, 1, {
            // arbitrary point that works on mobile and desk
            bottom : '-80%',
            ease : Power3.easeOut
        });

        $headline.waypoint(function() {
            tl.play();
        }, {
            offset: '25%'
        });

    },
    //
    // 14
    //
    scene14 : function() {
        $slideshow.trigger('resize');
    },
    //
    // 15
    //
    scene15 : function(){

        var tl = new TimelineMax({ paused : true });
        var $scene = $('.scene--15');
        var $logo = $scene.find('.logo');
        var $items = $scene.find('.wrapper').children();

        tl.staggerFrom( $items, 0.5, {
            autoAlpha : 0
        }, 0.25 );

        $logo.waypoint(function() {
            tl.play();
        }, {
            offset: '35%'
        });

    }

};



// qualcom fix
$('.scene').on('qualcommreveal/panel-reveal-start', function() {
    var $this = $(this);
    var sceneNum = $this.data('scene');
    var sceneFn = scenes['scene' + sceneNum];

    // console.log( 'playing scene' + sceneNum);

    if ( $.isFunction( sceneFn ) ) {
        sceneFn();
    }

});

// ------------------------------------------------------------------------- //
// Init
// ------------------------------------------------------------------------- //

function init() {

    scenes.scene1();

    $slideshow = $('#slideshow');

    $slideshow.slick({
        slide : 'li',
        arrows : false,
        infinite : false,
        dots : true,
        easing : 'swing',
        cssEase : 'ease-out'
    });

    $('body').qualcommreveal({
        waitTime : 300,
        offset: 0
    });

}

init();