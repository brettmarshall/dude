(function($){

	window.the_dude_brand = {};

	var DUDE = window.the_dude_brand;	
	
	var $window = $(window);

	DUDE.init = function(){
		DUDE.scroller();
	};	

	DUDE.scroller = function()	{

		var smooth = {
		    Scroll: function(item, speed)	{
					// when the item is clicked
					item.click(function() {
						// grab the html document and / or the body
						$("html, body").animate({
						// grab the item clicked's href and get the distance between this element
						//and the element it is scrolling to
							scrollTop: $($(this).attr("data-location")).offset().top + "px"
						}, {
							duration: speed,
							easing: "swing"
						});
						return false;
					});
			} // end of scroll
		}; // end of smooth object literal
		// runs the function using these links or buttons


		smooth.Scroll($('.director'), 1000);

	}


	DUDE.reveal = function()	{
		var overlay = $('.overlay');		

		window.setTimeout(function()	{
			overlay.addClass('animated fadeOut');

			window.setTimeout(function()	{
				overlay.hide();
			}, 500);
		}, 2000);
	}

	$(document).ready(function()	{
		DUDE.init();
	});

	$window.load(function(){
		DUDE.reveal();
	});	

})(window.jQuery);
