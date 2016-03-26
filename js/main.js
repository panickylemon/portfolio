$(document).ready(function(){

    $(".fa-bars").click(function() {
        $(".menuMobile").slideToggle("slow");
    });

});


jQuery(window).resize(function(){
    jQuery(".menuMobile").hide();
});
jQuery(window).resize();