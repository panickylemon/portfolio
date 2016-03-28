$(document).ready(function(){

    $(".fa-bars").click(function() {
        $(".menuMobile").slideToggle("slow");
    });

    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });

});


jQuery(window).resize(function(){
    jQuery(".menuMobile").hide();
});
jQuery(window).resize();

