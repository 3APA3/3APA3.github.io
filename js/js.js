jQuery(document).ready(function(){

	$(".header").css({ display:"none"});
	$(".header").show( "fold", 1000 );
	


// мило

$(".modalbox").fancybox();
    $("#f_contact").submit(function(){ return false; });
    $("#f_send").on("click", function(){
         
       $("#f_contact").fadeOut("fast", function(){
            $(this).before("<p><strong>Ваше сообщение отправлено!</strong></p>");
            setTimeout("$.fancybox.close()", 1000);
        });
    });


// якорь

$('.yak1').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top-100
      }, 1000);
      e.preventDefault();
   });

	
});

