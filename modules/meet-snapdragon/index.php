<?php
/*
 * Qualcomm HTML5 Modules
 * Meet Qualcomm® Snapdragon™ Processors
 *
 * v0.2
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
		<title>Meet Snapdragon</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width">

		<link rel="stylesheet" href="css/main.css">

		<script src="../_common/js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
		<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script><?php /* load CDN or local backup */ ?>
		<script>window.jQuery || document.write('<script src="../_common/js/jquery-1.10.1.min.js"><\/script>')</script>

		<script src="../_common/js/spin.min.js"></script>
		<script src="../_common/js/jquery.scrollorama.js"></script>
		<script src="../_common/js/waypoints.min.js"></script>
		<script src="../_common/js/swiper.min.js"></script>

	</head>

	<body>
		
		<div id="wrapper">

			<?php // Slide #1 ?>
			<header class="bg-red-grad">
				<div class="inner">
					<h1 class="center txtw">Meet Qualcomm<sup>&reg;</sup><br /><span class="thick">Snapdragon<sup>&trade;</sup> Processors</span></h1>
					<div class="header-graphic">
						<img id="header-tablet" src="img/header-tablet.png" />
						<img id="gear1" src="img/gear1.png" />
						<img id="gear2" src="img/gear2.png" />
					</div>
				</div>
			</header>
			
			<div id="content">
				
				<?php // Slide #2 ?>
				<section id="loading" class="bg-white">
					<div class="inner">
						<div class="text-position">
							<h3 class="txtb">Have you ever <span class="thick">waited</span> for an app or website to load on your smartphone?</h3>
						</div>
						<div class="graphic-position">
							<div id="spinner"></div>
							<div id="spinner-inner" class="txtr">?</div>
						</div>
					</div>
				</section>

				<?php // Slide #3 ?>
				<section id="difference" class="bg-grey">
					<div class="inner">
						<div class="text-position">
							<h2 class="txtr">Learn how Snapdragon devices<br /><span class="thick">can make a difference</span></h2>
							<ul class="txtb">
								<li id="parallax1">Who is Qualcomm?</li>
								<li id="parallax2">The role of the processor in a smartphone</li>
								<li id="parallax3">Why Snapdragon devices offer a better mobile experience</li>
							</ul>
						</div>
						<div class="graphic-position">
							<img id="chip1" src="img/chip218x213.png" />
						</div>
					</div>
				</section>

				<?php // Slide #4 ?>
				<section id="earth" class="bg-black">
					<div class="inner">
						<div class="text-position">
							<h2 class="txtw">You are here. <span class="thick">Earth.</span></h2>
							<p class="txtg">We are shipping <span class="thick">22 MSM chips every second!</span> Since we started we have shipped more than <span class="thick">15 billion chips.</span> That's 2 for each person on <span class="thick">planet earth.</span></p>
						</div>
						<div class="graphic-position">
							<div class="earth"><img src="img/earth.png" /></div>
							<div class="ring wrapper4">
							  <div class="pie spinner"></div>
							  <div class="pie filler"></div>
							  <div class="mask"></div>
							</div>
							<div class="ring wrapper3">
							  <div class="pie spinner"></div>
							  <div class="pie filler"></div>
							  <div class="mask"></div>
							</div>
							<div class="ring wrapper2">
							  <div class="pie spinner"></div>
							  <div class="pie filler"></div>
							  <div class="mask"></div>
							</div>
							<div class="ring wrapper1">
							  <div class="pie spinner"></div>
							  <div class="pie filler"></div>
							  <div class="mask"></div>
							</div>
						</div>
					</div>
				</section>

				<?php // Slide #5 ?>
				<section id="every-phone" class="bg-grey-grad">
					<div class="inner">
						<div class="text-position center">
							<h2 class="txtb"><span class="thick">Every smartphone</span> has a processor</h2>
							<p class="txtb">Speed and perfromance have a lot to do with the built-in processor.</p>
						</div>
						<div class="graphic-position center multi-col">
							<div class="scrollx">
								<div id="speed_performance" class="three-row">
									<div class="sprite"></div>
									<p>Speed &amp; Performance</p>
								</div>
								<div id="reliable_connectivity" class="three-row">
									<div class="sprite"></div>
									<p>Reliable Connectivity</p>
								</div>
								<div id="long_battery_life" class="three-row last">
									<div class="sprite"></div>
									<p>Long battery life</p>
								</div>
							</div>
							<span class="stretch"></span>
						</div>
					</div>
				</section>

				<?php // Slide #6 ?>
				<section id="processes" class="bg-red-grad-lt">
					<div class="inner">
						<div class="text-position center">
							<h2 class="txtw">People expect smartphones to do <span class="thick">everything.</span> Snapdragon processors are at the heart of these processes</h2>
						</div>
						<div class="graphic-position center txtw multi-col">
							<div id="process_text" class="four-row">
								<div class="sprite"></div>
								<p>text</p>
							</div>
							<div id="process_movies" class="four-row">
								<div class="sprite"></div>
								<p>movies</p>
							</div>
							<div id="process_maps" class="four-row">
								<div class="sprite"></div>
								<p>maps</p>
							</div>
							<div id="process_internet" class="four-row">
								<div class="sprite"></div>
								<p>internet</p>
							</div>
							<div id="process_apps" class="four-row">
								<div class="sprite"></div>
								<p>apps</p>
							</div>
							<div id="process_social" class="four-row">
								<div class="sprite"></div>
								<p>social networking</p>
							</div>
							<div id="process_photos" class="four-row">
								<div class="sprite"></div>
								<p>photos</p>
							</div>
							<div id="process_videos" class="four-row">
								<div class="sprite"></div>
								<p>videos</p>
							</div>
							<div id="process_news" class="four-row">
								<div class="sprite"></div>
								<p>news &amp; entertainment</p>
							</div>
							<div id="process_shopping" class="four-row">
								<div class="sprite"></div>
								<p>shopping</p>
							</div>
							<div id="process_emails" class="four-row">
								<div class="sprite"></div>
								<p>emails &amp; calendars</p>
							</div>
							<div id="process_voice" class="four-row">
								<div class="sprite"></div>
								<p>voice</p>
							</div>

							<div class="four-row box-blind"></div>
							<div class="four-row box-blind"></div>
							<div class="four-row box-blind"></div>
							<div class="four-row box-blind"></div>

							<span class="stretch"></span>

						</div>
						<div id="phone-slide">
							<img id="phone-with-chip" src="img/phone-with-chip.png" />
						</div>
					</div>
				</section>

				<?php // Slide #7 ?>
				<section id="delivers" class="bg-grey-rdl">
					<div class="inner">
						<div class="text-position center">
							<h2 class="txtr">Snapdragon <span class="thick">delivers</span></h2>
						</div>
						<div class="graphic-position center">
							<div class="left">
								<img id="chip2" src="img/chip223x228.png" />
								<img id="chip-lines" src="img/chip-lines.png" />
							</div>
							<div class="right">
								<ul>
									<li id="delivers1">4G LTE</li>
									<li id="delivers2">Fast Connections</li>
									<li id="delivers3">Multimedia and Graphics</li>
									<li id="delivers4">Great Experiences</li>
									<li id="delivers5">Thinner, Lighter<br />&amp; Cooler</li>
									<li id="delivers6">Longer Battery Life</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<?php // Slide #8 ?>
				<section id="mobile-power" class="bg-white">
					<div class="inner">
						<div class="text-position">
							<h2 class="txtr">Extraordinary <span class="thick">mobile power</span></h2>
							<p class="txtb">Snapdragon processors pack a huge amount<br /> of mobile power into a tiny system on a chip.</p>
						</div>
						<div class="graphic-position">
							<div id="meter">
							    <div id="rev-inner">
							        <div id="red"></div>
							        <div id="grey"></div>
							        <div id="pin"></div>
							    </div>
							    <div id="cover">
							    	<div id="dot"></div>
							    	<img src="img/meter-shadow.png" />
								</div>
							</div>
							<img id="chip3" src="img/chip135x132.png" />
						</div>
					</div>
				</section>

				<?php // Slide #9 ?>
				<section id="single-chip" class="bg-red-grad-lt">
					<div class="inner">
						<div class="text-position">
							<p class="txtw">Only Qualcomm designs the key  technology components that connect each of the components into a <span class="thick">single system on a chip</span></p>
						</div>
						<div class="graphic-position">
							<img id="single-phone" src="img/phone-simple.png" />
							<img id="pop-power" src="img/pop-power.png" />
							<img id="pop-chip" src="img/pop-chip.png" />
							<img id="pop-lines" src="img/pop-lines.png" />
						</div>

						<span class="stretch"></span>
					</div>
				</section>

				<?php // Slide #10 ?>
				<section id="multiple-tasks" class="bg-white">
					<div class="inner">
						<div class="text-position center">
							<h2 class="txtr">One processor. <span class="thick">Multiple tasks.</span></h2>
							<p class="txtb">Snapdragon processors use multiple mobile engines - each dedicated to a specific task.</p>
						</div>
						<div class="graphic-position center">
							<div id="grey-scroll">
								<img src="img/cpu-box.png" />
								<img src="img/gpu-box.png" />
								<img src="img/nav-box.png" />
								<img src="img/media-box.png" />
								<img src="img/power-box.png" />
							</div>
							<div id="frame">
								<div id="red-scroll">
									<img src="img/cpu-box-red.png" />
									<img src="img/gpu-box-red.png" />
									<img src="img/nav-box-red.png" />
									<img src="img/media-box-red.png" />
									<img src="img/power-box-red.png" />
								</div>
								<img src="img/scroll-frame.png" />
							</div>
						</div>
					</div>
				</section>

				<?php /*
				<?php // Slide #11 ?>
				<section id="cpu-performance" class="bg-black">
					<div class="inner">
						<div class="text-position center">
							<h2 class="txtr">Technologies CPU <span class="thick">performace</span> roadmap</h2>
							<p class="txtw">Custom CPUs built from the ground up for mobile with superior performance and power efficiency</p>
						</div>
					</div>
				</section>

				<?php // Slide #12 ?>
				<section id="gpu-performance" class="bg-grey-rdl">
					<div class="inner">
						<div class="text-position center">
							<h2 class="txtr">Graphics <span class="thick">performance</span> leadership</h2>
							<p class="txtb">Snapdragon 800 has up to <span class="thick">50% higher performance</span> than Snapdragon 600</p>
						</div>
					</div>
				</section>
				*/ ?>

				<?php // Slide #13 ?>
				<section id="modem-performance" class="bg-white">
					<div class="inner">
						<div class="text-position center">
							<h2 class="txtb">Modem <span class="thick">performance</span></h2>
						</div>
						<div class="graphic-position center">
							<div class="left three-floats">
								<p>Data Download Speeds<br /><b>Up to 150Mbps*</b></p>
							</div>
							<div class="middle three-floats">
								<img id="signal" src="img/modem-signal.png" />
								<img id="spinning-arrows" src="img/spinning-arrows.png" />
							</div>
							<div class="right three-floats">
								<p>Data Upload Speeds<br /><b>Up to 50Mbps*</b></p>
							</div>

							<span class="stretch"></span>

						</div>
					</div>
				</section>

				<?php // Slide #14 ?>
				<section id="thermal-performance" class="bg-black">
					<div class="inner">
						<div class="text-position">
							<h2 class="txtw">Better thermal <span class="thick">performance.</span><br />Less wasted energy.</h2>
						</div>
						<div class="graphic-position">
							<img id="thermal-phone" src="img/thermal-phones.png" />
						</div>
						<div class="video-box">
							<div class="video-button">
								<div id="play-video" class="sprite"></div>
								<p>Watch Butter Test</p>
							</div>
							<div id="butter-video"></div>
						</div>

						<div id="butter-video">
							<content />
						</div>

					</div>
				</section>

				<?php // Slide #15 ?>
				<section id="features" class="bg-white">
					<div class="inner">
						<div class="graphic-position">
							<img src="img/chip381x252.png" />
						</div>
						<div class="text-position">
							<div id="connectivity">
								<h2 class="txtr">Connectivity</h2>
								<p class="txtb">Breakthrough download speed</p>
							</div>
							<div id="performance">
								<h2 class="txtr">Performance</h2>
								<p class="txtb">Up to 2x faster graphics</p>
							</div>
							<div id="longer-battery">
								<h2 class="txtr">Longer Battery</h2>
								<p class="txtb">Always on Always Connected</p>
							</div>
							<div id="speed">
								<h2 class="txtr">Speed</h2>
								<p class="txtb">Up to 2.3Ghz CPU</p>
							</div>
						</div>
					</div>
				</section>

				<?php // Slide #16 ?>
				<section id="legal" class="bg-red">
					<div class="inner">
						<div class="text-position center">
							<p class="txtw">&copy; 2014 Qualcomm Technologies, Inc.  All rights reserved.</p>
							<p class="txtw">Qualcomm is a trademark of QUALCOMM Incorporated, registered in the United States and other countries. Snapdragon is a trademark of Qualcomm Technologies, Inc.</p>
						</div>
						<div class="graphic-position center">
							<img id="logo" src="img/snapdragon-logo.png" />
						</div>
					</div>
				</section>
				
			</div>

			<footer>
			</footer>
	 
		</div>

		<script src="js/animate.js"></script>

	</body>
</html>