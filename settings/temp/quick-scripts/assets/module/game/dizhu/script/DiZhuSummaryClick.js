(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/module/game/dizhu/script/DiZhuSummaryClick.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4e980BPHPtCgozJhOw88LZe', 'DiZhuSummaryClick', __filename);
// module/game/dizhu/script/DiZhuSummaryClick.js

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
    onLoad: function onLoad() {},
    onBegin: function onBegin() {
        /**
         * 发射事件到 上一级 处理
         */
        this.node.dispatchEvent(new cc.Event.EventCustom("begin", true));
    },
    opendeal: function opendeal() {
        /**
         * 发射事件到 上一级 处理
         */
        this.node.dispatchEvent(new cc.Event.EventCustom("opendeal", true));
    },
    onClose: function onClose() {
        /**
         * 发射事件到 上一级 处理
         */
        this.node.dispatchEvent(new cc.Event.EventCustom("close", true));
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=DiZhuSummaryClick.js.map
        