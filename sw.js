/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/13/满座衣冠似雪/index.html","7a172370e4770fb6beac5b29915550c4"],["/2023/10/08/数学家和辩手/index.html","72a5f25a88078b7e57f8dcdf4bd4dafd"],["/2023/11/30/大语言模型测评及使用指南/index.html","5d70d422bd18b00041bdd83f2a0139c6"],["/2023/12/02/建站历程/index.html","75e2550e304ee181996ef88288d475b9"],["/2023/12/02/旧题新破/index.html","acbbcccb62c7b8e804d9af4b958b6859"],["/404.html","d5b8a5be70e2bd0cef0b736ec15e82f6"],["/archives/2023/06/index.html","a57410be88457c2871ff04ac318f6240"],["/archives/2023/10/index.html","3c44ca0be74f1f98367f5080b67e8cd3"],["/archives/2023/11/index.html","b72e139803b34bce1c56f4ede2c42012"],["/archives/2023/12/index.html","26a3ba2eb85420a4cf848cbbc7814a30"],["/archives/2023/index.html","247d7d3cccb94088d3bdd1cc2454ea6e"],["/archives/index.html","79d79a20f301e36e64085722613e9845"],["/assets/fonts.css","57b6662f1ccac4b7075c6ebf7a2cbcc3"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/index.html","6a152d33bf967a7b2f5cb9e6cc494ccc"],["/categories/技术/index.html","e440273de3ed342f17b311642db3b308"],["/categories/杂文/index.html","dce26f174f31995a65faeb159414e6a0"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","4994605befd6f1fba7f36000513ee7a9"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","f3cd9e605f795d43ebaf2c3e7d98231b"],["/css/common/codeblock/highlight.css","3b245c5bcc0cfd5e144e83850b214ffb"],["/css/common/markdown.css","b124d3db7737281cfe0e8188da1286ef"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","e06b136cc125b340ba33f73b3fe2a164"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","9fa02478b52aff833729f06a6a17101a"],["/css/layout/category-content.css","12d684a08fd51ddb7d8c4ae147762d0e"],["/css/layout/category-list.css","8680cef88358a209bd3e07326775b8b6"],["/css/layout/home-content.css","361606d0b6d56310558ff701b6b871d9"],["/css/layout/home-sidebar.css","06bc21635be4c93bf65051ce780d4ae5"],["/css/layout/page.css","b5a1dec1e33b874873b8282330bb66ef"],["/css/layout/tag-content.css","a669ae2afb97ed866e55be4c9e78233d"],["/css/style.css","40c98c58963aac17278c7e303a14f7e0"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/OPTIMA.woff","69c36d2c33305af0a3a89d1d05851cc0"],["/fonts/OPTIMA_B.woff","4bcc802da04837b44ab2d5e467c857fc"],["/fonts/Optima Medium.woff","b390c553081444b0bcd614a14f4557fe"],["/fonts/Optima_Italic.woff","ff6478c3cd4b8ddd2bc444b30be4e1b8"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/open-sans-v34-latin-700.woff","dce81ef083f18473a89ab8626b4916cc"],["/fonts/open-sans-v34-latin-700.woff2","e45478d4d6f15dafda1f25d9e0fb5fa1"],["/fonts/open-sans-v34-latin-regular.woff","600270a4cedf2a102a1d49e5148e6622"],["/fonts/open-sans-v34-latin-regular.woff2","e43b535855a4ae53bd5b07a6eeb3bf67"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/images/airplane-fill.svg","3f383b5a10be437bbc6032bbb70318f8"],["/images/author/android-chrome-192x192.png","a095f9ae24192232428c95322c8a4938"],["/images/author/android-chrome-512x512.png","a2b60503b459b918bd8c8ff32e3d09dc"],["/images/author/apple-touch-icon.png","f9a3209dcb67ad6e98677d8560974e85"],["/images/author/favicon-16x16.png","3a022db1b0f93fbd40a7636f8343f45d"],["/images/author/favicon-32x32.png","079927e971d345bfda2e4fd865925618"],["/images/face.svg","3caa6761f2c138552b3d198b4694635d"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/logo/android-chrome-192x192.png","5082bf665c8b52e773256d0b0ae5f12a"],["/images/logo/android-chrome-512x512.png","c59d8a4c8b8e1ad290bc91d8de1058a2"],["/images/logo/apple-touch-icon.png","f9cae5fce4cc82cde47721de7b8de20f"],["/images/logo/favicon-16x16.png","bcf5d87e4cd4ad240f95ad3d2465e17b"],["/images/logo/favicon-32x32.png","780c4c4345ee565bb39640c9834903be"],["/images/redefine-avatar.svg","fd210fedbfe357f35c570f61b943481b"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","f2f7a1ff85c45f31ad62b9a914488a5a"],["/js/layouts/lazyload.js","24e38a40625344925d3619316e02a3d6"],["/js/layouts/navbarShrink.js","08e872b287269c7f31f0a54dc444e6db"],["/js/layouts/toc.js","2044b79c18b73e72b30c71023cfd9a31"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","cdf1c08dca678e919d1a3f3cc891277d"],["/js/main.js","696538cbacd5df5b876b05e38e4418be"],["/js/plugins/aplayer.js","d771daaf295dedb9e89929fda5e13e6a"],["/js/plugins/masonry.js","35eb94db3168ae329652bc632c7f1b56"],["/js/plugins/mermaid.js","86abee6751e0e33e7451d595546cc96a"],["/js/plugins/tabs.js","d58576f7197f89ec762235753e2839ac"],["/js/plugins/typed.js","83e19d386f3651d678cbf1c8485c00a6"],["/js/tools/codeBlock.js","0fc35c216c37ebf89cb1e523cbc6f91e"],["/js/tools/lightDarkSwitch.js","5ae725fb35247d02575344feead2d7b3"],["/js/tools/localSearch.js","0519150a4474b788c590a3704a96a3b1"],["/js/tools/runtime.js","059c23c1c392f919d9fceb0d23140f79"],["/js/tools/scrollTopBottom.js","c8d6c80db4401c6ef0e4deb7aef87ab6"],["/js/tools/tocToggle.js","3e749bf9064a43184aca43da7f6e83c9"],["/js/utils.js","24558d06b7d30f9ff0c2a9a697536fa7"],["/links/index.html","3638c9315752de10e1eb2116f6dd3895"],["/masonry/index.html","12e59a963204b7c57c59259c526fbbf1"],["/sw-register.js","7b7d805712c2a41a896372955c62e44d"],["/tags/AI/index.html","3893f3c875f9ccb2fded7b857fe42830"],["/tags/index-1.html","59b2edb1cfdfb5d0faa53ea2640c4fc0"],["/tags/index.html","634540587629edb6e69b336dd827a178"],["/tags/技术/index.html","f904050cfae83227d0b07f4b2a28cf01"],["/tags/数学/index.html","b3793bf6fef3e5998289fa78e7472fbc"],["/tags/辩论/index.html","a989364ec813d0cb9859f614ac762e4d"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
