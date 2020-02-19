(function($){

	$(document).ready(function(){
 
		/*$(window).resize(
			function(){
				$('.g_map').width($(window).width());
				$('.g_map').css({width: $(window).width(), "margin-left": ($(window).width()/-2)});
			}
		).trigger('resize');*/

		$('.nav__primary>ul>li>a').each(function(){
	        var $this = $(this),
	            txt = $this.text();
		        $this.html('<div><span>'+ txt +'</span></div><div><span>'+ txt +'</span></div>');
		    });


		$(".title-section").each(function(){

			$(this).append('<div class="line_title"></div>'); 

		});


		$(".error404").each(function(){

			$(".header").append('<div class="top_line corr_1"></div>'); 

		});



	 	/*$(".block_10").find(".row-fluid").each(function(){

	 		var $thisNum = $(this),
	 			num = $(this).index() + 1;

			$(this).append('<div class="num">'+num+'.'+'</div>'); 

		}); */


	});

 
})(jQuery)