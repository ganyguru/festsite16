divArray=new Array();
speedArray=new Array();
var pageVerticalPosition = 0;
var pageVerticalPositionOnTouch = 0;
var previousPageVerticalPosition = 0;
var run=0;
var heroDiv = document.getElementById("hero-block");
var jump=0;
var dinocounter=1;
var dummyscroll1=0;
var dummyscroll2=0;
var end=0;
var mummified=0;
var boatified=0;
var kaakafied=0;
var jumpdivs=[];
tcontact=0;
var football=0;
var trans1=0;
var trans2=0;
var trans3=0;
var manhole=0;
var page1;
var obstaclestartindex=-1;
var obstacleendindex=-1;
var heroforward=0;
var herowidth=75;
var contactHorizontalDistance;
var lengthDiv=document.getElementById("layer-4");
var page2;
var heroRightEdge;
var heroLeftEdge;
var error=0;
var dummyscroll=0;
var fixedposition;
screenspeed=0.6
var touchStartX=0;
var jumpon=0;
var dinoRightEdge;
var selectedObstacle;
var dinoLeftEdge;
var dino=document.getElementById('dino-block');
var dinorun=0;
var herocounter=1;
mgate1=1;
var obstacles=new Array();
var currentobstacles=new Array();
var sandi=0;
mgate2=1;
var h=60;

disableScrollOrSwipe();
 
var deltaPageVerticalPosition = 0;
var containerDiv=document.getElementById('container');
	var pageDiv=document.getElementById('page');

var x = 0, y = 0,
    vx = 0, vy = 0,
  ax = 0, ay = 0;

if (!window.requestAnimationFrame) {

    window.requestAnimationFrame = (function() {

        return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame || // comment out if FF4 is slow (it caps framerate at ~30fps: https://bugzilla.mozilla.org/show_bug.cgi?id=630127)
        window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {

                window.setTimeout(callback, 1000 / 60);

        };

    })();

}


function KeyboardController(keys, repeat) {
    // Lookup of key codes to timer ID, or null for no repeat
    //
    var timers= {};

    // When key is pressed and we don't already think it's pressed, call the
    // key action callback and set a timer to generate another one after a delay
    //
    document.onkeydown= function(event) {
        var key= (event || window.event).keyCode;
        if (!(key in keys))
            return true;
        if (!(key in timers)) {
            timers[key]= null;
            keys[key]();
            if (repeat!==0)
                timers[key]= setInterval(keys[key], repeat);
        }
        return false;
    };

    // Cancel timeout and mark key as released on keyup
    //
    document.onkeyup= function(event) {
        var key= (event || window.event).keyCode;
        if (key in timers) {
            if (timers[key]!==null)
                clearInterval(timers[key]);
            delete timers[key];
            checkcounter();
        }
    };

    // When window is unfocused we may not get key events. To prevent this
    // causing a key to 'get stuck down', cancel all held keys
    //
    window.onblur= function() {
        for (key in timers)
            if (timers[key]!==null)
                clearInterval(timers[key]);
        timers= {};
    };
};



KeyboardController({
	37 : function(){
		RightandLeftedge()
		
		//if(checkobstacle(-1,0)==1 && canScrollOrSwipe==1)
		//	{heroback();
			//checkfall();
			heroback();
			if(boatified!=1)
			MoveHeroBack();
			if(mummified!=1)
				checkDragon();
			if(boatified!=1)
				checkBoatBack();
			if(kaakafied!=1)
				checkKaaka();
			
			backtransitions();
		//}


	},
	
	39 : function(){
		RightandLeftedge()
		finalcheck(1);
		//if(checkobstacle(1,0)==1 && canScrollOrSwipe==1 && end==0)
			//{
			//checkfall();
			if(end==0)
			herofront();
			if(boatified!=1 && end==0)
			MoveHeroFront();
			if(mummified!=1)
				checkDragon();
			if(boatified!=1)
				checkBoat();
			if(kaakafied!=1)
				checkKaaka();
			if(football!=1)
				checkBall();
			if(manhole!=1)
				checkHole();
			fronttransitions();
		//}
	}},1);



var salpi;
var sangili;

 $(".mobilecontrolright").bind('touchstart mousedown', function(){
 	if(canScrollOrSwipe==true)
       salpi=setInterval(rightactions,1);
   else
   {
   	clearInterval(salpi);
    clearInterval(sangili);
   }
    }).bind('touchend mouseup', function(){
        clearInterval(salpi);
        clearInterval(sangili);
        checkcounter();
    });

 $(".mobilecontrolleft").bind('touchstart mousedown', function(){
 	if(canScrollOrSwipe==true)
       sangili=setInterval(leftactions,1);
   else
   {
   	clearInterval(salpi);
    clearInterval(sangili);
   }
    }).bind('touchend mouseup', function(){
    	clearInterval(salpi);
        clearInterval(sangili);
        checkcounter();
    });



function leftactions()
{
    RightandLeftedge()
        
        heroback();          	
            	
            if(boatified!=1)
            MoveHeroBack();
            if(mummified!=1)
                checkDragon();
            if(boatified!=1)
                checkBoat();
            if(kaakafied!=1)
                checkKaaka();
            
           // backtransitions();
        

}

function rightactions()
{

    RightandLeftedge()
        finalcheck(1);
        if(end==0)
            herofront();
            
            if(boatified!=1)
            MoveHeroFront();
            if(mummified!=1)
                checkDragon();
            if(boatified!=1)
                checkBoat();
            if(kaakafied!=1)
                checkKaaka();
            if(football!=1)
                checkBall();
            if(manhole!=1)
                checkHole();
            fronttransitions();
        
    
}

function finalcheck(i)
{

if(i>0)
{
	if($(".nittree").offset().left+$(".nittree").width()+i<$("#container").width() )
		end=1;
	else
		end=0;
}


}

function checkBall()
{
	if($("#hero-block").offset().left+herowidth>$(".wball").offset().left)
	{
		football=1;
		$(".wball").animate({left:parseInt($(".whole1").css("left"),10)+0.5*$(".whole1").width()},1000,function(){
			$(".wball").animate({"bottom":-1*$(".wball").height()+"px"},500,function(){});
		});
	}
}
function checkHole()
{
	if($("#hero-block").offset().left+herowidth>$(".whole1").offset().left+$(".whole1").width()/2-1)
	{
		manhole=1;
		canScrollOrSwipe=false;
		$("#hero-block").animate({"bottom":-1*$("#hero-block").height()+"px"},1000,function(){
			$(".wegg").addClass("eggmove");
			eggmunda();

		});		
		
	}
}
function eggmunda()
{
	var inter=setInterval(function(){
			if($(".wegg").offset().left>10)
			{
				//$(".boat").offset().left+$(".boat")+10<$(".wobstacle").offset().left
				
				layerautomove();
					
			}
			else
			{
				clearInterval(inter);
				
				$(".wegg").stop().animate({bottom:parseInt($(".wegg").css("bottom"),10)+66},500,function(){

					$(".wegg").stop().animate({bottom:parseInt($(".wegg").css("bottom"),10)-66},500,function(){
						$(".brokeegg").show();
						$(".brokeegg").css({"width":$(".brokeegg").height()*1.898+"px","left":parseInt($(".wegg").css("left"),10)+"px","bottom":parseInt($(".wegg").css("bottom"),10)+"px"});						
						$(".wegg").hide();
						$("#hero-block").show();
						$(".whole1").hide();
						$(".whole2").hide();
			
						$("#hero-block").css({"bottom":0.05*$("#container").height()+40+"px"})
						
						$("#hero-block").css({"left":$(".brokeegg").offset().left+0.5*$(".brokeegg").width()+"px"});
						$("#hero-block").stop().animate({bottom:parseInt($("#hero-block").css("bottom"),10)+$(".brokeegg").height(),left:$("#hero-block").offset().left+0.35*$(".brokeegg").width()},1000,function(){
							$("#hero-block").stop().animate({bottom:parseInt($("#hero-block").css("bottom"),10)-$(".brokeegg").height()+"px",left:$("#hero-block").offset().left+0.35*$(".brokeegg").width()},1000,function(){
								
								canScrollOrSwipe=true;
							});
						});
												
						
					});
				});
				//$("#hero-block").stop().animate({bottom:0.05*$("#container").height()+40},200,function(){});
			}
		},0.05);
	//layerautomove();
}

	function disableScrollOrSwipe()
{
	canScrollOrSwipe = false;
}
function enableScrollOrSwipe()
{
	canScrollOrSwipe = true;
}

function loadingout()
{

	$("#farcloud").removeClass();
	$("#nearcloud").removeClass();
	$("#flight").removeClass();
	$("#farcloud").addClass("skyfall");
	$("#nearcloud").addClass("skyfall");
	$("#fallline").css({"display":"block"});
	$("#pandafall").css({"display":"block"});
	$("#flight").css({"background-position":"0px -408.56px"});
	//$("#container").show();
	//$("#container").css({"top":"100%"});
	$("#farcloud").appendTo(".sky1");
	$("#nearcloud").appendTo(".sky1");
	$("#sun").appendTo(".sky1");
	$("#flight").stop().animate({top:"-500px"},1500,function(){

		$("#farcloud").removeClass();
		$("#nearcloud").removeClass();	
		$("#farcloud").addClass("loading2");
		$("#nearcloud").addClass("loading1");
		$("#pandafall").css({"margin-top":"-70px"});
		$("#fallline").fadeOut();
		//$("#loading").hide();
			$("#pandafall").removeClass();
			$("#pandafall").addClass("fallground");
			$(".layer").addClass("groundup");
			setTimeout(function(){
				$("#pandafall").css({"display":"none"});
				$("#hero-block").show();
			},540);
			
	//


	});
	
}




window.onload = function()
{

	herowidth=0.7142*$("#hero-block").height();
	$("#hero").css({"height":$("#hero-block").height()+"px","width":0.7142*$("#hero-block").height()+"px"});
	console.log($("#hero").height());
	$("#hero").css({"background-size":12*$("#hero").width()+"px "+2*$("#hero").height()+"px"});
	$(".hero-block").css({"margin-left":-1*$("#hero").width+"px"});
	
	setTimeout(function(){
		loadingout();
		
	},2000);
	
		pageVerticalPosition=0;
previousPageVerticalPosition=0;
	CreateDivs();
	
	makePageScrollable();

		setElementProperties();
		if(deviceName=="computer")
		{
			$(".mobilecontrolright").hide();
			$(".mobilecontrolleft").hide();
		}
		else
		{
			mummified=1;
		}
		if($("#container").width()/$("#container").height()<1)
			$(".orientnotif").show();
		RightandLeftedge();
}
function checkcounter()
{
	if(heroforward==0)
	{
		if(herocounter>1)
		{
			$("#hero").removeClass();
			$("#hero").addClass("fhero12");
			herocounter=1;
			dummyscroll1=0;
			$("#hero").css({"background-position":-1*(11)*$("#hero").width()+"px "+0+"px"});	
		}
	}
	else
	{
		if(herocounter>1)
		{
			$("#hero").removeClass();
			$("#hero").css({"background-position":0*$("#hero").width()+"px "+-1*$("#hero").height()+"px"});	
			herocounter=1;
			dummyscroll2=0;
		}
	}

}

function setElementProperties()
{

	$(".castle").css({"width":0.485*$(document).width()+"px","left":0.5*$(document).width()+"px"});
	$(".chinawall").css({"width":1.971*$(".chinawall").height()+"px","left":0.1*$(document).width()+"px"});
	$(".abovegrass").css({"width":2.803*$(".abovegrass").height()+"px","left":-5+"px"});
	$(".towergrass").css({"width":2.045*$(".towergrass").height()+"px","left":($(document).width()-0.5*2.045*$(".towergrass").height())+"px"});
	$(".rivergrass").css({"width":7.18*$(".rivergrass").height()+"px","left":-5+"px"});
	$(".river1").css({"width":12.03*$(".river1").height()+"px","left":($(document).width()-12.03*$(".river1").height())+"px"});
	$(".river2").css({"width":24.5*$(".river2").height()+"px","left":($(document).width()-24.5*$(".river2").height())+"px"});
	$(".riverstone").css({"width":5.737*$(".riverstone").height()+"px","left":$(".river2").width()+parseInt($(".river2").css("left"),10)-30+"px"});
	$(".store").css({"width":1.704*$(".store").height()+"px","left":($(document).width()*0.4-1.704*$(".store").height())+"px"});
	$(".tower").css({"width":0.566*$(".tower").height()+"px","left":($(document).width()-1.2*0.566*$(".tower").height())+"px"});
	$(".dhead").css({"width":1.049*$(".dhead").height()+"px","left":(parseInt($(".tower").css("left"),10)-0.5*1.049*$(".dhead").height() + 0.171*$(".tower").width())+"px","bottom":0.8*$(".tower").height()-1.049*$(".dhead").height()+"px"});
	$(".dtail").css({"width":2.59*$(".dtail").height()+"px","left":(parseInt($(".tower").css("left"),10)+0.828*$(".tower").width())+"px","bottom":0.16*$("#tower").height()+$(".dtail").height()+"px"});
	$("#ash").css({"width":1.610*$("#ash").height()+"px","left":parseInt($(".tower").css("left"),10)+940+"px"});
	$("#ash").hide();
	
	$(".backwall").css({"width":23.93*$(".backwall").height(),"left":parseInt($(".towergrass").css("left"),10)+$(".towergrass").width()/2+"px","bottom":0.05*$("#container").height() -50+120-4+"px"});
	$(".reception").css({"width":1.428*$(".reception").height(),"left":5.0626*$(".backwall").height()+parseInt($(".backwall").css("left"),10)+"px"});
	$(".opentomb").css({"width":$(".opentomb").height()*0.566+"px","left":parseInt($(".reception").css("left"),10)-0.05*$("#container").height()-$(".opentomb").height()*0.566+"px"});
	$(".tombcover").css({"width":$(".tombcover").height()*0.566+"px","left":parseInt($(".opentomb").css("left"),10)-$(".opentomb").width()+"px"})
	$(".egyptwall").css({"width":4.626*$(".egyptwall").height(),"left":$(".reception").width()+parseInt($(".reception").css("left"),10)+10+"px"});
	$(".obs1").css({"width":0.921*$(".obs1").height(),"left":parseInt($(".egyptwall").css("left"),10)+10+"px"});
	$(".obs2").css({"width":3.296*$(".obs2").height(),"left":parseInt($(".obs1").css("left"),10)+$(".obs1").width()+"px"});
	$(".obs3").css({"width":0.888*$(".obs3").height(),"left":parseInt($(".obs2").css("left"),10)+$(".obs2").width()+"px"});
	$(".pharaoh").css({"width":1.012*$(".pharaoh").height(),"left":parseInt($(".egyptwall").css("left"),10)+$(".egyptwall").width()/2-1.012*$(".pharaoh").height()/2+"px","bottom":$(".egyptwall").height()+parseInt($(".egyptwall").css("bottom"),10)-5+"px"});
	
	$(".pyramid1").css({"width":1.905*$(".pyramid1").height(),"left":parseInt($(".reception").css("left"),10)+0.357*$(".reception").width()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+$(".backwall").height()-15+"px"});
	$(".pyramid2").css({"width":1.905*$(".pyramid2").height(),"left":parseInt($(".pharaoh").css("left"),10)+0.5*$(".pharaoh").width()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+0.594*$(".backwall").height()+"px"});
	$(".pyramid3").css({"width":1.905*$(".pyramid3").height(),"left":parseInt($(".egyptwall").css("left"),10)+$(".egyptwall").width()*0.8214+"px","bottom":parseInt($(".pyramid1").css("bottom"),10)+"px"});
	$(".kaaka").css({"width":1.868*$(".kaaka").height()/3,"left":parseInt($(".reception").css("left"),10)+0.44*$(".reception").width()+"px","bottom":parseInt($(".reception").css("bottom"),10)+0.258*$(".reception").height()+"px"});
	$(".kaaka").css({"background-size":3*$(".kaaka").width()+"px "+$(".kaaka").height()+"px","background-position":"-"+2*$(".kaaka").width()+1+"px 0px"});
	$(".palmtree").css({"width":0.827*$(".palmtree").height(),"left":parseInt($(".egyptwall").css("left"),10)+$(".egyptwall").width()+30+"px","bottom":parseInt($(".egyptwall").css("bottom"),10)+0.273*$(".egyptwall").height()});
	$(".lighttree").css({"width":0.283*$(".lighttree").height(),"left":parseInt($(".palmtree").css("left"),10)+$(".palmtree").width()+0.8*$(".backwall").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+0.55*$(".backwall").height()+"px"});
	$(".darktree").css({"width":0.262*$(".lighttree").height(),"left":parseInt($(".palmtree").css("left"),10)+$(".palmtree").width()+0.783*$(".backwall").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+$(".backwall").height()-10+"px"});
	$(".bridge").css({"width":1.66*$(".bridge").height(),"left":parseInt($(".lighttree").css("left"),10)+0.27*$("#container").height()+"px","bottom":0+"px"});
	$(".briver1").css({"width":12.534*$(".briver1").height(),"left":parseInt($(".lighttree").css("left"),10)+$(".lighttree").width()+0.233*$(".backwall").height()+"px","bottom":-1*(0.078*$("#container").height())+"px"});
	$(".briver2").css({"width":12.534*$(".briver2").height(),"left":parseInt($(".lighttree").css("left"),10)+$(".lighttree").width()+0.233*$(".backwall").height()+"px","bottom":parseInt($(".briver1").css("bottom"),10)+0.044*$("#container").height()+"px"});
	$(".briver3").css({"width":12.534*$(".briver3").height(),"left":parseInt($(".lighttree").css("left"),10)+$(".lighttree").width()+0.233*$(".backwall").height()+"px","bottom":parseInt($(".briver2").css("bottom"),10)+0.044*$("#container").height()+"px"});
	$(".boat").css({"width":1.136*$(".boat").height()+"px","left":10+parseInt($(".briver1").css("left"),10)+"px","bottom":0.022*$("#container").height()+"px"});
	$(".bcastle").css({"width":0.742*$(".bcastle").height()+"px","left":parseInt($(".bridge").css("left"),10)+0.675*($(".bridge").width())+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".highlights").css({"width":4.554*$(".highlights").height()+"px","left":parseInt($(".bridge").css("left"),10)+0.5*($(".bridge").width()-0.5*4.554*$(".highlights").height())+"px","bottom":0.37*$(".bridge").height()+"px"});
	$(".bgrass").css({"width":18.47*$(".bgrass").height()+"px","left":parseInt($(".briver1").css("left"),10)-0.2518*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)-3+"px"});
	$(".bmountain1").css({"width":3*$(".bmountain1").height()+"px","left":parseInt($(".lighttree").css("left"),10)-2+"px","bottom":parseInt($(".backwall").css("bottom"),10)+$(".backwall").height()-5+"px"});
	$(".bmountain2").css({"width":3*$(".bmountain2").height()+"px","left":parseInt($(".bmountain1").css("left"),10)+0.333*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+$(".backwall").height()-5+"px"});
	$(".wstep").css({"width":0.7117*$(".wstep").height()+"px","opacity":0,"left":parseInt($(".briver1").css("left"),10)+$(".briver1").width()-0.1148*$("#container").height()+"px","bottom":0+"px"});
	$(".rrocks2").css({"width":6.067*$(".rrocks2").height()+"px","left":parseInt($(".briver1").css("left"),10)+$(".briver1").width()-6.067*0.5*$(".rrocks2").height()+"px","bottom":0+"px"});
	$(".wgrass").css({"width":11.395*$(".wgrass").height()+"px","left":parseInt($(".wstep").css("left"),10)+$(".wstep").width()+"px","bottom":parseInt($(".backwall").css("bottom"),10)-3+"px"});
	$(".eiffel").css({"width":0.737*$(".eiffel").height()+"px","left":parseInt($(".wgrass").css("left"),10)+0.163*$("#container").width()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".wmountain1").css({"width":1.654*$(".wmountain1").height()+"px","left":parseInt($(".briver1").css("left"),10)+$(".briver1").width()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".wmountain2").css({"width":1.654*$(".wmountain2").height()+"px","left":parseInt($(".briver1").css("left"),10)+$(".briver1").width()+0.348*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".wmountain3").css({"width":1.654*$(".wmountain3").height()+"px","left":parseInt($(".briver1").css("left"),10)+$(".briver1").width()+0.767*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".wtower1").css({"width":0.278*$(".wtower1").height()+"px","left":parseInt($(".wgrass").css("left"),10)+0.652*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".wtower2").css({"width":0.689*$(".wtower2").height()+"px","left":parseInt($(".wgrass").css("left"),10)+0.718*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".wball").css({"width":1*$(".wball").height()+"px","left":parseInt($(".wgrass").css("left"),10)+0.229*$("#container").height()+"px","bottom":0.05*$("#container").height()+40+"px"});
	$(".whole1").css({"width":0.9611*$(".whole1").height()+"px","left":parseInt($(".wgrass").css("left"),10)+0.467*$("#container").height()+"px","top":$("#container").height()+10-parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".whole2").css({"width":1.208*$(".whole2").height()+"px","left":parseInt($(".wgrass").css("left"),10)+0.467*$("#container").height()+"px","top":$("#container").height()+17-parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".wegg").css({"width":0.734*$(".wegg").height()+"px","left":parseInt($(".wtower2").css("left"),10)+0.303*$("#container").height()+"px","bottom":0.05*$("#container").height()+40+10+"px"});
	$(".wobstacle").css({"width":1.787*$(".wobstacle").height()+"px","left":parseInt($(".wgrass").css("left"),10)+$(".wgrass").width()-5+"px","bottom":0.05*$("#container").height()+50-50.77+"px"});
	$(".wballoon").css({"width":0.74*$(".wballoon").height()+"px","left":parseInt($(".wegg").css("left"),10)+0.311*$("#container").height()+"px","bottom":0.956*$("#container").height()-$(".wballoon").height()+"px"});
	$(".rrocks").css({"width":6.067*$(".rrocks").height()+"px","left":parseInt($(".bgrass").css("left"),10)-0.111*$("#container").height()+"px","bottom":0+"px"});
	$(".compound").css({"width":6.645*$(".compound").height()+"px","left":parseInt($(".wegg").css("left"),10)+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".rockfort").css({"width":0.8648*$(".rockfort").height()+"px","left":parseInt($(".wballoon").css("left"),10)+0.1704*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".orion").css({"width":1.157*$(".orion").height()+"px","left":parseInt($(".rockfort").css("left"),10)+0.4222*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".bushes").css({"width":1.477*$(".bushes").height()+"px","left":parseInt($(".rockfort").css("left"),10)+0.5147*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".blimp").css({"width":0.2742*$(".blimp").height()+"px","left":parseInt($(".rockfort").css("left"),10)+0.7481*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".clock").css({"width":0.3349*$(".clock").height()+"px","left":parseInt($(".rockfort").css("left"),10)+1.4296*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".contacts").css({"width":3.205*$(".contacts").height()+"px","left":parseInt($(".clock").css("left"),10)+"px","bottom":parseInt($(".backwall").css("bottom"),10)+0.17037*$("#container").height()+"px"});
	$(".nittree").css({"width":0.4627*$(".nittree").height()+"px","left":parseInt($(".clock").css("left"),10)+0.3259*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".nitsky").css({"width":2.494*$(".nitsky").height()+"px","left":parseInt($(".rockfort").css("left"),10)+0.437*$("#container").height()+"px","bottom":parseInt($(".backwall").css("bottom"),10)+"px"});
	$(".fire").css({"width":0.946*$(".fire").height()+"px","left":parseInt($(".dhead").css("left"),10)+0.092*$("#container").height()-0.946*$(".fire").height()+"px","bottom":parseInt($(".dhead").css("bottom"),10)+0.074*$("#container").height()-$(".fire").height()+"px"});
	$(".fire").css({"background-size":$(".fire").width()*2+"px "+$(".fire").height()+"px"})
	$(".fire").css({"background-position":"0px 0px"});
	$(".fire").hide();
	
	$(".eyeline1").css({"left":parseInt($(".pharaoh").css("left"),10)+0.39*$(".pharaoh").width()+"px","bottom":parseInt($(".pharaoh").css("bottom"),10)+0.68*$(".pharaoh").height()+"px","width":0.063*$(".pharaoh").width()+"px","height":0.063*$(".pharaoh").width()+"px"});
	$(".eyeline2").css({"left":parseInt($(".pharaoh").css("left"),10)+0.55*$(".pharaoh").width()+"px","bottom":parseInt($(".pharaoh").css("bottom"),10)+0.68*$(".pharaoh").height()+"px","width":0.063*$(".pharaoh").width()+"px","height":0.063*$(".pharaoh").width()+"px"});


}

function RightandLeftedge()
{
	var x = $(".hero-block").offset().left+1+herowidth/2;
	var y=$(".hero-block").offset().left+1+herowidth/2
	heroLeftEdge = Math.floor($(".hero-block").offset().left+1+herowidth/2);
	heroRightEdge = Math.ceil($(".hero-block").offset().left+herowidth/2+herowidth);
}

function fronttransitions()
{
	if($("#hero-block").offset().left+herowidth>($(".pyramid3").offset().left+$(".pyramid3").width()+0.037*$("#container").height()) && trans1==0)
	{
		trans1=1;
		$("#loading").animate({
       backgroundColor:"#3a0e44"
    }, { duration: 3000, queue: false });
	}
	else
	if($("#hero-block").offset().left+herowidth>($(".bridge").offset().left+$(".bridge").width()+0.233*$("#container").height())&&trans2==0)
	{
		trans2=1;
		$("#loading").animate({
       backgroundColor:"#7bbdff"
    }, { duration: 3000, queue: false });
	}
	if($("#hero-block").offset().left+herowidth>($(".rockfort").offset().left+$(".rockfort").width()+0.0518*$("#container").height())&&trans3==0)
	{
		trans3=1;
		$("#loading").animate({
       backgroundColor:"#353535"
    }, { duration: 3000, queue: false });
	}
}
function backtransitions()
{
	//console.log("ho");	
}
function checkDragon()
{
	if($("#hero-block").offset().left+140> $(".dhead").offset().left)
	{
		$("#hero-block").fadeOut();
		
		canScrollOrSwipe=false;
		savapatti();
	}
}
function checkBoat()
{
	if($("#hero-block").offset().left+herowidth> $(".boat").offset().left+0.5*$(".boat").width() && ($(".boat").offset().left+$(".boat").width()+3<$(".wstep").offset().left))
	{
		
		

		//canScrollOrSwipe=false;
		boatified=1;
	}
}
function checkBoatBack()
{
	
	if($("#hero-block").offset().left+herowidth> $(".rrocks").offset().left+0.5*$(".rrocks").width() && ($("#hero-block").offset().left+$("#hero-block").width()+3<$(".wstep").offset().left) )
	{		
		boatified=1;
	}
	else
		boatified=0;
}

function checkKaaka()
{
	
	if($("#hero-block").offset().left+92> $(".kaaka").offset().left)
	{
		//$("#hero-block").fadeOut();
		$(".kaaka").addClass("parapara");
		canScrollOrSwipe=false;
		kaakaflying();
	}
}
function kaakaflying()
{
	
	canScrollOrSwipe=false;
	var j=0;
	$(".kaaka").stop().animate({bottom:parseInt($(".pharaoh").css("bottom"),10)+0.42*$(".pharaoh").height()+"px",left:parseInt($(".pharaoh").css("left"),10)+0.74*$(".pharaoh").width()+"px"},3000,function(){
		$(".kaaka").removeClass("parapara");
		$("kaaka").css({"background-position":"-"+2*$(".kaaka").width()+1+"px 0px"});
		var eye = new DrawEye("eye1", "pupil1", parseInt($(".pharaoh").css("left"),10)+0.39*$(".pharaoh").width(), $("#container").height()-parseInt($(".pharaoh").css("bottom"),10)-0.75*$(".pharaoh").height(), 0.063*$(".pharaoh").width());
		var eye = new DrawEye("eye2", "pupil2", parseInt($(".pharaoh").css("left"),10)+0.55*$(".pharaoh").width(), $("#container").height()-parseInt($(".pharaoh").css("bottom"),10)-0.75*$(".pharaoh").height(), 0.063*$(".pharaoh").width());
		$(".eyeline1").hide();
		$(".eyeline2").hide();
	});
	kaakafied=1;
		canScrollOrSwipe=true;

	
}
function savapatti()
{
	
	canScrollOrSwipe=false;
	$(".fire").show();
	//setTimeout(function(){$("#ash").fadeOut();},1000);
	$(".soot").fadeIn();
	$(".soot").css({"left":parseInt($(".dhead").css("left"),10)+"px"});
	
	for(i=0;i<$(".black").length;i++)
	{
		$($(".black")[i]).addClass("black"+(i+1));
	}
	 
	 $("#sun").animate({
       backgroundColor:"white"
    }, { duration: 3000, queue: false });
	 	var inter=setInterval(function(){
	 	
			if($(".opentomb").offset().left>$(".opentomb").width()+5)
			{						
				layerautomove();				
			}
			else
			{
				clearInterval(inter);
				

					$(".tombcover").stop().animate({left:parseInt($(".opentomb").css("left"),10)+"px"},500,function(){
					$(".tombcover").addClass("shake");
					$(".opentomb").addClass("shake");
					$(".black").hide();
					$(".opentomb").css({"background-image":"ecoffin.svg"});
					setTimeout(function(){

						$(".tombcover").stop().animate({left:parseInt($(".tombcover").css("left"),10)-$(".opentomb").width()+"px"},500,function(){
							$("#hero-block").show();
							$("#hero-block").css({"left":$(".opentomb").offset().left+0.5*$(".opentomb").width()+"px"});
							$("#hero-block").hide();
							$("#hero-block").fadeIn("400",function(){canScrollOrSwipe=true;});
							mummified=1;
							
							$(".fire").hide();
						});
					},1600)
				});
				
				
			}
		},0.1);

	
}
function MoveHeroBack()
{

	heroforward=0;
	var pos=0;
	
		if(herocounter<12)
		{
			dummyscroll1++;
			if(dummyscroll1%13==0)
		{
			herocounter++;
			dummyscroll1=0;
		}

		}
		else
			{
				herocounter=1;
				
			}
			/*if(herocounter==1 || herocounter==2)
				page1=pageVerticalPosition;
			if(herocounter==4 || herocounter==3)
				page2=pageVerticalPosition;*/
	//console.log(herocounter);
	
	$("#hero").removeClass();

	$("#hero").css({"background-position":-1*(herocounter-1)*$("#hero").width()+"px "+0+"px"});	
	

}
function MoveHeroFront()
{
	if(canScrollOrSwipe)
	{

		heroforward=1;
		var pos=0;
	
		if(herocounter<12)
		{
			dummyscroll2++;
			if(dummyscroll2%13==0)
		{
			herocounter++;
			dummyscroll2=0;
		}

		}
		else
			{
				herocounter=1;
				
			}
			/*if(herocounter==1 || herocounter==2)
				page1=pageVerticalPosition;
			if(herocounter==4 || herocounter==3)
				page2=pageVerticalPosition;*/
	//console.log(herocounter);
	

			$("#hero").css({"background-position":-1*(12-herocounter)*$("#hero").width()+"px "+-1*$("#hero").height()+"px"});	
	
}
}
function addObstacles()
{
	var len = $(".obstacles").length;
	for(i=0;i<len;i++)
		obstacles.push($(".obstacles")[i]);

}
function transitions()
{
	if ( (pageVerticalPosition+10 > 1600))
	$("body").stop().animate({backgroundColor: ["#ff0000", 'easeInCubic']}, 90, function() {});
}
function makePageScrollable()
{
	
	enableScrollOrSwipe();
}

function CreateDivs()
{
	var divs=document.getElementsByClassName('layer');
	for(i=0;i<divs.length;i++)
	{
		divArray.push(divs[i]);
	}
	while (speedArray.length > 0)
	{
    	speedArray.pop();
  	}
	
	
	//fill array
	for (var i=0; i<divArray.length; i++)
	{
		var layerHorizontalSpeed= (divArray[i].offsetWidth - containerDiv.offsetWidth) / (divArray[divArray.length - 1].offsetWidth - containerDiv.offsetWidth);
		speedArray.push(layerHorizontalSpeed);
	}
}

function setPageHeight()
{
	
	pageDiv.style.height = (1+screenspeed)*(divArray[divArray.length - 1].offsetWidth - containerDiv.offsetWidth) +"px";
}
function moveLayers()
{
	//for (var i=0; i<divArray.length; i++)
	//	{
	i=2;
			divArray[2].style.left = (-1.2 * speedArray[2] * pageVerticalPosition) + "px";
			if(boatified==1 && deltaPageVerticalPosition>0)
			{
				$(heroDiv).css({'left':($(".boat").offset().left+0.5*$(".boat").width()+"px")});
			}
	//	}
}

function heroback()
{
	if($(heroDiv).offset().left>$(".boat").width()/2)
	{
		if(boatified!=1)
			$(heroDiv).css({'left':(heroDiv.offsetLeft-1)});
		else if(boatified==1 && $(".boat").offset().left-10>$(".rrocks").offset().left+0.5*$(".rrocks").width())
		{
			$("#hero").css({"background-position":-1*(12-herocounter)*$("#hero").width()+"px "+0*$("#hero").height()+"px"});	
			$(".boat").css({'left':(parseInt($(".boat").css("left"),10)-1.2+"px")});
			$(heroDiv).css({'left':(heroDiv.offsetLeft-1)});
		}
	}
	else if(pageVerticalPosition>0)
	{
		deltaPageVerticalPosition=-1.8;
		previousPageVerticalPosition=pageVerticalPosition;
		pageVerticalPosition+=deltaPageVerticalPosition;
		if(boatified==1 && $(".boat").offset().left-10>$(".rrocks").offset().left+0.5*$(".rrocks").width())
			$(".boat").css({'left':(parseInt($(".boat").css("left"),10)-1.2+"px")});
		else
			boatified=0;

		moveLayers();
	}
}
function herofront()
{
	if(canScrollOrSwipe==true)
	{
	if($(heroDiv).offset().left+$(heroDiv).width()+37.5<$("#container").width()/2)
	{
		if(boatified!=1)
			$(heroDiv).css({'left':(heroDiv.offsetLeft+1)});
		else if(boatified==1)
		{
			$("#hero").css({"background-position":-1*(12-herocounter)*$("#hero").width()+"px "+-1*$("#hero").height()+"px"});	
			
			$(".boat").css({'left':(parseInt($(".boat").css("left"),10)+1.2)});
			$(heroDiv).css({'left':(heroDiv.offsetLeft+1)});
			if(($(".boat").offset().left+$(".boat").width()>$(".wstep").offset().left+$(".wstep").width()/2))
			{
				

				boatified=0;
				
				
			}
		}
	}
	else
	{
		deltaPageVerticalPosition=1.8;
		previousPageVerticalPosition=pageVerticalPosition;
		pageVerticalPosition+=deltaPageVerticalPosition;
		moveLayers();
	}
}
}
function layerautomove()
{
		deltaPageVerticalPosition=1.5;
		previousPageVerticalPosition=pageVerticalPosition;
		pageVerticalPosition+=deltaPageVerticalPosition;
		moveLayers();
}
function herojump()
{
	

	if(anim==0)
	{
		
		
	jumpup();
}
         
}


var DrawEye = function(eyecontainer, pupil, eyeposx, eyeposy, eyer){
  $("#eyelid").append("<div id='" + eyecontainer + "'><div id='" + pupil + "'></div></div>")
  
  eyecontainer = "#" + eyecontainer;
  pupil = "#" + pupil;
  
  $(eyecontainer).css({left:eyeposx, top:eyeposy});
  $(pupil).css({width:eyer*0.4,height:eyer*0.4});
  $(eyecontainer).css({width:eyer,height:eyer});
  $(pupil).css({position: 'relative', background: '#000000', 'border-radius':'50%'});
  $(eyecontainer).css({position:'absolute', background:'#FFFFFF', overflow:'hidden', 'border-radius': '50%'});
  
  // Initialise core variables
  var r = $(pupil).width()/2;
  var center = {
    x: $(eyecontainer).width()/2 - r, 
    y: $(eyecontainer).height()/2 - r
  };
  var distanceThreshold = $(eyecontainer).width()/2 - r;
  var mouseX = center.x, mouseY = center.y;
  
  // Listen for mouse movement
  $(window).mousemove(function(e){ 
    var d = {
      x: e.pageX - r - eyeposx - center.x,
      y: e.pageY - r - eyeposy - center.y
    };
    var distance = Math.sqrt(d.x*d.x + d.y*d.y);
    if (distance < distanceThreshold) {
      mouseX = e.pageX - eyeposx - r;
      mouseY = e.pageY - eyeposy - r;
    } else {
      mouseX = d.x / distance * distanceThreshold + center.x;
      mouseY = d.y / distance * distanceThreshold + center.y;
    }
  });
  
  //accelerometer
 if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = function(e) {
    ax = event.accelerationIncludingGravity.x * 5;
    ay = event.accelerationIncludingGravity.y * 5;
  
 var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
    if ( landscapeOrientation) {
      vx = vx + ay;
      vy = vy + ax;
    } else {
      vy = vy - ay;
      vx = vx + ax;
    }
    vx = vx * 0.98;
    vy = vy * 0.98;
    y = parseInt(y + vy / 50);
    x = parseInt(x + vx / 50);
    
    
    
   var pupil = $(pupil);
  var xp = center.x, yp = center.y;
  var loop = setInterval(function(){
    // change 1 to alter damping/momentum - higher is slower
    xp += (x - xp) / 1;
    yp += (y - yp) / 1;
    pupil.css({left:xp, top:yp});    
  }, 1);

    
  
} 

  }


   



  // Update pupil location
  var pupil = $(pupil);
  var xp = center.x, yp = center.y;
  var loop = setInterval(function(){
    // change 1 to alter damping/momentum - higher is slower
    xp += (mouseX - xp) / 1;
    yp += (mouseY - yp) / 1;
    pupil.css({left:xp, top:yp});    
  }, 1);
};