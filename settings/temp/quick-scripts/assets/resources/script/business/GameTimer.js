(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/resources/script/business/GameTimer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '35465tZFoBKsKL/r5rkrS4C', 'GameTimer', __filename);
// resources/script/business/GameTimer.js

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
     * @param self              调用的源
     * @param timernode         计时器所在的节点
     * @param atlas             计时器图集
     * @param timer_first       计时器首个计时字母
     * @param timer_sec         计时器第二个数字
     * @param times             计时器执行次数
     */
    runtimer: function runtimer(source, timernode, atlas, timer_first, timer_sec, times) {

        var self = this;
        this.remaining = times;
        timer_first.string = times;
        if (timernode) {
            timernode.active = true;
        }

        this.timersrc = function () {
            self.remaining = self.remaining - 1;
            if (self.remaining < 0) {
                source.unschedule(this);
                timernode.active = false;
            } else {
                timer_first.string = self.remaining;
            }
        };
        source.schedule(this.timersrc, 1, times, 0);

        return this.timersrc;
    },
    stoptimer: function stoptimer(source, timernode, timer) {
        if (timernode) {
            timernode.active = false;
        }
        var self = this;
        this.remaining = 0;
        if (timer) {
            source.unscheduleAllCallbacks();
        }
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
        //# sourceMappingURL=GameTimer.js.map
        