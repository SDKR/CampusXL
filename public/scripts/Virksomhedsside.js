if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/sw.js')
             .then(function() { console.log("Service Worker Registered"); });
  }

$(document).ready(function(){

    $("<style id='styling' type='text/css'>.contentarea{padding-top: "+($("header").outerHeight()+ 10)+"px !important;}</style>").appendTo("head");

window.addEventListener('resize', function(){
    $("#styling").html("<style id='styling' type='text/css'>.contentarea{padding-top: "+($("header").outerHeight() + 10)+"px !important;}</style>");
 });
});

$(".close").on("click", closeInfo);
$(".center img").on("click", openInfo);
// $(".readMore").on("click", openInfo);

// scocial media 

$("#headerImage").click(function() {
    var ua = navigator.userAgent;
    var checker = {
        iphone: ua.match(/(iPhone|iPod|iPad)/),
        android: ua.match(/Android/)
      };
      if (checker.android){
        window.open("intent://#Intent;package=com.facebook.katana;scheme=fb://page/118797611557016?referrer=app_link;end");
      }
      else if (checker.iphone){
        window.open("fb://profile/118797611557016");
      }
      else {
        window.open("https://da-dk.facebook.com/Campusfrederikssund/").show();
      }
  });


var virksomhedsArray = {
frederikssund_kommune: 'frederikssund-kommune.html',
frederikssund_business: 'frederikssund-business.html',
"3_byg_tag_&_facade_aps": '3-byg-tag-&-facade-aps.html',
 "topsil_a/s": 'topsil.html',
 stark: 'stark.html',
 sillebroen: 'sillebroen.html',
 "mangor_&_nagel_a/s": 'mangor-&-nagel.html',
 "lomax_a/s": 'lomax.html',
 "mountain_top_industries_aps": 'mountain-top-industries.html',
 salling_group: 'salling_group.html',
 husmer_glas_og_facade: 'husmer-glas-og-facade.html',
 "haldor_topsøe_a/s": 'haldor-topsøe.html',
 "h._helbo_hansen_a/s": 'h.-helbo-hansen.html',
 "anlægsgartner_gottlieb_a/s": 'anlægsgartner-gottlieb.html',
 "el-abc_a/s": 'el-abc.html',
 "co-ro_a/s": 'co-ro.html',
 campus_frederikssund: 'campus-frederikssund.html',
 "brenntag_biosector_a/s": 'brenntag-biosector.html',
 bautahøj_konferencecenter: 'bautahøj-konferencecenter.html',
 "bang_nielsen_a/s": 'bang-nielsen.html',
 "attendo_a/s": 'attendo.html',
 "procom_a/s": 'procom.html',
}



function openInfo(){
    if ($(window).width() < 800)
        $("#topbar").animate({
            left: '-100%'
        });
    else
        $("#topbar").animate({
            top: '-50%'
        });
        var company = $(this).closest(".contentbox").find("h2").html();
        var companyrep = company.toLowerCase();
        console.log(companyrep);
        while(companyrep.indexOf(" ") != -1)
        companyrep = companyrep.replace(" ", "_");
        companyrep = companyrep.replace("amp;", "");
        console.log(companyrep);
        // $("iframe").css({
        //     "overflow-y": "scroll",
        //     "-webkit-overflow-scrolling": "touch"
        // });
        
    $(".event-modal").find('.event-info').load("virksomhedder/"+virksomhedsArray[companyrep] + ' .event-info > *', function (data, err) {
			//once the event content has been loaded
			// var element = document.getElementById('image_1'),
			//  = window.getComputedStyle(element),
			// top = style.getPropertyValue('top');
			if (err == "success") $(this).html(data);
			else $(this).html("<div>Der er sket en fejl</div>");
			var height = $(".header").outerHeight();
			$(".cd-schedule .event-modal .close").css("height", height +"px");
            $(".cd-schedule .event-modal .close").css("background", "black");
            $("#iframe, #iframe iframe").css({
                "width": window.innerWidth + "px",
                "height": $("#iframe").innerHeight() + "px",
                "-webkit-overflow-scrolling": "touch"
            });
		});
    
    $(".cd-schedule .header .event-name").html(company);
    $(".cd-schedule").addClass('modal-is-open');
    $(".cd-schedule .header").css("background", "#004e5d");
    $(".cd-schedule .header").css("color", "white");
}
function closeInfo(){
        $("#topbar").animate({
            left: '0%'
        });
    $(".cd-schedule").removeClass('modal-is-open');
}
//openInfo();