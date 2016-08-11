<?php
if(!defined('__PRAGYAN_CMS'))
{
        header($_SERVER['SERVER_PROTOCOL'].' 403 Forbidden');
        echo "<h1>403 Forbidden<h1><h4>You are not authorized to access the page.</h4>";
        echo '<hr/>'.$_SERVER['SERVER_SIGNATURE'];
        exit(1);
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Festember 2016</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link type="text/css" rel="stylesheet" href="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/css/materialize.min.css"  media="screen,projection"/>
	<link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/css/style.css">
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
<nav class="transparent noshadow z-depth-1" style="position:absolute;box-shadow:0 0 0 0;z-index:999999999;">
	<ul id="slide-out" class="side-nav">
		<li>
			
			<center><img src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/image/logo.png" width="200px" />
			</center>
		</li>
		
		<li><a href="#">Events</a>
		</li>
		<li><a href="highlights">Highlights</a>
		</li>
		<li><a href="sponsors">Sponsors</a>
		</li>
		<li><a href="games">Games</a>
		</li>
		<li><a href="hospitality">Hospitality</a>
		</li>
		<li><a href="contacts">Contacts</a>
		</li>
	</ul> <a href="#" data-activates="slide-out" class="button-collapse" style="position:fixed;display:block !important;"><i class="material-icons" style="color:white;opacity:0.7">menu</i></a> </nav>

<script type="text/javascript">
	

	

</script>
<!--- Invisible page with height equivalent to width for scrolling -->

<div id="page" ></div>

<!--- Fixed Container to have all the elements-->

<div id="container" >
<div id="loading" >
<div id="sun"></div>
<div id="farcloud" class="loading2"></div>
<div id="pandafall" class="pandafall" style="display:none"></div>
<div id="flight" class="flightmove"></div>
<div id="nearcloud" class="loading1"></div>
<div id="fallline" class="skyfall2" style="display:none"></div>

</div>
<div class="sky1"></div>
<div class="sky2"></div>
		<div id="layer-1" class="layer">
		
		<div class="castle"></div>
	</div>
	
	<div id="layer-3" class="layer">		
	
	<div class="chinawall"></div>
	
	</div>
		<div id="layer-7" class="layer">
	<div class="nitsky"></div>
	<div class="rockfort"></div>
	<a href="sponsors"><div class="blimp shake1"></div></a>
	<div class="orion"></div>
	<div class="bushes"></div>
	<div class="clock"></div>
	<div class="nittree"></div>
	<div class="compound"></div>
	<div class="bmountain1"></div>
	<div class="bmountain2"></div>
	<div class="wmountain1"></div>
	<div class="wmountain2"></div>
	<div class="wmountain3"></div>
	<div class="eiffel"></div>
	<div class="backwall"></div>
	<div class="backwall2"></div>
	

		
	<div class="abovegrass"></div>
	
	<div class="towergrass"></div>
	<div class="rivergrass"></div>

	<div class="soot" style="display:none">
	<div class="black"></div>
	<div class="black"></div>
	<div class="black"></div>
	<div class="black"></div>
	<div class="black"></div>
	<div class="black"></div>
	<div class="black"></div>
	<div class="black"></div>
	</div>
	
	<div id="ash"></div>
	<div class="pyramid1"></div>
	<div class="pyramid3"></div>
	<div class="pyramid2"></div>
	
	
	
	<a href="#"><div class="pharaoh"></div></a>
	<div class="eyeline1"></div>
	<div class="eyeline2"></div>
<div class="kaaka"></div>
	<div class="darktree"></div>
	<div class="lighttree"></div>
	<div class="palmtree"></div>
	
	<div class="bgrass"></div>
		<div id="ground">
			<div class="ground1"></div>
		</div>
		
	
		<div class="bcastle"></div>
		<div class="bridge"></div>
		<a href="highlights"><div class="highlights"></div></a>
		<div class="briver3 river1move"></div>
		
<div class="briver2 river2move"></div>
<div class="whole1"></div>

<div class="wtower1"></div>
<div class="wtower2"></div>
<div class="wgrass"></div>
<a href="games"><div class="wegg"></div></a>
<div class="brokeegg" style="display:none"></div>
<div class="store"></div>
<a href="hospitality"><div class="reception"></div></a>
<div id="eyelid"></div>
<a href="contacts"><div class="contacts"></div></a>
<div class="opentomb"></div>
	<div class="tombcover"></div>
	<div class="obs1"></div>
<div class="obs2"></div>
<div class="obs3"></div>
	<div class="hero-block  down" id="hero-block" style="display:none">
			<div class="hero bhero1" id="hero">
			</div>
			
</div>	
<div class="river1 river1move">
			
		</div>
		<div class="river2 river2move">
			
		</div>
		<div class="dtail tailmove"></div>
		<div class="tower"></div> 
	<div class="dhead dragonmove"></div>
	<div class="riverstone"></div>
<div class="fire naranara"></div>

<div class="boat"></div>
<div class="briver1 river1move"></div>
<div class="wstep obstacles"></div>
<div class="wballoon flightmove"></div>
<div class="wball"></div>
<div class="whole2"></div>
<div class="rrocks2"></div>


		<div class="egyptwall"></div>
		
	<div class="rrocks"></div>
	</div>
	
<div class="mobilecontrolleft">&#9666;</div>
<div class="mobilecontrolright">&#9656;</div>
</div>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/detect-browser-device.js"></script>
	<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/jquery.js"></script>
	<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/jquery-ui.min.js"></script>
  <script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/materialize.min.js"></script>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/script.js"></script>
<script type="text/javascript">
	$("#pandafall").css({"left":$("#flight").offset().left+0.34*$("#flight").width()});
	 $(".button-collapse").sideNav();
</script>
</body>
</html>
