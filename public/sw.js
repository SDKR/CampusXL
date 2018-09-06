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

var precacheConfig = [["/404.html","107c43fc82714528ee535868d94d424d"],["/Kasse1.html","0ca7e5f47acd7dfbfcbd91e1fbe9471d"],["/Kasse2.html","7c6da15729870e67a507c2427db60096"],["/Kasse3.html","8de538110de562e6b581bc2b8aa3713a"],["/Kasse4.html","d1d7702ef91e9c9ae15b4f9e5b848bce"],["/QuizSide.html","31baa025950a0bcc1db150bd27301c2c"],["/QuizSideData.json","1aa54e15262a189221f592c7cfc7b491"],["/UddannelseSide.html","ad2eb6f876f43755843aac3b8b2a4fd3"],["/Virksomhedsside.html","58a4296313e469070911b14cd799799f"],["/bootstrap/css/bootstrap-grid.css","f789083b5ad6878edfeeab311be6a1d6"],["/bootstrap/css/bootstrap-grid.min.css","8997ec71a78ea4b0da89935276f4188b"],["/bootstrap/css/bootstrap-reboot.css","f1f75a3daa995c078fda451f438d16fd"],["/bootstrap/css/bootstrap-reboot.min.css","1acc02b102fc1f6d4117be1726fb367e"],["/bootstrap/css/bootstrap.css","c17ae4f0529e0bc2fc887d2471ae124b"],["/bootstrap/css/bootstrap.min.css","416bb9e03b223eba66e9a3ca5a9da02e"],["/bootstrap/js/bootstrap.bundle.js","e52da38174949c713ccfb9ce929b0d4b"],["/bootstrap/js/bootstrap.bundle.min.js","18a1ebc44d97e64b7461be8cdde9d766"],["/bootstrap/js/bootstrap.js","bb38938b1b9056351722c813ddbbbe70"],["/bootstrap/js/bootstrap.min.js","d061ab58270e692309b728296e90bba2"],["/calendar.html","608d03b614a089862566488ecf795b71"],["/images/Campus-u10.png","56b7dd828ed2fa81b4468e4c0800393c"],["/images/Homescreen.png","dba916ae785c78a43362e120cc152f6f"],["/images/Logo.png","b19d0c80353f08e3219c126f2f09f484"],["/images/Socialmedia/facebook.png","7e7e2740aa8e89d717df068bbc44053d"],["/images/Socialmedia/icon-facebook.png","b270a078f24337225e8a5b1a5985cb73"],["/images/Socialmedia/icon-instagram.png","0b454a7869c532757137cdc98e0cb364"],["/images/Socialmedia/icon-snapchat.png","4f63cbc4e3cb591c8b6b9bfcad6f060b"],["/images/Socialmedia/icon-twitter.png","cbd15d04a99c35ed6232d00872ac5781"],["/images/Socialmedia/instagram.png","3d8e0c91f729082ea990024182de9f6b"],["/images/Socialmedia/snapchat.png","399b876996d3d79476f39b1018c9c924"],["/images/Splash/SplashScreen1125x2436.png","0b533f7a8832146bcfb75da72b8dcd33"],["/images/Splash/SplashScreen1242x2208.png","6884e686794ce3ee3053fb6029bed098"],["/images/Splash/SplashScreen640x1136.png","342c760d71cf93c945aec37780c411bd"],["/images/Splash/SplashScreen750x1334.png","0027f318d46b1a52006ae0ef8defb7ee"],["/images/Virksomhedslogoer/3byg-vindue-rentegnet.png","cb578987479235fb664d7f2d0e9a3f18"],["/images/Virksomhedslogoer/Amphenol Procom_logo_print_CMYK.png","34e5661c1c582c6c9b890e01fda178d0"],["/images/Virksomhedslogoer/Attendo_pos_150mm150dpi.png","32a858c4aef20a32145d246bd2434324"],["/images/Virksomhedslogoer/Bang Nielsen.png","ba4fb8516627cd03ea3062d3804cda17"],["/images/Virksomhedslogoer/CORO_cmyk_27_mm_tagline.png","33d724e6a06c03afa000a6296bf8b802"],["/images/Virksomhedslogoer/Campus_logo_rentegn_web.jpg","e5adb4dd8fad79d0e0366f99f9cf0a6f"],["/images/Virksomhedslogoer/EL-ABC.jpg","3de4e622b72454de21c7160762faea30"],["/images/Virksomhedslogoer/El-abc.png","f554b9da60486910ff423f4e14459f01"],["/images/Virksomhedslogoer/Esnord_dk_logo.jpg","0f6a60582c0277ff4eb4dd8533769719"],["/images/Virksomhedslogoer/FE Logo.jpg","15ee907cd139b4562dc47ef4479bed8e"],["/images/Virksomhedslogoer/Frederikssund-Gymnasium.jpg","778458aea621d8649aeaf47a8ad5d90f"],["/images/Virksomhedslogoer/HELBO_LOGO_FULL_CMYK.png","e47f397ea3f1c3c4e4a375ab295aa661"],["/images/Virksomhedslogoer/HT_logo_Eng_RGB_Black.png","015115713cc9628fed50c686807544f2"],["/images/Virksomhedslogoer/Husmer_logo_Pantone_v.7.png","ac3f9d058819ce01a5c76484bc1a170a"],["/images/Virksomhedslogoer/KNORD_FREDERIKSSUND_RGB_800px.png","459e426b6adc19ee4946522c0590cc5c"],["/images/Virksomhedslogoer/Logo, MountainTop.png","99e6295c6e8e0bbc5ace8662eb6e8e0e"],["/images/Virksomhedslogoer/Lomax Logo_ai.png","104903dca93d8eaafb927a047e0d03cb"],["/images/Virksomhedslogoer/MN_logo_ Arkitekter_100_.png","6e6f4217912c0208fd7f1f4fb2b75bfd"],["/images/Virksomhedslogoer/PFFU.jpg","7aebf3c957f06ca130b5e803a32a500d"],["/images/Virksomhedslogoer/Salling_Group.png","ff8e9bd3505d29e636e5bf752eead6d9"],["/images/Virksomhedslogoer/Sillebroen-Logo-2016.png","fb98ff7b5630843397f8afe4be308ed0"],["/images/Virksomhedslogoer/Stark logo sammen bygger vi.jpg","18c45cd5cafc59931242b15acbf1e1b6"],["/images/Virksomhedslogoer/Topsil.png","70de216f79b76343ad0c8f3e3a7e9c67"],["/images/Virksomhedslogoer/Trekloeverskolen_logo_web.jpg","465f31e726869f49416c1ea640095c44"],["/images/Virksomhedslogoer/UU Vest - Logo_juni2010.jpg","4c71bf45529ee2c98a5969b37cec0126"],["/images/Virksomhedslogoer/UUVest-logo-pos.jpg","7a58f90483e37769b5fb0b3802e3551c"],["/images/Virksomhedslogoer/Ungdomsskolen.jpg","fe18f81e13602ff82bc3950fa316d616"],["/images/Virksomhedslogoer/VUC.jpg","bf3bb4cc61d40708439d45183d5a92d5"],["/images/Virksomhedslogoer/bautalogopng.png","05397b55ad596984d45d226f8fcd78ff"],["/images/Virksomhedslogoer/business_frederikssund.png","332cd258858c8760ec724390df075881"],["/images/Virksomhedslogoer/gartner gottlieb.png","1df74a107fabf69a27c7d928331822a2"],["/images/Virksomhedslogoer/logo_fotex_uden_outline_cmyk.png","758858b05943619d2b7df8d447f4eb10"],["/images/icons/android-icon-144x144.png","97ff14887258138febc879c807413a61"],["/images/icons/android-icon-192x192.png","1528a8d520e35889cbb1f1393e9a10b3"],["/images/icons/android-icon-36x36.png","e8f34017d827a1b6d2c6f3b522d4d12a"],["/images/icons/android-icon-48x48.png","05a5e1711e1d5a1407c72cae265e9991"],["/images/icons/android-icon-512x512.png","5f73c50471d50c026ed0574988f0fd11"],["/images/icons/android-icon-72x72.png","de84c257abd2ed1505ded5069d07a900"],["/images/icons/android-icon-96x96.png","399483954558e3f29d5c8c7894bb2237"],["/images/icons/apple-icon-114x114.png","3a539d2305f984d985ea5c794febee76"],["/images/icons/apple-icon-120x120.png","33cfc202b6ab707cbd2bd24e93cbbfa5"],["/images/icons/apple-icon-144x144.png","97ff14887258138febc879c807413a61"],["/images/icons/apple-icon-152x152.png","039c9408645b0d21d699c9ceb69cccf8"],["/images/icons/apple-icon-180x180.png","c7fc65acfcbfb766de17abd145ba4775"],["/images/icons/apple-icon-57x57.png","8f5fe09bc3da0110d6b7c3786245439a"],["/images/icons/apple-icon-60x60.png","6744fe51bb3ace0e9c3aa4d618864655"],["/images/icons/apple-icon-72x72.png","de84c257abd2ed1505ded5069d07a900"],["/images/icons/apple-icon-76x76.png","9e3123613c2d0d92b402644c27d99228"],["/images/icons/apple-icon-precomposed.png","1d50ce3ac03df5d6cafa809df1dc98bd"],["/images/icons/apple-icon.png","1d50ce3ac03df5d6cafa809df1dc98bd"],["/images/icons/favicon-16x16.png","6628c1085c4df0785f43edd6161ab123"],["/images/icons/favicon-32x32.png","58baa6d31be7af63292a3914dd004fec"],["/images/icons/favicon-96x96.png","399483954558e3f29d5c8c7894bb2237"],["/images/icons/manifest.json","b58fcfa7628c9205cb11a1b2c3e8f99a"],["/images/icons/ms-icon-144x144.png","97ff14887258138febc879c807413a61"],["/images/icons/ms-icon-150x150.png","8001d96b723d2cb74126a6144d479540"],["/images/icons/ms-icon-310x310.png","d3943713a710b50bad68cc45de882f60"],["/images/icons/ms-icon-70x70.png","8c101fc763ee9510c55132ab00b81c84"],["/images/img1.jpg","ec07f372090f5a7bf608faa749b8d1ff"],["/images/img2.png","c8ab0bd101b66dbcc1c7d1cea585d8d4"],["/images/img3.jpg","aaf41fad898f06bea9db263f15a16867"],["/images/img4.jpg","7f47ed65d0a0850b2d9e4eae7bc5cb42"],["/images/img5.png","8f6ca87751d6cd6a59d487c4181ef001"],["/images/img6.jpg","35eb53a3fb1945fb0f39649cb7ef706d"],["/index.html","6aa5280b112f962460aee8b4213c1cd3"],["/lib/bootstrap/css/bootstrap-theme.css","b9b46bcc4dad6cc90fc4f95073c50735"],["/lib/bootstrap/css/bootstrap-theme.min.css","ab6b02efeaf178e0247b9504051472fb"],["/lib/bootstrap/css/bootstrap.css","2a31dca112f26923b51676cb764c58d5"],["/lib/bootstrap/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/lib/bootstrap/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/lib/bootstrap/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["/lib/bootstrap/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["/lib/jquery/jquery-3.3.1.js","b0e8755b0ab71a0a4aea47c3b589b47e"],["/lib/modernizr/modernizr.js","8939df1efe92d3336de152336414393f"],["/lib/slick/ajax-loader.gif","c5cd7f5300576ab4c88202b42f6ded62"],["/lib/slick/slick-theme.css","f9faba678c4d6dcfdde69e5b11b37a2e"],["/lib/slick/slick.css","f38b2db10e01b1572732a3191d538707"],["/lib/slick/slick.js","5f8f4aed010e1afe499184d8197309f9"],["/lib/slick/slick.min.js","d5a61c749e44e47159af8a6579dda121"],["/manifest.json","828bf6940f852cd2239b91dae53a9731"],["/scripts/Index.js","a45a29d0b1b15b7d841fe3b1a28607a9"],["/scripts/KarriereMuligeder.js","d41d8cd98f00b204e9800998ecf8427e"],["/scripts/QuizSide.js","da4496fb50913960b744dd2496937940"],["/scripts/UddannelseSide.js","8524705cd0c5dbcdf065fe55562f0da4"],["/scripts/Virksomhedsside.js","3038e60f545e832cd73ac692219dec9c"],["/scripts/app.js","f2f12ce50e5c1159d2f21a11f19d7a42"],["/scripts/calender.js","04a31ed15f9da52de99231881ba3bd43"],["/scripts/materialize.js","38de72592b09b35b61ac49ebf1eba54b"],["/service-worker.js","38e83fd84b6e60cc3bb6696d2de53440"],["/styles/404.css","c92ff1be9c32677f44fb5bfafaf6e3f7"],["/styles/Calender.css","f465826c2eb6222492ae3f9a3b708f43"],["/styles/Footer.css","cde77b2e7acc1b77979a3b5565b32206"],["/styles/Header.css","7ab0ff6bfeeb4a1e351819ff75119e80"],["/styles/Index.css","bc7ec4529f031b1593f2f93742ef5b0c"],["/styles/KarriereMuligheder.css","d41d8cd98f00b204e9800998ecf8427e"],["/styles/QuizSide.css","2f6b13bebc596c7098dce007d221b1d4"],["/styles/StyleVirksomheder.css","689b12671386eff84b8b6cc28e013b88"],["/styles/UddannelseSide.css","8de329e3482b18e5c8d4b3fffe457534"],["/virksomhedder/3-byg-tag-&-facade-aps.html","da8593346474ffc12d4bd9f3161f4c4a"],["/virksomhedder/anlægsgartner-gottlieb.html","32242a175c6b000d01559aa55abd3015"],["/virksomhedder/attendo.html","ed0dcf19c02c824db79840e25324bd41"],["/virksomhedder/bang-nielsen.html","0e82d6b70fd38eb42baff1d911bed7cb"],["/virksomhedder/bautahøj-konferencecenter.html","1be0d5465410b440e9fa51d1a9fbd9fa"],["/virksomhedder/brenntag-biosector.html","23292e558126cf8e8e9368ffb4d24701"],["/virksomhedder/campus-frederikssund.html","dbfc94e3f1450bada45aee9e68f9c911"],["/virksomhedder/co-ro.html","625f4465289e0549f41a9e9b40cbb374"],["/virksomhedder/el-abc.html","24703d3c8400c5a6b04a4437964c0864"],["/virksomhedder/esnord.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/frederikssund-business.html","4cfdce3af7b701b667cac65e99512908"],["/virksomhedder/frederikssund-kommune.html","ab6e40587daab71130654b63337a2cc5"],["/virksomhedder/frederikssund-ungdomsskole.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/føtex.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/h.-helbo-hansen.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/haldor-topsøe.html","752bc537d2cbefa8c952a4622cb46582"],["/virksomhedder/husmer-glas-og-facade.html","9dd0c18c8566847664861d9d948d40a7"],["/virksomhedder/knord.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/lomax.html","43901d613f09cd70a1116860d9759be4"],["/virksomhedder/mangor-&-nagel.html","7bbb1581757defb46154b74efccb8ad4"],["/virksomhedder/mountain-top-industries.html","30afe6414aef225df63186d34d351cea"],["/virksomhedder/procom.html","2ef29e56084178c7f30b245316176624"],["/virksomhedder/salling_group.html","6170679107170300d12f73b76a59ce19"],["/virksomhedder/sillebroen.html","d95a9215f22c8596b9d2598683d55cef"],["/virksomhedder/sopu.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/stark.html","18bb3f53ae2929e83af9d67a06a8254c"],["/virksomhedder/tec.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/topsil.html","f2b4bb3a3b8c8d4ddcdf7ba51e09a20b"],["/virksomhedder/trekløverskolen.html","3e45cbdb9b46e20f4795d715bf283ffb"],["/virksomhedder/uuvest.html","3e45cbdb9b46e20f4795d715bf283ffb"]];
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







