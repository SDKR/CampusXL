if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}

$('.image-popup-no-margins').each(function(){
  $(this).magnificPopup({
    type: 'image',
    delegate: 'a', 
    closeOnContentClick: false,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    },
    gallery: {
      enabled:true
    }
  });
});


var isIos = function() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
};
// Detects if device is in standalone mode
var isInStandaloneMode = function()  {return ('standalone' in window.navigator) && (window.navigator.standalone);};

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  launch_toast();
}

function launch_toast() {
  var x = document.getElementById("toast");
  x.className = "show";
  var y = document.getElementById("img");
  y.className = "show";
  var z = document.getElementById("img2");
  z.className = "show";

  setTimeout(function(){ x.className = x.className.replace("show", ""); y.className = y.className.replace("show", ""); z.className = z.className.replace("show", "");}, 11500);
}

var deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  showAddToHomeScreen();

});

function showAddToHomeScreen() {

  var a2hsBtn = document.querySelector(".ad2hs-prompt");

  a2hsBtn.style.display = "block";

  a2hsBtn.addEventListener("click", addToHomeScreen);

}

//Carousel Init
$(document).ready(function(){
  $('.autoplay').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    adaptiveHeight: false,
    dots: false,
    prevArrow: false,
    nextArrow: false
  });
});

// Socal media buttons

// https://app.urlgeni.us/#/
$("#instagram").click(function() {
    var ua = navigator.userAgent;
    var checker = {
        iphone: ua.match(/(iPhone|iPod|iPad)/),
        android: ua.match(/Android/)
      };
      if (checker.android){
        window.location.href="intent://instagram.com/_u/campusxl_18/#Intent;package=com.instagram.android;scheme=https;end";
      }
      else if (checker.iphone){
        window.open("instagram://user?username=campusxl_18");
      }
      else {
        window.open("https://www.instagram.com/campusxl_18/").show();
      }
});

$("#snapchat").click(function() {
  var ua = navigator.userAgent;
  var checker = {
      iphone: ua.match(/(iPhone|iPod|iPad)/),
      android: ua.match(/Android/)
    };
    if (checker.android){
      window.location.href="snapchat://add/campusxl_18";
    }
    else if (checker.iphone){
      window.open("snapchat://add/campusxl_18");
    }
    else {
      window.open("https://www.snapchat.com/add/campusxl_18").show();
    }
});

$("#facebook").click(function() {
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

$(document).ready(function() {
  //  $(".indhold").css("padding-top", ($("header").outerHeight() + "px"));
  document.getElementsByClassName("indhold")[0].style = "padding-top: " + document.getElementsByTagName("header")[0].getBoundingClientRect().height + "px"; 
  });

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