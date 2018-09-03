$(".shiny-btn-small").on("click", function(){
	$(".tablediv").slideUp("slow");
	$(".shiny-btn-small").css("background", "");
	$(".shiny-btn-small").find("i").removeClass("arrow-down");
	if($("." + $(this).attr("id")).css("display") == "block")
	{
		$(this).find("i").removeClass("arrow-down");
		return;
	}
	//$(this).css("background", "#004e5d");
	$(this).find("i").addClass("arrow-down");
	 $("." + $(this).attr("id")).slideToggle("slow");
});

$("<style id='styling' type='text/css'>.indhold{padding-top: "+($("header").outerHeight()+ 10)+"px !important;}</style>").appendTo("head");

window.addEventListener('resize', function(){
    $("#styling").html("<style id='styling' type='text/css'>.indhold{padding-top: "+($("header").outerHeight() + 10)+"px !important;}</style>");
	});