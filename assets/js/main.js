jQuery(function(){
	var $ = jQuery,
		selector = "#navbar > .navbar-collapse > ul > li",
		active = "active";
	$(selector).click(function(event){
		$(selector).removeClass(active);
		$(this).addClass(active);
	});
});