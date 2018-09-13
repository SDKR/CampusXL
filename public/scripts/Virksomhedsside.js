if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
            console.log("Service Worker Registered");
        });
}

$(document).ready(function () {

    $("<style id='styling' type='text/css'>.contentarea{padding-top: " + ($("header").outerHeight() + 10) + "px !important;}</style>").appendTo("head");

    window.addEventListener('resize', function () {
        $("#styling").html("<style id='styling' type='text/css'>.contentarea{padding-top: " + ($("header").outerHeight() + 10) + "px !important;}</style>");
    });
});

$(".close").on("click", closeInfo);
$(".center img").on("click", openInfo);
// $(".readMore").on("click", openInfo);

// scocial media 

$("#headerImage").click(function () {
    var ua = navigator.userAgent;
    var checker = {
        iphone: ua.match(/(iPhone|iPod|iPad)/),
        android: ua.match(/Android/)
    };
    if (checker.android) {
        window.location.href="intent://#Intent;package=com.facebook.katana;scheme=fb://page/118797611557016?referrer=app_link;end";
    } else if (checker.iphone) {
        window.open("fb://profile/118797611557016");
    } else {
        window.open("https://da-dk.facebook.com/Campusfrederikssund/").show();
    }
});


var virksomhedsArray = {
    frederikssund_kommune: ['frederikssund-kommune.html',"https://www.frederikssund.dk/","#047aa4","#047aa4"],
    frederikssund_business: ['frederikssund-business.html',"http://frederikssunderhvervsportal.dk/","#5c97cd","#9bbc53"],
    "3_byg_tag_&_facade_aps": ['3-byg-tag-&-facade-aps.html',"https://3byg.dk/" ,"#009b68","#009b68"],
    "topsil_a/s": ['topsil.html',"http://www.topsil.com/dk.aspx" ,"#251e21","#e9212c"],
    stark: ['stark.html',"https://www.stark.dk/" ,"#344674","#fa8d12"],
    sillebroen: ['sillebroen.html',"http://sillebroen.dk/" ,"#000000","#000000"],
    "mangor_&_nagel_a/s": ['mangor-&-nagel.html',"http://www.mangornagel.dk/","#04a447","#04a447"],
    "lomax_a/s": ['lomax.html',"http://www.lomax.dk/","#ed1c24","#ed1c24"],
    "mountain_top_industries_aps": ['mountain-top-industries.html',"http://www.mountaintop.dk/","#596d4b","#4f4f4f"],
    salling_group: ['salling_group.html',"https://salling.dk/","#0c445e","#0c445e"],
    husmer_glas_og_facade: ['husmer-glas-og-facade.html',"https://husmer.dk/","#016564","#df734b"],
    "haldor_topsøe_a/s": ['haldor-topsøe.html',"https://www.topsoe.com/","#000000","#000000"],
    "h._helbo_hansen_a/s": ['h.-helbo-hansen.html',"https://helbo.dk/","#142f5c","#d2133f"],
    "anlægsgartner_gottlieb_a/s": ['anlægsgartner-gottlieb.html',"https://gartnergottlieb.dk/","#009b68","#009b68"],
    "el-abc_a/s": ['el-abc.html',"http://www.el-abc.dk/","#376295","#b65665"],
    "co-ro_a/s": ['co-ro.html',"http://www.co-ro.com/","#e1562e","#fcc425"],
    "brenntag_biosector_a/s": ['brenntag-biosector.html',"https://www.brenntag.com/","#000960","#cc1130"],
    bautahøj_konferencecenter: ['bautahøj-konferencecenter.html',"http://www.bautahoj.dk/","#717276","#717276"],
    "bang_nielsen_a/s": ['bang-nielsen.html',"http://bang-nielsen.dk/","#f8981c","#f8981c"],
    "attendo_a/s": ['attendo.html',"https://www.attendo.dk/","#132864","#132864"],
    "procom_a/s": ['procom.html',"http://procom.dk/","#012e5a","#2ea836"],
};
$(".contentbox").each(function(){
    var company = $(this).find("h2").html();
    if(company == "Campus Frederikssund")
    return;
    var companyrep = company.toLowerCase();
    while (companyrep.indexOf(" ") != -1)
        companyrep = companyrep.replace(" ", "_");
    companyrep = companyrep.replace("amp;", "");
    $(this).find(".readMore").css({
        "background": virksomhedsArray[companyrep][2],
    });
    $(this).find(".ambassador").css({
        "color": virksomhedsArray[companyrep][3],
        "border-color": virksomhedsArray[companyrep][3]
    });
});



function openInfo() {
    if ($(window).width() < 800)
        $("#topbar").addClass("hidde");
    else
        $("#topbar").animate({
            top: '-50%'
        });
    var company = $(this).closest(".contentbox").find("h2").html();
    var companyrep = company.toLowerCase();
    while (companyrep.indexOf(" ") != -1)
        companyrep = companyrep.replace(" ", "_");
    companyrep = companyrep.replace("amp;", "");
    // $("iframe").css({
    //     "overflow-y": "scroll",
    //     "-webkit-overflow-scrolling": "touch"
    // });

    $(".event-modal").find('.event-info').load("virksomhedder/" + virksomhedsArray[companyrep][0] + ' .event-info > *', function (data, err) {
        //once the event content has been loaded
        // var element = document.getElementById('image_1'),
        //  = window.getComputedStyle(element),
        // top = style.getPropertyValue('top');
        if (err == "success") $(this).html(data + '<footer id="linkbar"><div>'+ company +' Hjemmeside</div></footer>');
        else $(this).html("<div>Der er sket en fejl</div>");
        var height = $(".header").outerHeight();
        $("#linkbar").on("click",function(){
            window.location.href = virksomhedsArray[companyrep][1];
        });
        $(".cd-schedule .event-modal .close").css("height", height + "px");
        $(".cd-schedule .event-modal .close").css("background", "black");
        var element = document.getElementsByClassName('header')[0];
		var style = window.getComputedStyle(element);
		var color = style.getPropertyValue('background-color');
		$('meta[name=theme-color]').attr('content', color);
        $("#iframe, #iframe iframe").css({
            "width": window.innerWidth + "px",
            "height": ($("#indhold").outerHeight() - $(".header-bg").outerHeight() -110 ) + "px",
            "-webkit-overflow-scrolling": "touch"
        });
    });

    $(".cd-schedule .header .event-name").html(company);
    $(".cd-schedule").addClass('modal-is-open');
    $(".cd-schedule .header").css("background", "#004e5d");
    $(".cd-schedule .header").css("color", "white");
}

function closeInfo() {
    if ($(window).width() < 800)
    $("#topbar").removeClass("hidde");
else
    $("#topbar").animate({
        top: '0%'
    });
    $('meta[name=theme-color]').attr('content', "#ffffff");
    $(".cd-schedule").removeClass('modal-is-open');
}
//openInfo();

// campus click

$("#campus").click(function() {
    var ua = navigator.userAgent;
    var checker = {
        iphone: ua.match(/(iPhone|iPod|iPad)/),
        android: ua.match(/Android/)
      };
      if (checker.android){
        window.location.href="intent://#Intent;package=com.facebook.katana;scheme=fb://page/118797611557016?referrer=app_link;end";
      }
      else if (checker.iphone){
        window.open("fb://profile/118797611557016");
      }
      else {
        window.open("https://da-dk.facebook.com/Campusfrederikssund/").show();
      }
  });

  $(".ambassador").magnificPopup({
    type: 'image', 
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
  });