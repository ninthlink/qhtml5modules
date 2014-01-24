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
        <div class="triangle"></div>
			</header>
			
			<div id="content">

				<?php // Slide #1 ?>
				<section id="talking" class="bg-grey-grad block">
					<div class="inner">
						<div class="graphic-position">
							<div class="phone chat"></div>
						</div>
						<div class="text-position">
							<h3 class="center">Can make your phone do <br />things <span class="thick">by talking to it</span> <sup class="sup">1</sup></h3>
						</div>

						<span class="stretch"></span>
					</div>
				</section>

				<?php // Slide #2 ?>
				<section id="charge" class="bg-grey-grad block">
					<div class="inner">
						<div class="graphic-position">
							<div class="battery">
              	<div class="fill"></div>
              </div>
						</div>
						<div class="text-position">
							<h3 class="center">Can charge devices up to <span class="thick">75% faster</span> <sup class="sup">2</sup></h3>
						</div>

						<span class="stretch"></span>
					</div>
				</section>

				<?php // Slide #3 ?>
				<section id="satellites" class="bg-grey-grad block">
					<div class="inner">
						<div class="graphic-position">
							<div class="satellite">
              	<div class="s1"></div>
              	<div class="s2"></div>
              	<div class="s3"></div>
              </div>
						</div>
						<div class="text-position">
							<h3 class="center">Can access <span class="thick">50 satellites</span> <sup class="sup">3</sup></h3>
						</div>

						<span class="stretch"></span>
					</div>
				</section>

				<?php // Slide #4 ?>
				<section id="cool" class="bg-grey-grad block">
					<div class="inner">
						<div class="graphic-position">
							<div class="snowflakes">
              	<div class="s1"></div>
              	<div class="s2"></div>
              </div>
						</div>
						<div class="text-position">
							<h3 class="center">Stays cool under pressure<br /><span class="thick">battery efficient</span> <sup class="sup">4</sup></h3>
						</div>

						<span class="stretch"></span>
					</div>
				</section>

				<?php // Slide #5 ?>
				<section id="high-performance" class="bg-grey-grad block">
					<div class="inner">
						<div class="graphic-position">
							<div class="phone meter">
							    <div class="rev-inner">
							        <div class="pin"></div>
							    </div>
							</div>
						</div>
						<div class="text-position">
							<h3 class="center">High performance <span class="thick">graphics</span><br />with <span class="thick">lower power</span> usage <sup class="sup">5</sup></h3>
						</div>

						<span class="stretch"></span>
					</div>
				</section>
        
				<?php // Slide #6 ?>
				<section id="legal" class="bg-red">
					<div class="inner">
						<div class="graphic-position center">
							<img id="logo" src="img/snapdragon.png" />
						</div>
						<div class="text-position center txtw">
							<p>&copy; 2014 Qualcomm Technologies, Inc.  All rights reserved.</p>
              <p>1 - Nsectetur adipisicing elite sed do. Eiusmod tempor incididunt ut.<br />
              2 - Nsectetur adipisicing elite sed do. Eiusmod tempor incididunt ut.<br />
              3 - Nsectetur adipisicing elite sed do. Eiusmod tempor incididunt ut.<br />
              4 - Nsectetur adipisicing elite sed do. Eiusmod tempor incididunt ut.<br />
              5 - Nsectetur adipisicing elite sed do. Eiusmod tempor incididunt ut.</p>
							<p>Qualcomm is a trademark of QUALCOMM Incorporated, registered in the United States and other countries. Snapdragon is a trademark of Qualcomm Technologies, Inc.</p>
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