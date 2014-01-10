<?php
/*
 * Qualcomm HTML5 Modules
 * 5 Cool Thing
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
		<title>5 Cool Things</title>
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
					<h1 class="txtw"><strong class="big5">5</strong><span class="cool">Super cool things<br /><span class="thin">about Qualcomm<sup>&reg;</sup><br />Snapdragon<sup>&trade;</sup> Processors</span></span></h1>
					<div class="header-graphic">
						<img id="header-tablet" src="img/header-phone.png" />
						<img id="gear1" src="img/gear1.png" />
						<img id="gear2" src="img/gear2.png" />
					</div>
				</div>
			</header>
			
			<div id="content">

				<?php // Slide #9 ?>
				<section id="single-chip" class="bg-grey-grad block">
					<div class="inner">
						<div class="text-position">
							<p class="center">Can make your phone do <br />things <span class="thick">by talking to it</span><sup class="sup">1</sup></p>
						</div>
						<div class="graphic-position">
							<img id="single-phone" src="../meet-snapdragon/img/phone-simple.png" />
							<img id="pop-power" src="../meet-snapdragon/img/pop-power.png" />
							<img id="pop-chip" src="../meet-snapdragon/img/pop-chip.png" />
							<img id="pop-lines" src="../meet-snapdragon/img/pop-lines.png" />
						</div>

						<span class="stretch"></span>
					</div>
				</section>

				<?php // Slide #8 ?>
				<section id="mobile-power" class="bg-grey-grad block">
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
									</div>
							</div>
							<img id="chip3" src="../meet-snapdragon/img/chip135x132.png" />
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
							<img id="logo" src="../meet-snapdragon/img/snapdragon-logo.png" />
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