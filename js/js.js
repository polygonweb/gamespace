(function($, undefined){
		
    $(function(){
    
        // сворачивание панелей
        $(".ui-side-panel__head").click(function(){
            
            var q = $(this).parent(".ui-side-panel");             
            q.children(".ui-list").slideToggle(650);
//            q.toggleClass("");
        });
        
        
        //кнопка "наверх"
        var offset = 500;
        var duration = 700;				
        var toTop = $('.ui-btn--to-top');
        
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                toTop.fadeIn(duration);
            } else {
                toTop.fadeOut(duration);
            }
        });
        
        toTop.click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
        
    });		
		
})(jQuery);