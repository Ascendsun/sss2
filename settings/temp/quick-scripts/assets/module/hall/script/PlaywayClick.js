(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/module/hall/script/PlaywayClick.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '917d5CY9nhAg4c6kp0gnisn', 'PlaywayClick', __filename);
// module/hall/script/PlaywayClick.js

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
        // ..
        playway: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},
    onClick: function onClick() {
        var self = this;

        var selectPlayway = this.getCommon("SelectPlayway");

        var thisplayway = this.playway.getComponent("Playway");

        var extparams = {
            gametype: thisplayway.data.code,
            playway: thisplayway.data.id
        };
        console.log(extparams.gametype + "code");
        console.log(extparams.playway + "id");
        this.closeOpenWin();
        this.preload(extparams, self);
    },
    createRoom: function createRoom(event, data) {
        var self = this;
        this.loadding();
        setTimeout(function () {
            self.scene(data, self);
        }, 200);
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
        //# sourceMappingURL=PlaywayClick.js.map
        