/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/13/满座衣冠似雪/index.html","271e5f0ecb11bd6741761791e8c34cb9"],["/2023/10/08/数学家和辩手/index.html","358909cce82a9f53e195bcce09b2ba25"],["/2023/11/30/大语言模型测评及使用指南/index.html","b31fb4c455885bd24066c4c8e8acf8a6"],["/2023/12/02/建站历程/index.html","c16d53b729a00518d06f4216e0f9c1fc"],["/2023/12/02/旧题新破/index.html","cc88f0bf123c594e537da32b384a6cf0"],["/404.html","9e7cdfbb661103c77b3c2faf8a874eb8"],["/archives/2023/06/index.html","929ce71a28af08b5567343fe47388992"],["/archives/2023/10/index.html","7d75c3738d6563a530b6f08496bb71a5"],["/archives/2023/11/index.html","327269ae25e5dda02de838333cef9ba6"],["/archives/2023/12/index.html","d6b581a7a052fa8467dd162570453a48"],["/archives/2023/index.html","ceb51ce3f111a28e45919b8608da9af5"],["/archives/index.html","d5e6ad00bc21c4f748dad55484cb4c8c"],["/assets/fonts.css","f1a0bd9b7a5e7364249f69e9fb36a5e7"],["/assets/odometer-theme-minimal.css","5e63b0172ec25f3f08e2ac8ba082e6b3"],["/categories/index.html","1fad370c1de237fca05f11dfa67ace02"],["/categories/技术/index.html","15e6e41d4f6452a2900018eb3aed8e4c"],["/categories/杂文/index.html","ee80d0a0c68958cdf7f64050f7ae2664"],["/css/common/animated.css","a1773c7601b699959d47eb0b896ea06a"],["/css/common/basic.css","3b236c33772f9e5daed5c9319ddfc417"],["/css/common/codeblock/code-block.css","1953f9537db869600998203e80c4f175"],["/css/common/codeblock/code-theme.css","475fb54ab3a22ec98ebb1c25109ae9f5"],["/css/common/codeblock/highlight.css","569309b6869d94bec18a0a4803a4efb9"],["/css/common/markdown.css","02176419d25f6c6762d6b377fc241059"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","824db0bfe9da12cdb100e100aae23c6b"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","85688b29c15ca280a7e3e4eb8bca44aa"],["/css/layout/category-content.css","832bd758c809a3fc5493ec77890e2e5e"],["/css/layout/category-list.css","3734a3d4c43b9158e0d8ef725cf6bd83"],["/css/layout/home-content.css","c301d53c8453fe2a873e282a7b82b989"],["/css/layout/home-sidebar.css","78500f69a0fae1188a906d1596165f28"],["/css/layout/page.css","894ed65c3fa3aaee46a7a4a54a831b12"],["/css/layout/tag-content.css","43ae4a06e2a7c96568bf9c3377ce7a10"],["/css/style.css","b866392812da8ae1c8c8b9d1f905eacb"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/OPTIMA.woff","69c36d2c33305af0a3a89d1d05851cc0"],["/fonts/OPTIMA_B.woff","4bcc802da04837b44ab2d5e467c857fc"],["/fonts/Optima Medium.woff","b390c553081444b0bcd614a14f4557fe"],["/fonts/Optima_Italic.woff","ff6478c3cd4b8ddd2bc444b30be4e1b8"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/open-sans-v34-latin-700.woff","dce81ef083f18473a89ab8626b4916cc"],["/fonts/open-sans-v34-latin-700.woff2","e45478d4d6f15dafda1f25d9e0fb5fa1"],["/fonts/open-sans-v34-latin-regular.woff","600270a4cedf2a102a1d49e5148e6622"],["/fonts/open-sans-v34-latin-regular.woff2","e43b535855a4ae53bd5b07a6eeb3bf67"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/images/airplane-fill.svg","61cfb73dc24b4e66899886c66012dc1a"],["/images/author/android-chrome-192x192.png","b261955d4da77c62861b359cd2f649ec"],["/images/author/android-chrome-512x512.png","ec6f2e5895c75b7c7dfe569e29f7167a"],["/images/author/apple-touch-icon.png","e992463e6ada4ebe1bdf40f99b925e48"],["/images/author/favicon-16x16.png","d227a9a4dac42e2f6f1fd7a60f1cc024"],["/images/author/favicon-32x32.png","15db6eb69f33895eee93d0871503e03d"],["/images/face.svg","535f46bda36b50172f51b1de948b41c8"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/logo/android-chrome-192x192.png","72e719c7af8ffe77ad7c03d94c630ec5"],["/images/logo/android-chrome-512x512.png","1948964e3c21d8232c1519a2e652ba14"],["/images/logo/apple-touch-icon.png","3784b977a47c9fbd8c0a495d8cd36acb"],["/images/logo/favicon-16x16.png","ac3695adc2af8fe87c71f94c961fdedb"],["/images/logo/favicon-32x32.png","024d1ebfd629a63224e24768134867e4"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/index.html","1909804d1dd3a1e25df006dc54fdb514"],["/js/layouts/lazyload.js","9c57103e6a3007615fa080ffdf6417ce"],["/js/layouts/navbarShrink.js","7ad67d1403af519e6cfb4bbdf243ceed"],["/js/layouts/toc.js","6ba36e3d12cc05f20dbf06aa19c447dd"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","cdf1c08dca678e919d1a3f3cc891277d"],["/js/main.js","005ed74d282948f7ce27717f1d93a5f7"],["/js/plugins/aplayer.js","6af3a2c44e773c92cf953799a3e723eb"],["/js/plugins/masonry.js","0a67cb038790752d192f66e4f2b10945"],["/js/plugins/mermaid.js","d0896e9c535353dd6b20ec287c6d75ea"],["/js/plugins/tabs.js","340241f6749d7dfabf6f09291d3fdc15"],["/js/plugins/typed.js","d8938bb612ea508bd243a5fd785cf789"],["/js/tools/codeBlock.js","7d5a3a7d1d494f2df18cc10b8795fec3"],["/js/tools/lightDarkSwitch.js","99fda051f2b6536fc7ab22c4279da83d"],["/js/tools/localSearch.js","9bd9cea1b1621fbb6fb1d138133a5afc"],["/js/tools/runtime.js","69dffaa947adf2e3b796269dc1a49f91"],["/js/tools/scrollTopBottom.js","19ce929cb0f6317e8cbb5b0154960e6b"],["/js/tools/tocToggle.js","8fcef50b04b6c7bc0d816b494e5e3bcb"],["/js/utils.js","b87b780b364d4db16ea873acdd534606"],["/links/index.html","6d5362123a5c61e9ae3f687739db0e5f"],["/masonry/index.html","e538666675d27deb0ec95d0f1e55fcb1"],["/sw-register.js","68d7722a40e2f01aaf4a060e4b847d62"],["/tags/AI/index.html","c4413f7212e62822d8347c21220e5918"],["/tags/index-1.html","5bc710bd78dac3009b8027f4171f1c13"],["/tags/index.html","a46da7b85af1b8c77c59ed00741e8865"],["/tags/技术/index.html","9d56d3696b35a68fa94e3b011d386077"],["/tags/数学/index.html","45d62d10c8f4a70a790987ecf2ee6b56"],["/tags/辩论/index.html","b9557ccf506b2fa0562b918fdd45c96a"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
