$(function() {
	//cache the window object
	var $window = $(window);

	//parallax effect

	$('section[data-type="background"]').each(function(){

		var $bgobj = $(this); //asigning the object

		$(window).scroll(function() {

			//scroll the background at var speed
			// the ypos is negative value becuase we are scrolling it up

			var yPos= -($window.scrollTop() /
			 $bgobj.data('speed'));

			//put together our final background position
			var coords = '50%' + yPos +'px';

			//move the background
			$bgobj.css({ backgroundPosition: coords});


		}); // end window scroll
	});
});

