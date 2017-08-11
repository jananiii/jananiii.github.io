$(window).scroll(function(){
    if($(window).scrollTop() == 0){
        $("header").css("background-color", "rgba(48,56,65,0.6)");
    }
    else{
        $("header").css("background-color", "rgba(48,56,65,1)");
    }
});

$(document).ready(function(){
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - $("header").height()
            }, 1000);
            return false;
          }
        }
      });
    });
    
    $("#preloader").delay(3000).fadeOut();
});

