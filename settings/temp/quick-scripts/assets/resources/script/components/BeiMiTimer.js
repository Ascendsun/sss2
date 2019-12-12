(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/resources/script/components/BeiMiTimer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '39256C0d5RLXatej7GTm9/q', 'BeiMiTimer', __filename);
// resources/script/components/BeiMiTimer.js

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
        // ...
        text: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},
    init: function init(text, time, target) {
        var self = this;
        this.remaining = time;
        this.text.string = text + "（" + this.remaining + "）";
        this.schedule(function () {
            this.remaining = this.remaining - 1;
            if (this.remaining < 0) {
                self.unschedule(this);
            } else {
                self.text.string = text + "（" + this.remaining + "）";
            }
        }, 1, time);
    },
    stop: function stop(target) {
        this.remaining = 0;
        target.destroy();
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
        //# sourceMappingURL=BeiMiTimer.js.map
        