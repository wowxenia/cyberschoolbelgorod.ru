$( document ).ready(function() {
    console.log( "ready!" );
});



		$(function(){
			$('a[href^="#"]').click(function(){
				var target = $(this).attr('href');
				$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
				return false; 
			}); 
		});

