/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","b9ebbd74e1546260d4465705439bbc4e"],["/JSON/QuizSideData.json","1aa54e15262a189221f592c7cfc7b491"],["/JSON/manifest.json","a73360778d732628ee443841bf7c0f56"],["/ProgramSide.html","ac7425119212d7678b1080809e1e24cd"],["/QuizSide.html","5c472cc0d2d08cba15887e39a64d0a9d"],["/UddannelseSide.html","09b692cf3148cf9e14380da7a78613bf"],["/Virksomhedsside.html","681cbab49ac1863977fb8f7a4e527cd3"],["/images/Socialmedia/facebook.png","7e7e2740aa8e89d717df068bbc44053d"],["/images/Socialmedia/icon-facebook.png","b270a078f24337225e8a5b1a5985cb73"],["/images/Socialmedia/icon-instagram.png","0b454a7869c532757137cdc98e0cb364"],["/images/Socialmedia/icon-snapchat.png","4f63cbc4e3cb591c8b6b9bfcad6f060b"],["/images/Socialmedia/icon-twitter.png","cbd15d04a99c35ed6232d00872ac5781"],["/images/Socialmedia/instagram.png","3d8e0c91f729082ea990024182de9f6b"],["/images/Socialmedia/snapchat.png","399b876996d3d79476f39b1018c9c924"],["/images/Splash/SplashScreen1125x2436.png","0b533f7a8832146bcfb75da72b8dcd33"],["/images/Splash/SplashScreen1242x2208.png","6884e686794ce3ee3053fb6029bed098"],["/images/Splash/SplashScreen640x1136.png","342c760d71cf93c945aec37780c411bd"],["/images/Splash/SplashScreen750x1334.png","0027f318d46b1a52006ae0ef8defb7ee"],["/images/Toast/Add_To_Homescreen_Clicked.png","2b2722ebf661ddaa37c60e99f49becd5"],["/images/Toast/Add_To_Homescreen_Standard.png","ac5bbbfaf756dcda85963da5fa4f151f"],["/images/Toast/Homescreen.png","dba916ae785c78a43362e120cc152f6f"],["/images/Toast/down.png","e1952e1f66ca9e4ec333d84fb366442c"],["/images/Uddannelseslogoer/Campus-u10.png","56b7dd828ed2fa81b4468e4c0800393c"],["/images/Uddannelseslogoer/Esnord_dk_logo.jpg","0f6a60582c0277ff4eb4dd8533769719"],["/images/Uddannelseslogoer/Frederikssund-Kommune.jpg","7f47ed65d0a0850b2d9e4eae7bc5cb42"],["/images/Uddannelseslogoer/Knord.png","c8ab0bd101b66dbcc1c7d1cea585d8d4"],["/images/Uddannelseslogoer/PFFU.jpg","7aebf3c957f06ca130b5e803a32a500d"],["/images/Uddannelseslogoer/Sopu.png","8f6ca87751d6cd6a59d487c4181ef001"],["/images/Uddannelseslogoer/Tec.jpg","35eb53a3fb1945fb0f39649cb7ef706d"],["/images/Uddannelseslogoer/Trekloeverskolen_logo_web.jpg","465f31e726869f49416c1ea640095c44"],["/images/Uddannelseslogoer/UU Vest - Logo_juni2010.jpg","4c71bf45529ee2c98a5969b37cec0126"],["/images/Uddannelseslogoer/Ungdomsskolen.jpg","d7a2697de5be8ee185c6c08665180617"],["/images/Uddannelseslogoer/VUC.jpg","bf3bb4cc61d40708439d45183d5a92d5"],["/images/Uddannelseslogoer/esnord.jpg","aaf41fad898f06bea9db263f15a16867"],["/images/Uddannelseslogoer/frederikssund-gymnasium.png","2bf56869ca8b28ca698d45d3cf929d66"],["/images/Virksomhedslogoer/3byg-vindue-rentegnet.png","cb578987479235fb664d7f2d0e9a3f18"],["/images/Virksomhedslogoer/Amphenol Procom_logo_print_CMYK.png","34e5661c1c582c6c9b890e01fda178d0"],["/images/Virksomhedslogoer/Attendo_pos_150mm150dpi.png","32a858c4aef20a32145d246bd2434324"],["/images/Virksomhedslogoer/Bang Nielsen.png","ba4fb8516627cd03ea3062d3804cda17"],["/images/Virksomhedslogoer/CORO_cmyk_27_mm_tagline.png","33d724e6a06c03afa000a6296bf8b802"],["/images/Virksomhedslogoer/Campus_logo_rentegn_web.jpg","e5adb4dd8fad79d0e0366f99f9cf0a6f"],["/images/Virksomhedslogoer/EL-ABC.jpg","3de4e622b72454de21c7160762faea30"],["/images/Virksomhedslogoer/El-abc.png","f554b9da60486910ff423f4e14459f01"],["/images/Virksomhedslogoer/FE Logo.jpg","15ee907cd139b4562dc47ef4479bed8e"],["/images/Virksomhedslogoer/Frederikssund-Kommune.jpg","7f47ed65d0a0850b2d9e4eae7bc5cb42"],["/images/Virksomhedslogoer/HELBO_LOGO_FULL_CMYK.png","e47f397ea3f1c3c4e4a375ab295aa661"],["/images/Virksomhedslogoer/HT_logo_Eng_RGB_Black.png","015115713cc9628fed50c686807544f2"],["/images/Virksomhedslogoer/Husmer_logo_Pantone_v.7.png","ac3f9d058819ce01a5c76484bc1a170a"],["/images/Virksomhedslogoer/KNORD_FREDERIKSSUND_RGB_800px.png","459e426b6adc19ee4946522c0590cc5c"],["/images/Virksomhedslogoer/Logo, MountainTop.png","99e6295c6e8e0bbc5ace8662eb6e8e0e"],["/images/Virksomhedslogoer/Lomax Logo_ai.png","104903dca93d8eaafb927a047e0d03cb"],["/images/Virksomhedslogoer/MN_logo_ Arkitekter_100_.png","6e6f4217912c0208fd7f1f4fb2b75bfd"],["/images/Virksomhedslogoer/Salling_Group.png","ff8e9bd3505d29e636e5bf752eead6d9"],["/images/Virksomhedslogoer/Sillebroen-Logo-2016.png","fb98ff7b5630843397f8afe4be308ed0"],["/images/Virksomhedslogoer/Stark logo sammen bygger vi.jpg","18c45cd5cafc59931242b15acbf1e1b6"],["/images/Virksomhedslogoer/Topsil.png","70de216f79b76343ad0c8f3e3a7e9c67"],["/images/Virksomhedslogoer/bautalogopng.png","05397b55ad596984d45d226f8fcd78ff"],["/images/Virksomhedslogoer/business_frederikssund.png","332cd258858c8760ec724390df075881"],["/images/Virksomhedslogoer/gartner gottlieb.png","1df74a107fabf69a27c7d928331822a2"],["/images/Virksomhedslogoer/logo_fotex_uden_outline_cmyk.png","758858b05943619d2b7df8d447f4eb10"],["/images/ambassadør/3byg-big.png","8b06e150800760a77bb01ea667725c5d"],["/images/ambassadør/3byg.png","bcbb77b4b326acb2d61d28d7e8cc79fd"],["/images/ambassadør/attendo-big.png","8fcb9ab2e23ff09072500804ec92cf38"],["/images/ambassadør/attendo.png","63f2849dfc48188bc6b582520df19af9"],["/images/ambassadør/bagside.png","698f5bdb83c8ccbb18bdc59a4beb2823"],["/images/ambassadør/bang-nielsen-big.png","818e065c6a80bd6b36d3249cf1905407"],["/images/ambassadør/bang_nielsen.png","4fee8749df3f7e5c3967f05ab352fe35"],["/images/ambassadør/bautahøj-big.png","ab7679c3819a7dd758db2f5946ae67f7"],["/images/ambassadør/bautahøj.png","e2f819f2e17e150f978ef0b13b6b710d"],["/images/ambassadør/brenntag-big.png","da34f54deb4ba3df823352d2bb9e95fb"],["/images/ambassadør/brenntag.png","0d0e572a351a7e95ab808dee43adb666"],["/images/ambassadør/coro-big.png","011751e82f9a7aa9374cee964ddac0ab"],["/images/ambassadør/coro.png","5819738aa94e24d33e074cfca3c8aad1"],["/images/ambassadør/elabc-big.png","1e811cacfe6dfc776a33c33fdbae811e"],["/images/ambassadør/elabc.png","71387ddb4fe24afcb546a42c81d57b86"],["/images/ambassadør/erhverv-big.png","a776b7cb28e02bd210d153469a782487"],["/images/ambassadør/erhverv.png","7180b66ca7075dcb1b51095f46193e82"],["/images/ambassadør/føtex-big.png","50f87817b44bfc3c8a603659dd5989bf"],["/images/ambassadør/føtex.png","baf2dce9ddd2f00613a0757366ef31ee"],["/images/ambassadør/gottlieb-big.png","8982009655e8da036c7a4a583ab3dd99"],["/images/ambassadør/gottlieb.png","9bff49a72fa1554795de238bc443f5e2"],["/images/ambassadør/helbohansen-big.png","6b3b8deb8a77abea2e7a206001b8d289"],["/images/ambassadør/helbohansen.png","4f3775d4fb5eefa7230de30fe58f86ce"],["/images/ambassadør/husmer-big.png","4eb025c6ac7d7293bcf4323749cfeb18"],["/images/ambassadør/husmer.png","911a69b58d0706ce444adac831245d5d"],["/images/ambassadør/kommune-big.png","051590a86a652c45605d341f64a658c4"],["/images/ambassadør/kommune.png","a0e84e146559e80578f9c6cf0a566023"],["/images/ambassadør/lomax-big.png","41fd6831b80c54edc0779faa1cac9fb7"],["/images/ambassadør/lomax.png","00fa9a1519966200f0b3aea6758a9b54"],["/images/ambassadør/mangor-big.png","8ddd392ed1ae3f66263ab08186f59b9b"],["/images/ambassadør/mangor.png","3d5da4b51473024022374afdfc446526"],["/images/ambassadør/mountain-big.png","8d1dd95e0917fd6b8cd4d627a97f0430"],["/images/ambassadør/mountain.png","4e357f241be5f869802caacc1522846b"],["/images/ambassadør/procom-big.png","47dfad3ae50e707c94a75b214fd5b49e"],["/images/ambassadør/procom.png","074658f82756c962d186a90d026bb7e3"],["/images/ambassadør/sillebroen-big.png","39845fcc3b898a7e4edfc632b89133a7"],["/images/ambassadør/sillebroen.png","0e1809888ffb57518cecb0a8d4d913f7"],["/images/ambassadør/stark-big.png","3f15d278afd8cfd00e2d84f83c289eef"],["/images/ambassadør/stark.png","a9f3bedd0ef18ac26e47465c327e966f"],["/images/ambassadør/topsil-big.png","b9c273dd6379d67567a435b745a7d5de"],["/images/ambassadør/topsil.png","62789fc627571ffbadb33f5e3582b42d"],["/images/ambassadør/topsoe-big.png","5a96a32f8f3baedb03111157a7e589c6"],["/images/ambassadør/topsoe.png","e04050ef465f28a62740872c3029604e"],["/images/icons/Logo.png","b19d0c80353f08e3219c126f2f09f484"],["/images/icons/android-icon-144x144.png","97ff14887258138febc879c807413a61"],["/images/icons/android-icon-192x192.png","1528a8d520e35889cbb1f1393e9a10b3"],["/images/icons/android-icon-36x36.png","e8f34017d827a1b6d2c6f3b522d4d12a"],["/images/icons/android-icon-48x48.png","05a5e1711e1d5a1407c72cae265e9991"],["/images/icons/android-icon-512x512.png","5f73c50471d50c026ed0574988f0fd11"],["/images/icons/android-icon-72x72.png","de84c257abd2ed1505ded5069d07a900"],["/images/icons/android-icon-96x96.png","399483954558e3f29d5c8c7894bb2237"],["/images/icons/apple-icon-114x114.png","3a539d2305f984d985ea5c794febee76"],["/images/icons/apple-icon-120x120.png","33cfc202b6ab707cbd2bd24e93cbbfa5"],["/images/icons/apple-icon-144x144.png","97ff14887258138febc879c807413a61"],["/images/icons/apple-icon-152x152.png","039c9408645b0d21d699c9ceb69cccf8"],["/images/icons/apple-icon-180x180.png","c7fc65acfcbfb766de17abd145ba4775"],["/images/icons/apple-icon-57x57.png","8f5fe09bc3da0110d6b7c3786245439a"],["/images/icons/apple-icon-60x60.png","6744fe51bb3ace0e9c3aa4d618864655"],["/images/icons/apple-icon-72x72.png","de84c257abd2ed1505ded5069d07a900"],["/images/icons/apple-icon-76x76.png","9e3123613c2d0d92b402644c27d99228"],["/images/icons/apple-icon-precomposed.png","1d50ce3ac03df5d6cafa809df1dc98bd"],["/images/icons/apple-icon.png","1d50ce3ac03df5d6cafa809df1dc98bd"],["/images/icons/favicon-16x16.png","6628c1085c4df0785f43edd6161ab123"],["/images/icons/favicon-32x32.png","58baa6d31be7af63292a3914dd004fec"],["/images/icons/favicon-96x96.png","399483954558e3f29d5c8c7894bb2237"],["/images/icons/manifest.json","b58fcfa7628c9205cb11a1b2c3e8f99a"],["/images/icons/ms-icon-144x144.png","97ff14887258138febc879c807413a61"],["/images/icons/ms-icon-150x150.png","8001d96b723d2cb74126a6144d479540"],["/images/icons/ms-icon-310x310.png","d3943713a710b50bad68cc45de882f60"],["/images/icons/ms-icon-70x70.png","8c101fc763ee9510c55132ab00b81c84"],["/index.html","147ac4cd0ca8f4fe0f72be85b9bc3d89"],["/lib/bootstrap/css/bootstrap-theme.css","b9b46bcc4dad6cc90fc4f95073c50735"],["/lib/bootstrap/css/bootstrap-theme.min.css","ab6b02efeaf178e0247b9504051472fb"],["/lib/bootstrap/css/bootstrap.css","2a31dca112f26923b51676cb764c58d5"],["/lib/bootstrap/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/lib/bootstrap/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/lib/bootstrap/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["/lib/bootstrap/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["/lib/jquery/jquery-3.3.1.js","b0e8755b0ab71a0a4aea47c3b589b47e"],["/lib/magnific-popup/jquery.magnific-popup.js","7a92df805aca08860c41eeb3ca183045"],["/lib/magnific-popup/magnific-popup.css","f6528d76c169479a79bf025bb56cd5f0"],["/lib/modernizr/modernizr.js","8939df1efe92d3336de152336414393f"],["/lib/slick/ajax-loader.gif","c5cd7f5300576ab4c88202b42f6ded62"],["/lib/slick/slick-theme.css","f9faba678c4d6dcfdde69e5b11b37a2e"],["/lib/slick/slick.css","f38b2db10e01b1572732a3191d538707"],["/lib/slick/slick.js","5f8f4aed010e1afe499184d8197309f9"],["/lib/slick/slick.min.js","d5a61c749e44e47159af8a6579dda121"],["/program/Kasse1.html","0ca7e5f47acd7dfbfcbd91e1fbe9471d"],["/program/Kasse2.html","7c6da15729870e67a507c2427db60096"],["/program/Kasse3.html","8de538110de562e6b581bc2b8aa3713a"],["/program/Kasse4.html","d1d7702ef91e9c9ae15b4f9e5b848bce"],["/program/Kasse5.html","0c04e7fa31636eed124d51a7022d6860"],["/scripts/Index.js","c6dc4e8ea73cb2fedda15000e00692fd"],["/scripts/ProgramSide.js","8acc255e54ff2eb0071354d9f358436e"],["/scripts/QuizSide.js","efb06651736345e30ad0b14fc7dda13b"],["/scripts/UddannelseSide.js","83c759eddd036d9f100c705c710d38a4"],["/scripts/Virksomhedsside.js","1eeb4ba0dec55b71771e7b2a1b2b5d09"],["/scripts/cookie.js","22441672e372fac1a76b25429eba8f42"],["/styles/404.css","c92ff1be9c32677f44fb5bfafaf6e3f7"],["/styles/Footer.css","cde77b2e7acc1b77979a3b5565b32206"],["/styles/Header.css","0a154382ab00c01625ba7e028e2d35ff"],["/styles/Index.css","7e7a89f79341a2c58572917032552b70"],["/styles/ProgramSide.css","e4343dac327fc3b12b138fa297550757"],["/styles/QuizSide.css","ac13dc79d71ae95ce0da564990e44b2b"],["/styles/StyleVirksomheder.css","d5506f087d587b06948c2049c5618880"],["/styles/UddannelseSide.css","8de329e3482b18e5c8d4b3fffe457534"],["/virksomhedder/3-byg-tag-&-facade-aps.html","da8593346474ffc12d4bd9f3161f4c4a"],["/virksomhedder/anlægsgartner-gottlieb.html","32242a175c6b000d01559aa55abd3015"],["/virksomhedder/attendo.html","ed0dcf19c02c824db79840e25324bd41"],["/virksomhedder/bang-nielsen.html","0e82d6b70fd38eb42baff1d911bed7cb"],["/virksomhedder/bautahøj-konferencecenter.html","1be0d5465410b440e9fa51d1a9fbd9fa"],["/virksomhedder/brenntag-biosector.html","23292e558126cf8e8e9368ffb4d24701"],["/virksomhedder/campus-frederikssund.html","dbfc94e3f1450bada45aee9e68f9c911"],["/virksomhedder/co-ro.html","d5c871b155f1c7dc1c94733561e1c683"],["/virksomhedder/el-abc.html","24703d3c8400c5a6b04a4437964c0864"],["/virksomhedder/esnord.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/frederikssund-business.html","4cfdce3af7b701b667cac65e99512908"],["/virksomhedder/frederikssund-kommune.html","ab6e40587daab71130654b63337a2cc5"],["/virksomhedder/frederikssund-ungdomsskole.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/føtex.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/h.-helbo-hansen.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/haldor-topsøe.html","752bc537d2cbefa8c952a4622cb46582"],["/virksomhedder/husmer-glas-og-facade.html","9dd0c18c8566847664861d9d948d40a7"],["/virksomhedder/knord.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/lomax.html","43901d613f09cd70a1116860d9759be4"],["/virksomhedder/mangor-&-nagel.html","7bbb1581757defb46154b74efccb8ad4"],["/virksomhedder/mountain-top-industries.html","30afe6414aef225df63186d34d351cea"],["/virksomhedder/procom.html","2ef29e56084178c7f30b245316176624"],["/virksomhedder/salling_group.html","6170679107170300d12f73b76a59ce19"],["/virksomhedder/sillebroen.html","d95a9215f22c8596b9d2598683d55cef"],["/virksomhedder/sopu.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/stark.html","18bb3f53ae2929e83af9d67a06a8254c"],["/virksomhedder/tec.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/topsil.html","f2b4bb3a3b8c8d4ddcdf7ba51e09a20b"],["/virksomhedder/trekløverskolen.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/uuvest.html","3e45cbdb9b46e20f4795d715bf283ffb"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







