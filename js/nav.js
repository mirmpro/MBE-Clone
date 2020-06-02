/*--------------------------------------------------
HISTORY
--------------------------------------------------*/
(function (window, undefined) {

    // Bind to StateChange Event
    History.Adapter.bind(window, 'statechange', function () { // Note: We are using statechange instead of popstate
        var State = History.getState(); // Note: We are using History.getState() instead of event.state
        // load another apparel category
		var urlEl = State.data.ajaxUrl;
		myTh = setTimeout(function(){
			if(!$('a[href*="'+urlEl+'"]').parents('.panel-heading').next().hasClass('in')){
			    if ($('#accordion .panel-collapse.in').size() > 0) {
			        $('#accordion .panel-collapse.in').each(function () { $(this).collapse('hide'); });
				}
				if(urlEl){
					$('a[href*="'+urlEl+'"]').parents('.panel-heading').next().collapse('show');
				}
			}
			clearTimeout(myTh);
		},400);
		
    });

})(window);

$(window).load(function () {
});

$(function () {
    if ($('#accordion').attr('data-href') != '' && $('#accordion').attr('data-href') != undefined) {
        $('#accordion').load($('#accordion').attr('data-href') + " #accordion > *", function () {
                $('a[href="' + decodeURI(location.pathname) + '"]').click();
        });
    }


    $('body').on("click", "a.dropdown-toggle", function (e) {
		myUrl = $(this).attr('href');
		myTitle = $(this).attr('title');
		History.pushState({ ajaxUrl: myUrl, page: $('#ajaxLoad').attr('data-href') }, myTitle, myUrl);
		//_gaq.push(['_trackPageview', myUrl]);
		e.preventDefault();
	});
});
