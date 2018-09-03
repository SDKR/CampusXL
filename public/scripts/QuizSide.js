var quizType = -1;
var quizSideData = null;
$.getJSON("/QuizSideData.json", function(json) {
    quizSideData = json;
});

function showQuiz(){
    //  $(".indhold").css("display", "none");
     $("#buttons").css("display", "none");
    $("header").css("left", "-110%");
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