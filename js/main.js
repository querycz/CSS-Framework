$(document).ready(function() {


	// Fancybox
	$("a[rel=gallery]").fancybox({
		'transitionIn' : 'elastic',
		'transitionOut' : 'elastic',
		//'overlayOpacity' : 0,
		//'padding' : 3,
		'titleShow' : true,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});


	// Přepínač mobilní navigace
	var par = $('.navbar-mobile');
	//$(par).hide();
	
	$('.navbar-mobile-toggle').click(function(e) {
		$(par).slideToggle('slow');
		e.preventDefault();
	});


});