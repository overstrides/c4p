$(document).foundation();

$(document).ready(function() {

// removing href attributes for adaptive version - click instead hover
// except 2nd menu item
$(document).ready(function() {
	if ($(window).width() < '999') {
		$('nav a[href*="lifestyle"], nav a[href*="auto"]').removeAttr("href");
	}
});


// open and close menu on click
// background position for li and b are fixed
$(document).ready(function() {
	if ($(window).width() < '999') {
		$('nav > ul > li').click(function() {
			if ($(this).find('.submenu').is(':hidden')) {
				$('.submenu').hide();
				$(this).find('.submenu').show();
			}
			else {
				$(this).find('.submenu').hide();
				$('nav > ul > li').css('background-position-y', '0');
				$('nav > ul > li b').css('background-position-y', '0');
			}
		})
	}
})

//Delete text in social share buttons
$(document).ready(function() {
	if ($(window).width() < '767') {
		$('.big-share a.fb').empty();
		$('.big-share a.vk').empty();
		$('.big-share a.ok').empty();
	}
})


// search form in adaptive version(480 - 767px)
$("input[type='text'], input[type='search']").focus(function() {
	if (($(window).width() < '768') && ($(window).width() > '479')){
		$(".top2 a.logo").hide();
	}
});

$("input[type='text'], input[type='search']").blur(function() {
	if (($(window).width() < '768') && ($(window).width() > '479')) {
		$(".top2 a.logo").show();
	}    
});

// adding wrap to youtube iframe for its manipulating by css
$('iframe[src*="youtube"]').wrap("<div class='help-class-youtube-wrapper'></div>");





//podpiska();

/////// Fancy Zoom
$('.gal').fancybox();


////// Fotorama
if( $('.fotorama').length ) {
	$('.fotorama').fotorama({
	  width: 650,
	  maxwidth: '100%',
	  allowfullscreen: true,
	  nav: 'thumbs',
	  thumbwidth: 110,
	  thumbheight: 90
  });
}


////// Slider
if ( $("ul#news_slider").length ) {
	$("ul#news_slider").lightSlider({
		loop: true,
		pager: false,
		item: 1,
		mode: "fade",
		auto: true,
		pause: 25000,
		keyPress: true
	});
}


////// FLY TOP
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');
	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});
	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		}, scroll_top_duration
		);
	});


////// QUOTE
function validateEmail(email) { 
	var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(email);
}
$("#quoteBtn").on("click", function(){
	var emailval = $("#qemail").val();
	var mailvalid = validateEmail(emailval);
	if(mailvalid == false) { $("#qemail").addClass("error"); }
	else if(mailvalid == true){ $("#qemail").removeClass("error"); }

	var fnameval = $("#qname").val();
	var fnamelen = fnameval.length;
	if(fnamelen < 2) { $("#qname").addClass("error"); }
	else if(fnamelen >= 2) { $("#qname").removeClass("error"); }

	if(mailvalid == true && fnamelen >= 2) {
		$("#quoteBtn").replaceWith("<p style='font-weight: 500;'><em>отправляю...</em></p>");
		$.ajax({
			type: 'POST',
			url: '/quote-request',
			data: $("#formQuote").serialize(),
			success: function(data) {
				if(data == "true") {
					$(".fadening").fadeOut("fast", function(){
						$(this).before("<h2>Спасибо, что написали!</h2><h4>Мы обязательно свяжемся с вами</h4>");
						setTimeout("$('#modalQuote').foundation('reveal', 'close');", 3000);
					});
				}
			}
		});
	}
});


function podpiska() {  

  if (!$.cookie('wass')) {  
	setTimeout( function() {
		$('#modalSoc').foundation('reveal', 'open');
	}, 2000);
	
}  

  // Запомним в куках, что посетитель к нам уже заходил  
  $.cookie('wass', true, {  
	expires: 7,  
	path: '/'  
});  
  
}



});