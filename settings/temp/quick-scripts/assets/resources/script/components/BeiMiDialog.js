(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/resources/script/components/BeiMiDialog.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7c2f5/wtw5P0LyzuKEzV2dP', 'BeiMiDialog', __filename);
// resources/script/components/BeiMiDialog.js

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
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
            e.stopPropagation();
        });
        /**
         * 关闭ALERT的回调动作
         */
        this.node.on("close", function (event) {
            if (cc.beimi != null && cc.beimi.sessiontimeout == true) {
                cc.beimi.sessiontimeout = null;
                self.scene("login", self);
            }
            event.stopPropagation();
        });
    },
    onClose: function onClose() {
        var dialog = cc.find("Canvas/alert");
        cc.beimi.dialog.put(dialog);
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
        //# sourceMappingURL=BeiMiDialog.js.map
        