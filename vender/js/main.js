
var sticky = new Sticky('.sticky');
jQuery(document).ready(function(){
	$(".sobrefixed ").css('margin-top',($(window).height()-120)+'px'); 
	$("a.inside").click(function (e){
		 e.preventDefault();
		 var target=$(this).attr('href');
		 var velocity=$(document).find(target).offset().top/2.5; 
                $('html, body').animate({
                    scrollTop: $(document).find(target).offset().top
                }, velocity );
            });
});
