function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function setCookieForIndex(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    window.location.href = getCookie("lastPage");
    return false;
}
function cookiefunc(){
    var cookie = getCookie("lastPage");
    //alert((cookie != "") +" " + (window.location.href != cookie) + " " + (window.location.href == (window.location.origin + "/") ||
    //window.location.href == (window.location.origin + "/index.html")) + " " + (cookie != (window.location.origin + "/") ||
    //cookie != (window.location.origin + "/index.html")));
    if (cookie != "" && window.location.href != cookie && (window.location.href == (window.location.origin + "/") || window.location.href == (window.location.origin + "/index.html")) && (cookie != (window.location.origin + "/") || cookie != (window.location.origin + "/index.html"))) {
                
                //alert(cookie);
                window.location.href = cookie;
                //$('#virksomhedder').trigger('click');
            }
    else
    {
    setCookie("lastPage", window.location.href, 1);
    }
}
if (window.matchMedia('(display-mode: standalone)').matches) {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(iOS)
    cookiefunc();
  }
