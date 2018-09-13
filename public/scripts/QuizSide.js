if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/sw.js')
             .then(function() { console.log("Service Worker Registered"); });
  }
// social media

$("#headerImage").click(function() {
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

var quizType = -1;
var quizSideData = null;
$.getJSON("/JSON/QuizSideData.json", function(json) {
    quizSideData = json;
});

function showQuiz(){
    //  $(".indhold").css("display", "none");
     $("#buttons").css("display", "none");
    $("header").css("left", "-110%");
    $("#quiz").css({
        height: (($(window).height()) - 70)+'px',
        width: ($(window).width())+'px'
    });
    $('<iframe style="border: none;" id="Skema" height="'+(($(window).height()) - 70)+'px" width="'+($(window).width())+'px" src="'+quizSideData[quizType]+'"></iframe>')
    .appendTo(".indhold div:nth-of-type(1)");
    $(".indhold div:nth-of-type(1)").css("display", "");
}

$(".shiny-btn").on("click", function(){
    quizType = $(this).html();
    $(".shiny-btn").css("display", "none");
    $(".shiny-btn").off();
    showQuiz();
});

$(".col-xs-2.text-center").on("click", function(e){
    window.location.href = $(this).find("a").attr("href");
});

window.addEventListener('resize', function(){
$("#styling").html("<style id='styling' type='text/css'>#Skema, .smcx-widget.smcx-embed.smcx-show.smcx-widget-dark{border: none; height: "+($(window).height() - 70)+"px !important; z-index: 1; width: "+($(window).width())+"px !important; max-width: "+($(window).width())+"px !important; } .smcx-widget.smcx-embed.smcx-show.smcx-widget-dark{height: "+($(window).height())+"px !important; z-index: 1; width: "+($(window).width())+"px !important;}" +
".indhold div:nth-of-type(2){padding-top: "+($("header").outerHeight())+"px;} </style>");
});

$("<style id='styling' type='text/css'>  .smcx-widget.smcx-embed.smcx-show.smcx-widget-dark{height: "+($(window).height())+"px !important; z-index: 1; width: "+($(window).width())+"px !important;} .indhold div:nth-of-type(2){padding-top: "+($("header").outerHeight())+"px;}  </style>").appendTo("head");
$(document).ready(function() {
	//  $(".indhold").css("padding-top", ($("header").outerHeight() + "px"));
	document.querySelector(".indhold div:nth-of-type(2)").style = "padding-top: " + (document.getElementsByTagName("header")[0].getBoundingClientRect().height + 10) + "px"; 
	});