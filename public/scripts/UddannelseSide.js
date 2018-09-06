if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function () {
			console.log("Service Worker Registered");
		});
}

var lastopen = 0;
$(".shiny-btn-small").on("click", function () {
	var self = this;
	var selector = $(".tablediv"),
		i = 0;
	var current = $("#" + $(self).attr("id")).position().top - $("#topbar").outerHeight();
	selector.each(function () {
		var self2 = this;
		$(this).slideUp("slow", function (e) {
			if ($(self2).hasClass($(lastopen).attr("id"))) {
				var now = ($(self).offset().top - $("#topbar").outerHeight());
				if (parseInt(current) != parseInt(now))
					$([document.documentElement, document.body]).animate({
						scrollTop: $(self).offset().top - $("#topbar").outerHeight()
					}, 500);
			}
			i += 1;
			if (i == selector.length)
				lastopen = self;

		});

	});
	$(".shiny-btn-small").css("background", "");
	$(".shiny-btn-small").find("i").removeClass("arrow-down");
	if ($("." + $(this).attr("id")).css("display") == "block") {
		$(this).find("i").removeClass("arrow-down");
		return;
	}
	//$(this).css("background", "#004e5d");
	$(this).find("i").addClass("arrow-down");
	$("." + $(this).attr("id")).slideToggle("slow");

});

$("<style id='styling' type='text/css'>.indhold{padding-top: " + ($("header").outerHeight() + 10) + "px !important;}</style>").appendTo("head");

window.addEventListener('resize', function () {
	$("#styling").html("<style id='styling' type='text/css'>.indhold{padding-top: " + ($("header").outerHeight() + 10) + "px !important;}</style>");
});

// social media top image 
$("#headerImage").click(function () {
	var ua = navigator.userAgent;
	var checker = {
		iphone: ua.match(/(iPhone|iPod|iPad)/),
		android: ua.match(/Android/)
	};
	if (checker.android) {
		window.open("intent://#Intent;package=com.facebook.katana;scheme=fb://page/118797611557016?referrer=app_link;end");
	} else if (checker.iphone) {
		window.open("fb://profile/118797611557016");
	} else {
		window.open("https://da-dk.facebook.com/Campusfrederikssund/").show();
	}
});

// insert links

//http://www.campus.frederikssund.dk/

var array = {
	klasse10: "http://campusu10.dk/sp/p514428/text/Fag%20og%20skema",
	klassebusiness10: "https://www.knord.dk/om-10-klasse-eux-business.html",
	vuc: "http://www.vucns.dk/tilmelding-og-oekonomi/undervisningstilbud",
	stx: "http://frsgym.dk/stx",
	hf: "http://frsgym.dk/hf",
	htx: "https://frsgym.dk/htx/",
	hfenkeltfag: "http://www.vucns.dk/tilmelding-og-oekonomi/undervisningstilbud",
	hhx: "http://www.knord.dk/frederikssund-hhx/",
	euxbuisness: "https://www.knord.dk/frederikssund-eux-business/",
	eudbusiness: "http://www.knord.dk/frederikssund-eud-business",
	eux: "http://www.esnord.dk/uddannelser/erhvervsuddannelser/grundforloeb-1/",
	eud: "http://www.esnord.dk/uddannelser/eux/teknisk-eux/",
	omsorg: "http://sopu.dk/grundforlob/",
	sosuhjælper: "http://sopu.dk/grundforlob/",
	sosuass: "http://sopu.dk/grundforlob/",
	tømrer: "http://www.esnord.dk/uddannelser/erhvervsuddannelser/toemrer/",
	elektriker: "http://www.esnord.dk/uddannelser/erhvervsuddannelser/elektriker/",
	data: "http://www.tec.dk/erhvervsuddannelse/data-og-kommunikation/",
	produktion: "https://www.pffu.dk/",
	kombineret: "http://kuunord.dk/",
	trekløver: "http://xn--treklverskolen-uqb.dk/sp"
}
$("table tr td").closest("tr").on("click", function () {
	window.open(array[$(this).attr("id")], '_blank');
});

// $("#1").on("click", function(){
// 	$(this).addClass('selected').siblings().removeClass('selected');    
// 	var value=$(this).find('tr:first').html();
// 	window.open('https://www.codexworld.com', '_blank');  
// });
