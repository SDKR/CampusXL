
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
          $("https://www.instagram.com/campusxl_18/").show();
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
        $("https://www.snapchat.com/add/campusxl_18").show();
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
        $("https://da-dk.facebook.com/Campusfrederikssund/").show();
    }
});