getprimed = function(){
	var default_padding = 15;	
	var navigation = $(".pjs-navigation");
	var footer = $(".pjs-navigation");
	
	//set full height
	var pjs_full_height = $(window).height() - (navigation.outerHeight(true) + footer.outerHeight(true));
	$(".pjs-full-height").each(function(){
		var padding = $(this).innerHeight() - $(this).height();
		$(this).height(pjs_full_height - padding);
	});
	
	//fill parent div
	$(".pjs-fill").each(function(){
		var parent = $(this).parent(); //default
		if($(this).attr('pb-parent') !== undefined)
			parent = $($(this).attr('pb-parent'));
		
		$(this).width(parent.width()).height(parent.height());	
	});
	
	//center vertically
	$(".pjs-center-vertically").each(function(){
		var parent = $(this).parent(); //default
		if($(this).attr('pb-parent') !== undefined)
			parent = $($(this).attr('pb-parent'));
			
		var margin = (parent.height() - $(this).height()) / 2;
		margin = margin > default_padding ? margin : default_padding;
		$(this).css("margin-top", margin + "px");
	});
	
	//position objects at bottom of parent			
	$(".pjs-position-bottom").each(function(){
		$(this).css("margin-top", "0px");
		var parent = $(this).parent().height();
		var margin = parent - $(this).outerHeight(true);
		margin = margin > default_padding ? margin : default_padding;
		$(this).css("display", "inline-block").css("margin-top", margin + "px");
	});
}

$(document).ready(function() {
	getprimed();
});

$(window).load(function() {
	getprimed();
});

$(window).resize(function() {
	getprimed();
});