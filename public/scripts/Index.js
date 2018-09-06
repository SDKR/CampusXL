if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}

var isIos = () => {
  var userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
var isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  launch_toast();
}else{
  console.log("hej");
}

function launch_toast() {
  var x = document.getElementById("toast")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 14500);
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
        window.open("intent://instagram.com/_u/campusxl_18/#Intent;package=com.instagram.android;scheme=https;end");
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
      window.open("snapchat://add/campusxl_18");
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
      window.open("intent://#Intent;package=com.facebook.katana;scheme=fb://page/118797611557016?referrer=app_link;end");
    }
    else if (checker.iphone){
      window.open("fb://profile/118797611557016");
    }
    else {
      window.open("https://da-dk.facebook.com/Campusfrederikssund/").show();
    }
});

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