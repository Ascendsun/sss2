(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/module/game/majiang/script/summary/SummaryClick.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '72e3dJ9+HxO36v85+BG/64a', 'SummaryClick', __filename);
// module/game/majiang/script/summary/SummaryClick.js

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
    /**
     * 结算页面上的 背景的 点击事件，主要是用于事件拦截，禁用冒泡
     * @param event
     */
    onBGClick: function onBGClick(event) {
        event.stopPropagation();
    },
    /**
     * 结算页面上的关闭按钮 的 点击事件 , 关闭按钮 和 继续按钮 功能是一样的，都是继续游戏
     */
    onCloseClick: function onCloseClick() {
        /**
         * 发射事件到 上一级 处理
         */
        this.node.dispatchEvent(new cc.Event.EventCustom("close", true));
    },
    /**
     * 结算页面上的关闭按钮 的 点击事件 , 关闭按钮 和 继续按钮 功能是一样的，都是继续游戏
     */
    onBeginClick: function onBeginClick() {
        /**
         * 发射事件到 上一级 处理
         */
        this.node.dispatchEvent(new cc.Event.EventCustom("begin", true));
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
        //# sourceMappingURL=SummaryClick.js.map
        