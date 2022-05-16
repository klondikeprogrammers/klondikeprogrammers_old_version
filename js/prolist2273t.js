function scrollNav() {
  $('nav a').click(function(){   
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });
}
scrollNav();

$(function() {
	var $menu_popup = $('.menu-popup');
	
	$(".menu-triger, .menu-close").click(function(){
		$menu_popup.slideToggle(300, function(){
			if ($menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
});