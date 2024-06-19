/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/13/满座衣冠似雪/index.html","52d745e73ec7edab97507f2478883720"],["/2023/10/08/数学家和辩手/index.html","324e21bfd489187813840be838640154"],["/2023/11/30/大语言模型测评及使用指南/index.html","72d33ff47eccae1dbc87fdab373cc410"],["/2023/12/04/碎碎念/index.html","623a41819d87e1f78440e51cb6cee590"],["/2023/12/06/大创/index.html","cb67c266b8b9e87452a0924787d9cf1f"],["/2023/12/06/大创/大创1.png","c62c6a65083119b0175370e2627be2fd"],["/2023/12/06/大创/大创2.png","d531c2df8cd505be4eb4db10accc4d8e"],["/2023/12/06/大创/大创3.png","41cac5e976fd8b1c1f953de433cbf2a0"],["/2024/04/04/关于旅行/index.html","7dfcc54526437ea83d1afbff4aa2bd0b"],["/404.html","4d4e8f2b128bbacb4f4c6e7cc5391e1b"],["/archives/2023/06/index.html","19774607399aff3c150c8567b2a08942"],["/archives/2023/10/index.html","ba314d3a0e94cf5126d82ea385dbc11c"],["/archives/2023/11/index.html","73f8c1a216bdd5d485ec8ae64668a76d"],["/archives/2023/12/index.html","46a646b60f5f9880255e6cde5429aa00"],["/archives/2023/index.html","3d0c36d5c3d1dc888e652099af893400"],["/archives/2024/04/index.html","abd20be6ff906c6a8e236ce1d9aeddc4"],["/archives/2024/index.html","03a1e45ca31842fcc99fa8e013125056"],["/archives/index.html","4b96c191dbe8316fdcddb3c8f300d013"],["/assets/fonts.css","f1a0bd9b7a5e7364249f69e9fb36a5e7"],["/assets/odometer-theme-minimal.css","5e63b0172ec25f3f08e2ac8ba082e6b3"],["/categories/index.html","f6d1481b4d4a6abcb5b4fd21571def83"],["/categories/技术/index.html","00b951123ba488a6691d43f8d6e514cb"],["/categories/数学/index.html","8e30f3d7c5ffe2811e7d44da8f05e319"],["/categories/杂文/index.html","b9a2977732541637bfaa6601b2409523"],["/css/common/animated.css","a1773c7601b699959d47eb0b896ea06a"],["/css/common/basic.css","a7511cf67ee7478f13b4c5d3b5024892"],["/css/common/codeblock/code-block.css","1953f9537db869600998203e80c4f175"],["/css/common/codeblock/code-theme.css","f5b1082b546faf7d4df4c44fcff5701a"],["/css/common/codeblock/highlight.css","546b963507e00de7e2c97bffd2afc944"],["/css/common/markdown.css","02176419d25f6c6762d6b377fc241059"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","46998a82667a6e89ec73904fc548bbd1"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","11bee5ca3bf2ef1c9940da4930bde4f2"],["/css/layout/category-content.css","fcae556b2df9fac5ffe08cb43ce5b659"],["/css/layout/category-list.css","3734a3d4c43b9158e0d8ef725cf6bd83"],["/css/layout/home-content.css","81bb731b0223ef4eb465a411b35ca763"],["/css/layout/home-sidebar.css","9b0d129a434aa32976c4c9ca553bcacb"],["/css/layout/page.css","219ca3f8b96b41f666f08ce178e457fc"],["/css/layout/tag-content.css","8deb984e55bb5785da14c1cbc196fc98"],["/css/style.css","52371d4738697c20fb84a3021f30e91a"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/OPTIMA.woff","69c36d2c33305af0a3a89d1d05851cc0"],["/fonts/OPTIMA_B.woff","4bcc802da04837b44ab2d5e467c857fc"],["/fonts/Optima Medium.woff","b390c553081444b0bcd614a14f4557fe"],["/fonts/Optima_Italic.woff","ff6478c3cd4b8ddd2bc444b30be4e1b8"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/open-sans-v34-latin-700.woff","dce81ef083f18473a89ab8626b4916cc"],["/fonts/open-sans-v34-latin-700.woff2","e45478d4d6f15dafda1f25d9e0fb5fa1"],["/fonts/open-sans-v34-latin-regular.woff","600270a4cedf2a102a1d49e5148e6622"],["/fonts/open-sans-v34-latin-regular.woff2","e43b535855a4ae53bd5b07a6eeb3bf67"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/index.html","4fd1f949af175ea01c53ef928ceaea9e"],["/js/layouts/lazyload.js","f66eb5d7297fd1d459f85396de7fcc3a"],["/js/layouts/navbarShrink.js","4ef9f38bb1d219fe37895479bafaac68"],["/js/layouts/toc.js","12e18cb2d6eef50f6534c5f893866f21"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","cdf1c08dca678e919d1a3f3cc891277d"],["/js/main.js","19080e3e0ad6061db02fe89f5ea6101f"],["/js/plugins/aplayer.js","a93e81cbce5d6019ef19a156c0f6d69b"],["/js/plugins/masonry.js","ace97a4dd2c11a6c8b4500a239f9b0dd"],["/js/plugins/mermaid.js","d0896e9c535353dd6b20ec287c6d75ea"],["/js/plugins/tabs.js","ec14bec11f239acd3a1f2e0b6027cc5e"],["/js/plugins/typed.js","50633e041a498259e8e74fbef6d87d49"],["/js/tools/codeBlock.js","38f927374ea2351e412ae15669e9f184"],["/js/tools/lightDarkSwitch.js","f1757d10d18cd21aedbbf474a1388ffa"],["/js/tools/localSearch.js","ac164f8e9dc0b22d075c66810ed0dc45"],["/js/tools/runtime.js","1042d74a1e7fe467e6c738ebbf8b81af"],["/js/tools/scrollTopBottom.js","fd2af951cbbd044d882a86c1800bd01e"],["/js/tools/tocToggle.js","79602f9bf9716a310fc1eabe0ffebc0a"],["/js/utils.js","2d97ae1b893f930ab13de3d20a8ef030"],["/links/index.html","f7d1c201f0750134a7094d654e32ee45"],["/masonry/index.html","26ac5f5f3ed587ef0c94798af08b514e"],["/sw-register.js","2c2bec402a4c6ae4a4374f7d5f6967f9"],["/tags/AI/index.html","3875fb5b3a9d8e14424bdd4091e2d0c7"],["/tags/index-1.html","6f9845daedc74fb3ad2c5ea76b48b28d"],["/tags/index.html","2b1aebad110f4e81f397e4a811515289"],["/tags/图论/index.html","06367a1cb05ad3669c8f3980d98f6153"],["/tags/怀旧/index.html","0d6dc06f103cfe6eba8f79b90828ee53"],["/tags/数学/index.html","647b64f5567a4cbc8fb5422afef968c9"],["/tags/旅行/index.html","78078bb08861c58355b2718bc4e036d9"],["/tags/辩论/index.html","181be8d7397c24871340637fee4c88d9"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
