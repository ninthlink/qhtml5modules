<?php
/*
 * Qualcomm HTML5 Modules
 * Who is Qualcomm?
 *
 * v0.1
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
			
				<?php // Slide #19 ?>
				<section id="explore" class="bg-img block">
					<div class="inner">
						<div class="graphic-position">
							<div class="phone">
							  <div class="pin"></div>
							</div>
						</div>
						<div class="text-position center txtw">
							<h2 class="center">Explore. Learn. Live. <span class="thick">More.</span></h3>
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
							<p>Qualcomm is a trademark of QUALCOMM Incorporated registered in the United States and other countries. Gobi and Snapdragon are trademarks of Qualcomm Technologies, Inc.<br />Other products and brand names are property of their respective owners.</p>
						</div>
					</div>
				</section>
				
			</div>

			<footer>
			</footer>
	 
		</div>

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