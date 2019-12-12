"use strict";
cc._RF.push(module, '4e980BPHPtCgozJhOw88LZe', 'DiZhuSummaryClick');
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