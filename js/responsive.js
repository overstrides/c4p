$(document).ready(function() {
	
	// removing href attributes for adaptive version - click instead hover
	// except 2nd menu item
	$(document).ready(function() {
		if ($(window).width() < '999') {
			$('nav a[href*="lifestyle"], nav a[href*="auto"]').removeAttr("href");
		}
	});

	$(document).ready(function() {
		if ($(window).width() < '999') {
			$('nav a[href*="lifestyle"], nav a[href*="auto"]').click(function() {
				if $(this).closest('.submenu').is(':visible') {
					$(this).closest('.submenu').hide();
				else
					$(this).closest('.submenu').show();
				};
			})
		}
	});








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

})