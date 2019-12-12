"use strict";
cc._RF.push(module, '6a4c7+ASWxPzb8+X9E5tU/a', 'logindialog');
// resources/script/components/logindialog.js

"use strict";

var beiMiCommon = require("BeiMiCommon");
cc.Class({
    extends: beiMiCommon,

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
        // .
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
            e.stopPropagation();
        });
    },
    onCloseClick: function onCloseClick() {
        /**
         * *  对象池返回， 释放资源 ，  同时 解除 事件绑定
         *
         * */
        var common = this.getCommon("common");
        if (common != null) {
            common.loginFormPool.put(common.dialog);
        }
    }
});

cc._RF.pop();