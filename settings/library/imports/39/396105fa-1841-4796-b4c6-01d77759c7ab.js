"use strict";
cc._RF.push(module, '39610X6GEFHlrTGAdd3Wcer', 'IOUtils');
// resources/script/components/IOUtils.js

"use strict";

cc.Class({
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

    // use this for initialization
    statics: {
        get: function get(key) {
            console.log(cc.sys.localStorage.getItem(key) + "这个是get方法返回的参数");
            return cc.sys.localStorage.getItem(key);
        },
        put: function put(key, value) {
            cc.sys.localStorage.setItem(key, value);
        },
        remove: function remove(key) {
            cc.sys.localStorage.removeItem(key);
        }
        // called every frame, uncomment this function to activate update callback
        // update: function (dt) {

        // },
    } });

cc._RF.pop();