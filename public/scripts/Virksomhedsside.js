$(document).ready(function(){

    $("<style id='styling' type='text/css'>.contentarea{padding-top: "+($("header").outerHeight()+ 10)+"px !important;}</style>").appendTo("head");

window.addEventListener('resize', function(){
    $("#styling").html("<style id='styling' type='text/css'>.contentarea{padding-top: "+($("header").outerHeight() + 10)+"px !important;}</style>");
 });
});