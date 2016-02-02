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