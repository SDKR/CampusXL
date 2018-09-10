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
        window.open("intent://#Intent;package=com.facebook.katana;scheme=fb://page/118797611557016?referrer=app_link;end");
    } else if (checker.iphone) {
        window.open("fb://profile/118797611557016");
    } else {
        window.open("https://da-dk.facebook.com/Campusfrederikssund/").show();
    }
});


var virksomhedsArray = {
    frederikssund_kommune: ['frederikssund-kommune.html',"https://www.frederikssund.dk/"],
    frederikssund_business: ['frederikssund-business.html',"http://frederikssunderhvervsportal.dk/"],
    "3_byg_tag_&_facade_aps": ['3-byg-tag-&-facade-aps.html',"https://3byg.dk/"],
    "topsil_a/s": ['topsil.html',"http://www.topsil.com/dk.aspx"],
    stark: ['stark.html',"https://www.stark.dk/"],
    sillebroen: ['sillebroen.html',"http://sillebroen.dk/"],
    "mangor_&_nagel_a/s": ['mangor-&-nagel.html',"http://www.mangornagel.dk/"],
    "lomax_a/s": ['lomax.html',"http://www.lomax.dk/"],
    "mountain_top_industries_aps": ['mountain-top-industries.html',"http://www.mountaintop.dk/"],
    salling_group: ['salling_group.html',"https://salling.dk/"],
    husmer_glas_og_facade: ['husmer-glas-og-facade.html',"https://husmer.dk/"],
    "haldor_topsøe_a/s": ['haldor-topsøe.html',"https://www.topsoe.com/"],
    "h._helbo_hansen_a/s": ['h.-helbo-hansen.html',"https://helbo.dk/"],
    "anlægsgartner_gottlieb_a/s": ['anlægsgartner-gottlieb.html',"https://gartnergottlieb.dk/"],
    "el-abc_a/s": ['el-abc.html',"http://www.el-abc.dk/"],
    "co-ro_a/s": ['co-ro.html',"http://www.co-ro.com/"],
    "brenntag_biosector_a/s": ['brenntag-biosector.html',"https://www.brenntag.com/"],
    bautahøj_konferencecenter: ['bautahøj-konferencecenter.html',"http://www.bautahoj.dk/"],
    "bang_nielsen_a/s": ['bang-nielsen.html',"http://bang-nielsen.dk/"],
    "attendo_a/s": ['attendo.html',"https://www.attendo.dk/"],
    "procom_a/s": ['procom.html',"https://www.attendo.dk/"],
};



function openInfo() {
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
    $("#topbar").animate({
        left: '0%'
    });
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
        window.open("intent://#Intent;package=com.facebook.katana;scheme=fb://page/118797611557016?referrer=app_link;end");
      }
      else if (checker.iphone){
        window.open("fb://profile/118797611557016");
      }
      else {
        window.open("https://da-dk.facebook.com/Campusfrederikssund/").show();
      }
  });