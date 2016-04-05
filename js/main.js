/************hover***************/

$(function() {
    $('.gallary').sliphover({
        height: '35%',
        textAlign:'left',
        backgroundColorAttr: 'data-background'
    });
});

/**********for sort portfolio****************/

$(function(){

	$('.gallary').mixItUp({
		animation: {
			duration: 850,
			effects: 'fade translateZ(500px) translateX(100%) scale(0.29)',
			easing: 'ease',
			animateResizeContainer: false
		}
});
});

/*****************navigation****************/

$('.menu-ico').on('click', function() {
	$('.heading-n').show();
	$('.dark').show();
	if( $(this).hasClass('change') ) {
		$(this).removeClass('change');		
		$('.profile').addClass('no-see');
		$('.menu-one').addClass('no-see');
		$('.bgimg-l').addClass('no-see');
		$('.bgimg-m').removeClass('no-see');
		$('.bdy').removeClass('slide');
		$('.bdy').addClass('col-md-9');
		$('.bdy').removeClass('col-sm-12');
		$('.work-experience').css( "width", $('.work-experience').width()/0.75 );
		$('.skill').css( "width", $('.skill').width()/0.75 );
		$('.tabs').css("width", $('.tabs').width()/0.75);
		$('.gallary').css("width", $('.gallary').width()/0.75);
		$('.contact').css("width", $('.contact').width()/0.7);
		$('.full-portfolio').css("width", $('.full-portfolio').width()/0.81);
		$('#port').css("width", $('#port').width()/0.75);
		$('.brand').css("width", $('.brand').width()/0.81);


	}
	 else {
		$('.profile').removeClass('no-see');
		$('.menu-one').removeClass('no-see');
		$('.bgimg-l').removeClass('no-see');
		$('.bgimg-m').addClass('no-see');
		$('.bdy').addClass('slide');
		$('.bdy').removeClass('col-md-9');
		$(this).addClass('change');
		$('.bdy').removeClass('col-md-9');
		$('.bdy').addClass('col-sm-12');
		$('.work-experience').css("width", $('.work-experience').width()*0.75 );
		$('.skill').css( "width", $('.skill').width()*0.75 );
		$('.tabs').css("width", $('.tabs').width()*0.75);
		$('.gallary').css("width", $('.gallary').width()*0.75);
		$('.contact').css("width", $('.contact').width()*0.75);
		$('.full-portfolio').css("width", $('.full-portfolio').width()*0.81);
		$('#port').css("width", $('#port').width()*0.75);
		$('.brand').css("width", $('.brand').width()*0.81);




	}
});


/****************heading***************/
$(document).ready(function() {
   function paralax(){
	var para = document.getElementById('para');
	var me1 = document.getElementsByClassName('me1');
	para.style.top = window.pageYOffset+'px';
	me1.style.top = -(window.pageYOffset/6)+'px'


} ;
window.addEventListener("scroll ", paralax ,false);
  });


var parallex =$('.bgimg-m').height();




/***************nav effecct*************/

$(document).ready(function() {
	$(".animsition").animsition({

		linkElement:'.animsition-link',
		loading:true,
		loadingParentElement:'body',
		loadingClass:'animsition-loading',
		timeout:false,
		timeoutCountdown:5000,
		onLoadEvent: true,
		browser:['animation-duration','-webkit-animation-duration'],
		overlay:false,
		overlayClass:'animsition-overlay-slide',
		overlayParentElement:'body',
		transition:function(url){window.location.href=this;}
	});
	
});
