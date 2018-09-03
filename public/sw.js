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

var precacheConfig = [["/404.html","a4e2271d19eb1f6f93a15e1b7a4e74dd"],["/KarriereMuligheder.html","e2ccff3f0b01e835e9c0e128f8cc8760"],["/Kasse1.html","0ca7e5f47acd7dfbfcbd91e1fbe9471d"],["/Kasse2.html","7c6da15729870e67a507c2427db60096"],["/Kasse3.html","8de538110de562e6b581bc2b8aa3713a"],["/Kasse4.html","d1d7702ef91e9c9ae15b4f9e5b848bce"],["/QuizSide.html","de06094a2731d87d3a0468a70752f464"],["/QuizSideData.json","1aa54e15262a189221f592c7cfc7b491"],["/UddannelseSide.html","7cb36d6298621a3f9973ef16b24aeb57"],["/Virksomhedsside.html","b547a972683776f7d299121b10abe471"],["/bootstrap/css/bootstrap-grid.css","f789083b5ad6878edfeeab311be6a1d6"],["/bootstrap/css/bootstrap-grid.min.css","8997ec71a78ea4b0da89935276f4188b"],["/bootstrap/css/bootstrap-reboot.css","f1f75a3daa995c078fda451f438d16fd"],["/bootstrap/css/bootstrap-reboot.min.css","1acc02b102fc1f6d4117be1726fb367e"],["/bootstrap/css/bootstrap.css","c17ae4f0529e0bc2fc887d2471ae124b"],["/bootstrap/css/bootstrap.min.css","416bb9e03b223eba66e9a3ca5a9da02e"],["/bootstrap/js/bootstrap.bundle.js","e52da38174949c713ccfb9ce929b0d4b"],["/bootstrap/js/bootstrap.bundle.min.js","18a1ebc44d97e64b7461be8cdde9d766"],["/bootstrap/js/bootstrap.js","bb38938b1b9056351722c813ddbbbe70"],["/bootstrap/js/bootstrap.min.js","d061ab58270e692309b728296e90bba2"],["/calendar.html","c353fd1533b95c46f572633e7b1af141"],["/images/Logo.png","b19d0c80353f08e3219c126f2f09f484"],["/images/Socialmedia/icon-facebook.png","b270a078f24337225e8a5b1a5985cb73"],["/images/Socialmedia/icon-instagram.png","0b454a7869c532757137cdc98e0cb364"],["/images/Socialmedia/icon-snapchat.png","4f63cbc4e3cb591c8b6b9bfcad6f060b"],["/images/Socialmedia/icon-twitter.png","cbd15d04a99c35ed6232d00872ac5781"],["/images/Virksomhedslogoer/3byg-vindue-rentegnet.png","cb578987479235fb664d7f2d0e9a3f18"],["/images/Virksomhedslogoer/Amphenol Procom_logo_print_CMYK.png","34e5661c1c582c6c9b890e01fda178d0"],["/images/Virksomhedslogoer/Attendo_pos_150mm150dpi.png","32a858c4aef20a32145d246bd2434324"],["/images/Virksomhedslogoer/Bang Nielsen.png","ba4fb8516627cd03ea3062d3804cda17"],["/images/Virksomhedslogoer/CORO_cmyk_27_mm_tagline.png","33d724e6a06c03afa000a6296bf8b802"],["/images/Virksomhedslogoer/Campus_logo_rentegn_web.jpg","e5adb4dd8fad79d0e0366f99f9cf0a6f"],["/images/Virksomhedslogoer/Esnord_dk_logo.jpg","0f6a60582c0277ff4eb4dd8533769719"],["/images/Virksomhedslogoer/FE Logo.jpg","15ee907cd139b4562dc47ef4479bed8e"],["/images/Virksomhedslogoer/HELBO_LOGO_FULL_CMYK.png","e47f397ea3f1c3c4e4a375ab295aa661"],["/images/Virksomhedslogoer/HT_logo_Eng_RGB_Black.png","015115713cc9628fed50c686807544f2"],["/images/Virksomhedslogoer/Husmer_logo_Pantone_v.7.png","ac3f9d058819ce01a5c76484bc1a170a"],["/images/Virksomhedslogoer/KNORD_FREDERIKSSUND_RGB_800px.png","459e426b6adc19ee4946522c0590cc5c"],["/images/Virksomhedslogoer/Logo, MountainTop.png","99e6295c6e8e0bbc5ace8662eb6e8e0e"],["/images/Virksomhedslogoer/Lomax Logo_ai.png","104903dca93d8eaafb927a047e0d03cb"],["/images/Virksomhedslogoer/MN_logo_ Arkitekter_100_.png","6e6f4217912c0208fd7f1f4fb2b75bfd"],["/images/Virksomhedslogoer/Sillebroen-Logo-2016.png","fb98ff7b5630843397f8afe4be308ed0"],["/images/Virksomhedslogoer/Stark logo sammen bygger vi.jpg","18c45cd5cafc59931242b15acbf1e1b6"],["/images/Virksomhedslogoer/Topsil.png","70de216f79b76343ad0c8f3e3a7e9c67"],["/images/Virksomhedslogoer/Trekloeverskolen_logo_web.jpg","465f31e726869f49416c1ea640095c44"],["/images/Virksomhedslogoer/UU Vest - Logo_juni2010.jpg","4c71bf45529ee2c98a5969b37cec0126"],["/images/Virksomhedslogoer/UUVest-logo-pos.jpg","7a58f90483e37769b5fb0b3802e3551c"],["/images/Virksomhedslogoer/Ungdomsskolen.jpg","fe18f81e13602ff82bc3950fa316d616"],["/images/Virksomhedslogoer/bautalogopng.png","05397b55ad596984d45d226f8fcd78ff"],["/images/Virksomhedslogoer/gartner gottlieb.png","1df74a107fabf69a27c7d928331822a2"],["/images/Virksomhedslogoer/logo_fotex_uden_outline_cmyk.png","758858b05943619d2b7df8d447f4eb10"],["/images/icons/android-icon-144x144.png","97ff14887258138febc879c807413a61"],["/images/icons/android-icon-192x192.png","1528a8d520e35889cbb1f1393e9a10b3"],["/images/icons/android-icon-36x36.png","e8f34017d827a1b6d2c6f3b522d4d12a"],["/images/icons/android-icon-48x48.png","05a5e1711e1d5a1407c72cae265e9991"],["/images/icons/android-icon-72x72.png","de84c257abd2ed1505ded5069d07a900"],["/images/icons/android-icon-96x96.png","399483954558e3f29d5c8c7894bb2237"],["/images/icons/apple-icon-114x114.png","3a539d2305f984d985ea5c794febee76"],["/images/icons/apple-icon-120x120.png","33cfc202b6ab707cbd2bd24e93cbbfa5"],["/images/icons/apple-icon-144x144.png","97ff14887258138febc879c807413a61"],["/images/icons/apple-icon-152x152.png","039c9408645b0d21d699c9ceb69cccf8"],["/images/icons/apple-icon-180x180.png","c7fc65acfcbfb766de17abd145ba4775"],["/images/icons/apple-icon-57x57.png","8f5fe09bc3da0110d6b7c3786245439a"],["/images/icons/apple-icon-60x60.png","6744fe51bb3ace0e9c3aa4d618864655"],["/images/icons/apple-icon-72x72.png","de84c257abd2ed1505ded5069d07a900"],["/images/icons/apple-icon-76x76.png","9e3123613c2d0d92b402644c27d99228"],["/images/icons/apple-icon-precomposed.png","1d50ce3ac03df5d6cafa809df1dc98bd"],["/images/icons/apple-icon.png","1d50ce3ac03df5d6cafa809df1dc98bd"],["/images/icons/favicon-16x16.png","6628c1085c4df0785f43edd6161ab123"],["/images/icons/favicon-32x32.png","58baa6d31be7af63292a3914dd004fec"],["/images/icons/favicon-96x96.png","399483954558e3f29d5c8c7894bb2237"],["/images/icons/manifest.json","b58fcfa7628c9205cb11a1b2c3e8f99a"],["/images/icons/ms-icon-144x144.png","97ff14887258138febc879c807413a61"],["/images/icons/ms-icon-150x150.png","8001d96b723d2cb74126a6144d479540"],["/images/icons/ms-icon-310x310.png","d3943713a710b50bad68cc45de882f60"],["/images/icons/ms-icon-70x70.png","8c101fc763ee9510c55132ab00b81c84"],["/images/img1.jpg","ec07f372090f5a7bf608faa749b8d1ff"],["/images/img2.png","c8ab0bd101b66dbcc1c7d1cea585d8d4"],["/images/img3.jpg","aaf41fad898f06bea9db263f15a16867"],["/images/img4.jpg","7f47ed65d0a0850b2d9e4eae7bc5cb42"],["/images/img5.png","8f6ca87751d6cd6a59d487c4181ef001"],["/images/img6.jpg","35eb53a3fb1945fb0f39649cb7ef706d"],["/index.html","a99654220f59cc06e9fc4c0d6a3bbdc1"],["/manifest.json","a86200d07bd5f9d9a58627215085a6b4"],["/scripts/Index.js","7298b3341017fd09387ce718b41c2c26"],["/scripts/KarriereMuligeder.js","d41d8cd98f00b204e9800998ecf8427e"],["/scripts/QuizSide.js","e8ad6788156d4e3c8bb33d62dc492cf9"],["/scripts/UddannelseSide.js","8db360792600cbe110f4909c8dd588e6"],["/scripts/Virksomhedsside.js","e9bf85f40131325810d844f2faeab997"],["/scripts/app.js","f2f12ce50e5c1159d2f21a11f19d7a42"],["/scripts/calender.js","760ef4f2d232b88fe7334ae9b69ab6f0"],["/scripts/jquery-3.3.1.js","b0e8755b0ab71a0a4aea47c3b589b47e"],["/scripts/materialize.js","38de72592b09b35b61ac49ebf1eba54b"],["/scripts/modernizr.js","8939df1efe92d3336de152336414393f"],["/service-worker.js","38e83fd84b6e60cc3bb6696d2de53440"],["/styles/Calender.css","b87fe915e17f2139b2bcc747bb556ffe"],["/styles/Footer.css","eb154e506e908225affdca1b50ba4b7a"],["/styles/Header.css","7ab0ff6bfeeb4a1e351819ff75119e80"],["/styles/Index.css","e343d1f889ffe4c7c1856bd4d56606bb"],["/styles/KarriereMuligheder.css","d41d8cd98f00b204e9800998ecf8427e"],["/styles/QuizSide.css","32b929ab306e92addc2628a3669f8ec8"],["/styles/StyleVirksomheder.css","f0e317e011c02857153ff4894e2e7e0e"],["/styles/UddannelseSide.css","70fb44f20a08cdefa9e25010fc816a53"]];
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







