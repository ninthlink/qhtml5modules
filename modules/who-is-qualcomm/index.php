<?php
/*
 * Qualcomm HTML5 Modules
 * Who is Qualcomm?
 *
 * v0.1.6
 */
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Who is Qualcomm?</title>
		
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-touch-fullscreen" content="yes">
		<meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<link rel="stylesheet" href="css/main.css">

		<script src="../_common/js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
		<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script><?php /* load CDN or local backup */ ?>
		<script>window.jQuery || document.write('<script src="../_common/js/jquery-1.10.1.min.js"><\/script>')</script>
<!--
		<script src="../_common/js/spin.min.js"></script>
		<script src="../_common/js/jquery.scrollorama.js"></script>
-->
		<script src="../_common/js/waypoints.min.js"></script>
		<script src="../_common/js/jquery.touchSwipe.min.js"></script>

	</head>

	<body>
		
		<div id="wrapper">

			<?php /*// Slide #1 ?>
			<header class="bg-red-grad">
				<div class="inner">
					<h1 class="txtw"><strong>5</strong><span class="cool">Super cool things<br /><span class="thin">about Qualcomm<sup>&reg;</sup><br />Snapdragon<sup>&trade;</sup> Processors</span></span></h1>
					<div class="header-graphic">
						<img id="main-img" src="img/topgraphic.png" />
						<img id="gear1" src="img/gear1.png" />
						<img id="gear2" src="img/gear2.png" />
					</div>
				</div>
			</header>
			*/ ?>
			<div id="content">
			
				<?php // Slide #0 ?>
				<section id="hdr" class="bg-img block comeon" data-bg-height="709" data-waypoint-offset="0">
					<div class="inner">
						<div class="text-position center txtw">
							<h1 class="fadein">Who is <span class="thick">Qualcomm?</span></h1>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
        
				<?php // Slide #1 ?>
				<section id="intro" class="bg-white block comeon" data-waypoint-offset="50%">
					<div class="inner">
          	<div class="graphic-position">
							<div class="eco fadein"><div class="spinner"></div><div class="spinner s2"></div></div>
            </div>
						<div class="text-position">
							<p><span class="thick">By the end of this module, you will learn about:</span></p>
              <ul>
                <li>Who Qualcomm is and what we do</li>
                <li>How our inventions have changed how we communicate today</li>
                <li>How our ideas will help shape the future of mobile technology</li>
              </ul>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
			
				<?php // Slide #2 ?>
				<section id="invents" class="bg-img block comeon" data-bg-height="430">
					<div class="inner">
          	<div class="graphic-position spingrow">
							<div class="eco d1"><div class="in"></div></div>
							<div class="eco d2"><div class="in"></div></div>
							<div class="eco d3"><div class="in"></div></div>
            </div>
						<div class="text-position txtw">
							<h2 class="fadein">Qualcomm <span class="thick">invents</span></h2>
              <p class="fadein">mobile, computing, and connectivity technologies that<br class="vis960" /> allow people to explore more, learn more, live more, <span class="thick">everyday.</span></p>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
			
				<?php // Slide #3 ?>
				<section id="whatname" class="bg-black block comeon" data-waypoint-offset="30%">
					<div class="inner">
						<div class="text-position">
							<h2 class="center txtw"><span class="thick">Qualcomm.</span> What’s in the name?</h2>
              <div class="videohere">
              	<img src="img/name-video.jpg" alt="" class="fadein" />
              	<div id="what-video">
                  <iframe id="whatvid" src="//player.vimeo.com/video/86065129?title=0&amp;byline=0&amp;portrait=0&amp;color=d1252f&amp;api=1&amp;player_id=whatvid" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
              </div>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
        
				<?php // Slide #4 ?>
				<section id="global" class="bg-blue block comeon" data-waypoint-offset="30%">
					<div class="inner">
          	<div class="text-position center txtw">
            	<h2>We are <span class="thick">global and diverse</span></h2>
              <div class="map growin">
              	<div class="eco bg"><div class="in"></div></div>
                <div class="eco p1"><div class="in"></div></div>
                <div class="eco p2"><div class="in"></div></div>
                <div class="eco p3"><div class="in"></div></div>
                <div class="eco p4"><div class="in"></div></div>
                <div class="eco p5"><div class="in"></div></div>
                <div class="eco p6"><div class="in"></div></div>
              </div>
              <ul class="circles"><li class="c1 fadein"><span class="txtbl">31,000</span> Approximate<br />employees*</li><li class="c2 fadein"><span class="txtbl">85</span> US locations</li><li class="c3 fadein"><span class="txtbl">191</span> Worldwide<br />locations</li></ul>
              <p class="disc">* Full-time, part-time and temporary employees per FY13 Form 10-K</p>
            </div>
          </div>
        </section>
        
				<?php // Slide #4.5 ?>
				<section id="honors" class="bg-white block">
					<div class="inner">
          	<div class="text-position">
            	<h2 class="txtbl center">Qualcomm <span class="thick">honored</span> as a company</h2>
				<div class="graphic-position center">
					<img src="img/honors-bw.gif" alt="Fortune 100 Best Companies to work for : Newsweek Green Rankings" />
				</div>
				<ul>
				<li><span class="thick">Fortune</span> - 100 Best Companies to work for (since 1999)<br />
&nbsp; &nbsp; - Ranked #11 overall</li>
<li><span class="thick">Fortune</span> - Most Admired Companies (since 2002)</li>
<li><span class="thick">Fortune</span> - Most Diverse List</li>
<li><span class="thick">Newsweek</span> - Green Rankings<br />
&nbsp; &nbsp; - Ranked #42 amount U.S. Companies<br />
&nbsp; &nbsp; - Ranked #101 among worlds top “green” organizations</li>
				</ul>
            </div>
          </div>
        </section>
        
				<?php // Slide #5 ?>
				<section id="heritage" class="bg-img block comeon" data-bg-height="429">
					<div class="inner">
          	<div class="graphic-position growin">
							<div class="eco d1"><div class="in"></div></div>
							<div class="eco d2"><div class="in"></div></div>
							<div class="eco d3"><div class="in"></div></div>
            </div>
						<div class="text-position txtw">
							<h2 class="fadein">A long heritage of <span class="thick">innovation</span></h2>
              <p class="fadein">Qualcomm has been inventing and innovating mobile technologies and experiences for <span class="thick">more than 28 years.</span></p>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
			
				<?php // Slide #6 ?>
				<section id="years" class="bg-white block">
					<div class="inner">
						<div class="text-position center">
							<h2><span class="txtbl">28</span> years of <span class="thick">innovation</span></h2>
							<div class="slider" data-slide-duration="5000" data-slide-fade="1000">
								<ul>
									<li class="onn">
										<img src="img/1985.jpg" alt="1985" />
										<h2 class="txtlb">1985</h2>
										<p>Qualcomm is founded</p>
									</li>
									<li>
										<img src="img/1989.jpg" alt="1989" />
										<h2 class="txtlb">1989</h2>
										<p>Qualcomm makes historic first CDMA phone call</p>
									</li>
									<li>
										<img src="img/1998.gif" alt="1998" />
										<h2 class="txtlb">1998</h2>
										<p>Qualcomm unveils the world’s first commercial CDMA smartphone.</p>
									</li>
									<li>
										<img src="img/2000.gif" alt="2000" />
										<h2 class="txtlb">2000</h2>
										<p>Qualcomm delivers the first CDMA chipset to integrate GPS.</p>
									</li>
									<li>
										<img src="img/2005.gif" alt="2005" />
										<h2 class="txtlb">2005</h2>
										<p>Qualcomm Scorpion processor brings consumer electronics features to mobile devices.</p>
									</li>
									<li>
										<img src="img/2007.gif" alt="2007" />
										<h2 class="txtlb">2007</h2>
										<p>Qualcomm premieres Snapdragon processors – the first to break the GHz barrier.</p>
									</li>
									<li>
										<img src="img/2008.gif" alt="2008" />
										<h2 class="txtlb">2008</h2>
										<p>Qualcomm Snapdragon processor powers world's first Android-based mobile device.</p>
									</li>
									<li>
										<img src="img/2010.gif" alt="2010" />
										<h2 class="txtlb">2010</h2>
										<p>First 3G LTE Multimode chipsets</p>
									</li>
									<li>
										<img src="img/2013.gif" alt="2013" />
										<h2 class="txtlb">2013</h2>
										<p>Qualcomm announces Snapdragon processor designed to enable Ultra-HD on smart devices.</p>
									</li>
								</ul>
							</div>
            </div>
          </div>
        </section>
        
		<?php // Slide #7 ?>
		<section id="firsts" class="bg-img block comeon" data-bg-height="668" data-waypoint-offset="40%">
			<div class="inner">
				<div class="text-position center txtw">
					<h2 class="fadein">A company of many <span class="thick">firsts</span></h2>
					<p class="fadein">From the beginning, we’ve been dedicated to keeping people connected wherever they are.</p>
				</div>
				<div class="graphic-position growin">
					<div class="eco d1"><div class="in"></div></div>
					<div class="eco d2"><div class="in"></div></div>
					<div class="eco d3"><div class="in"></div></div>
				</div>

				<span class="stretch"></span>
			</div>
		</section>
			
				<?php // Slide #8 ?>
				<section id="leader" class="bg-grey-grad block">
					<div class="inner">
						<div class="text-position center">
							<h2>Our innovations have made<br class="vis960" /> us a <span class="thick">mobile technology leader</span>*</h2>
              <div class="slider txtw" data-slide-duration="3000" data-slide-fade="500">
								<ul>
									<li class="onn">
										<h2><span class="thick">Mode M</span></h2>
										<p>performance</p>
									</li>
									<li>
										<h2><span class="thick">GPU</span></h2>
										<p>performance</p>
									</li>
									<li>
										<h2><span class="thick">CPU</span></h2>
										<p>performance</p>
									</li>
									<li>
										<h2><span class="thick">DSP</span></h2>
										<p>performance</p>
									</li>
									<li class="battery">
										<h2><span class="thick">#1</span></h2>
										<p>Efficiency<br />Leadership</p>
									</li>
                </ul>
              </div>
            </div>

						<span class="stretch"></span>
					</div>
				</section>
			
				<?php // Slide #9 ?>
				<section id="ideas" class="bg-img block comeon" data-bg-height="429">
					<div class="inner">
          	<div class="graphic-position growin">
							<div class="eco d1"><div class="in"></div></div>
							<div class="eco d2"><div class="in"></div></div>
							<div class="eco d3"><div class="in"></div></div>
            </div>
						<div class="text-position txtw">
							<h2 class="fadein">Our ideas are <span class="thick">changing</span> the world</h2>
              <p class="fadein">Our ideas and inventions make a difference in peoples<br class="vis960" />
lives everywhere - transforming how we live.</p>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
			
				<?php // Slide #10 ?>
				<section id="future" class="bg-white block">
					<div class="inner">
						<div class="text-position">
							<h2 class="center">Inventing the future of <span class="thick">mobile&nbsp;experiences</span></h2>
              <div class="imageblock">
              	<div class="icn"><img src="img/ic-future1.png" alt="" /></div>
                <div class="txt">
                	<h2>Enabling the devices you love</h2>
									<p>Developing technology that brings ecosystems of smart devices together to seamlessly connect you to richer experiences.</p>
								</div>
							</div>
              <div class="imageblock">
              	<div class="icn"><img src="img/ic-future3.png" alt="" /></div>
                <div class="txt">
                	<h2>Connecting everyone and everything</h2>
									<p>Creating new ways to ensure seamless mobile access to wireless data in our hyper-connected world.</p>
								</div>
							</div>
              <div class="imageblock">
              	<div class="icn"><img src="img/ic-future2.png" alt="" /></div>
                <div class="txt">
                	<h2>Sensing and learning your needs</h2>
									<p>Developing technology and tools to help create apps and devices that will deliver information when and where you need it.</p>
								</div>
							</div>
            </div>
          </div>
        </section>
			
				<?php // Slide #11 ?>
				<section id="expanding" class="bg-black block comeon" data-waypoint-offset="50%">
					<div class="inner">
						<div class="graphic-position growin">
							<div class="eco"><div class="in"></div></div>
						</div>
						<div class="text-position txtw">
							<h2>Expanding <span class="thick">smartphone</span> innovations</h2>
							<ul>
								<li>Dual ISP</li>
								<li>GPS, Glonass, Beidou, Galileo</li>
								<li>Ultra HD panoramic video</li>
								<li>LTE-A</li>
								<li>H.265 video compression</li>
								<li>Augmented reality</li>
								<li>5.1/7.1 surround sound</li>
							</ul>
						</div>
					</div>
				</section>
			
				<?php // Slide #12 ?>
				<section id="driving" class="bg-img block" data-bg-height="600">
					<div class="inner">
						<div class="text-position center txtw">
							<h2>Driving the <span class="thick">mobile experience</span> everywhere</h2>
							<div class="arrowd">
								<a href="#prev" class="prev"><span>&lt;</span></a>
								<ul class="txtb">
									<li class="onn">Small cells</li>
									<li>CE devices</li>
									<li>Health devices</li>
									<li>Smart grid</li>
									<li>Wearables</li>
									<li>Tablets</li>
									<li>Hybrids</li>
									<li>Home gateways</li>
									<li>Cars</li>
									<li>TVs</li>
								</ul>
								<a href="#next" class="next"><span>&gt;</span></a>
							</div>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
        
      	<?php // Slide #13 ?>
        <section id="billion" class="bg-blue-grad block">
        	<div class="inner">
          	<div class="text-position center">
            	<div class="number txtw">&nbsp;</div>
              <h2><span class="thick">25 Billion</span> mobile devices connected by 2020*</h2>
              <p class="txtw"><br /><br /><br />* Source: Machina Research, 2013</p>
            </div>
          </div>
        </section>
			
				<?php // Slide #14 ?>
				<section id="applying" class="bg-grey-grad block comeon">
					<div class="inner">
						<div class="text-position center">
							<h2><span class="thick">Applying</span> mobile technologies to everything</h2>
              <p>Making them more aware, connected, intelligent and interactive</p>
						</div>
          	<div class="graphic-position">
							<ul class="circles"><li class="ma"><span class="i"><span></span></span><span class="c">Machines</span></li><li class="de"><span class="i"><span></span></span><span class="c">Devices</span></li><li class="pe"><span class="i"><span></span></span><span class="c">People</span></li><li class="ob"><span class="i"><span></span></span><span class="c">Objects</span></li><li class="pl"><span class="i"><span></span></span><span class="c">Places</span></li></ul>
            </div>
						<span class="stretch"></span>
					</div>
				</section>
			
				<?php // Slide #15 ?>
				<section id="connect" class="bg-white block comeon" data-waypoint-offset="30%">
					<div class="inner">
						<div class="text-position center">
							<h2><span class="thick">Connecting</span> everyone and everything</h2>
              <p>Creating new ways to ensure seamless mobile access to wireless data in our hyper-connected world.</p>
						</div>
          	<div class="graphic-position">
			  <div class="circles">
                <div class="c left growin"><div class="in"><div class="txt fadein">Global data<br />traffic growth <span class="thick">2x</span></div></div></div>
                <div class="o fadein"></div>
                <div class="c right growin"><div class="in"><div class="txt fadein">Preparing for <span class="thick">1000x</span> mobile data<br />traffic growth</div></div></div>
              </div>
            </div>
						<span class="stretch"></span>
					</div>
				</section>
			
				<?php // Slide #16 ?>
				<section id="digital" class="bg-img block comeon" data-bg-height="429">
					<div class="inner">
          	<div class="graphic-position spingrow">
							<div class="eco d1"><div class="in"></div></div>
							<div class="eco d2"><div class="in"></div></div>
							<div class="eco d3"><div class="in"></div></div>
            </div>
						<div class="text-position txtw">
							<h2 class="fadein"><span class="thick">Digital 6<sup>th</sup> Sense</span></h2>
              <p class="fadein">The augmentation of human ability</p>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
			
				<?php // Slide #17 ?>
				<section id="across4" class="bg-white block">
          	<ul>
            	<li class="a1"><img src="img/41.jpg" width="320" height="296" alt="" /><span class="c">Knows your location</span></li>
            	<li class="a2"><img src="img/42.jpg" width="320" height="296" alt="" /><span class="c">Senses your motion</span></li>
            	<li class="a3"><img src="img/43.jpg" width="320" height="296" alt="" /><span class="c">Understands your<br />environment</span></li>
            	<li class="a4"><img src="img/44.jpg" width="320" height="296" alt="" /><span class="c">Recognizes<br />enviornmental<br />sound</span></li>
            </ul>
        </section>
        
				<?php // Slide #18 ?>
				<section id="tap" class="bg-white block comeon" data-waypoint-offset="30%">
					<div class="inner">
						<div class="text-position">
              <h2 class="center"><span class="thick">Mobile devices</span> can tap into resources <br class="vis960" />beyond their own capabilities</h2>
              <div class="graphic-position">
                <div class="globe"></div>
                <div class="eco p1"><div class="ring"></div><div class="icn"></div></div>
                <div class="eco p2"><div class="ring"></div><div class="icn"></div></div>
                <div class="eco p3"><div class="ring"></div><div class="icn"></div></div>
              </div>
              <h4><span class="thick">Inventing technologies and tools that make mobile devices intuitive</span></h4>
              <ul>
                <li>Awareness: Reacts to events, locations, and personal behaviors</li>
                <li>Connectivity: Recognizes and connects everyday things</li>
                <li>Intelligence: Delivers timely, personalized information to the user</li>
                <li>Interaction: Enhances real-world environments with interactive elements</li>
              </ul>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
			
				<?php // Slide #19 ?>
				<section id="explore" class="bg-img block comeon" data-bg-height="566" data-waypoint-offset="20%">
					<div class="inner">
						<div class="text-position center txtw">
							<div class="eco"></div>
							<h2 class="center">Explore. Learn. Live. <span class="thick">More.</span></h2>
              <p>Creating mobile, computing, and connectivity technologies for your everyday.</p>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
        
				<?php // Slide #20 ?>
				<section id="legal" class="bg-6">
					<div class="inner">
						<div class="graphic-position center">
							<img id="logo" src="img/qualcomm.png" />
						</div>
						<div class="text-position center txtw">
							<p>&copy; <?php date_default_timezone_set('UTC'); echo date('Y'); ?> Qualcomm Technologies, Inc.  All rights reserved.</p>
							<p>Qualcomm is a trademark of QUALCOMM Incorporated registered in the United States and other countries. Gobi and Snapdragon are trademarks of Qualcomm Technologies, Inc. Other products and brand names are property of their respective owners.</p>
						</div>
					</div>
				</section>
				
			</div>
	 
		</div>

		<script type="text/javascript" src="http://a.vimeocdn.com/js/froogaloop2.min.js"></script>
		<script src="js/animate.js"></script>
<script type="text/javascript"> 
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
</script>
	</body>
</html>