"use strict";
cc._RF.push(module, 'bf72714t+NASJp+J1e5wv0I', 'HTTP');
// resources/script/lib/HTTP.js

"use strict";

cc.VERSION = 2017061001;
var HTTP = cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },
    statics: {
        baseURL: "http://localhost",
        wsURL: "ws://localhost:8080",
        authorization: null,

        httpGet: function httpGet(url, success, error, object) {
            console.log(url + "请求路径" + success + "成功状态下" + error + "失败状态下" + object);
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var respone = xhr.responseText;
                        if (success) {
                            success(respone, object);
                        }
                    } else {
                        if (error) {
                            error(object);
                        }
                    }
                }
            };
            var token = "";
            if (cc.beimi != null && cc.beimi.authorization != null) {
                token = cc.beimi.authorization;
            }
            if (url.indexOf("?") > 0) {
                xhr.open("GET", HTTP.baseURL + url + "&authorization=" + token, true);
            } else {
                xhr.open("GET", HTTP.baseURL + url + "?authorization=" + token, true);
            }

            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
            }
            //超时回调
            xhr.ontimeout = function (event) {
                error(object);
            };
            xhr.onerror = function (event) {
                error(object);
            };

            // note: In Internet Explorer, the timeout property may be set only after calling the open()
            // method and before calling the send() method.
            xhr.timeout = 3000; // 5 seconds for timeout

            xhr.send();
        },

        encodeFormData: function encodeFormData(data) {
            var pairs = [];
            var regexp = /%20/g;

            for (var name in data) {
                var value = data[name].toString();
                var pair = encodeURIComponent(name).replace(regexp, "+") + "=" + encodeURIComponent(value).replace(regexp, "+");
                pairs.push(pair);
            }
            return pairs.join("&");
        },
        httpPost: function httpPost(url, params, success, error, object) {
            var xhr = cc.loader.getXMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var respone = xhr.responseText;
                        if (success) {
                            success(respone, object);
                        }
                    } else {
                        if (error) {
                            error(object);
                        }
                    }
                }
            };
            xhr.open("POST", HTTP.baseURL + url, true);
            if (cc.beimi != null && cc.beimi.authorization != null) {
                xhr.setRequestHeader("authorization", cc.beimi.authorization);
            }
            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
            }
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            // note: In Internet Explorer, the timeout property may be set only after calling the open()
            // method and before calling the send() method.
            xhr.timeout = 5000; // 5 seconds for timeout

            xhr.send(HTTP.encodeFormData(params));
        }
    },

    // use this for initialization
    onLoad: function onLoad() {}

});

cc._RF.pop();