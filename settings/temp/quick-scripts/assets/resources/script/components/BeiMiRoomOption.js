(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/resources/script/components/BeiMiRoomOption.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '214d0MHSC5DcoE4sSZlfyz2', 'BeiMiRoomOption', __filename);
// resources/script/components/BeiMiRoomOption.js

"use strict";

var beiMiCommon = require("BeiMiCommon");
cc.Class({
    extends: beiMiCommon,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        playway: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},

    onClick: function onClick(one, to) {
        var gametype = cc.beimi.game.type(to);
        console.log(gametype + "dd");
        console.log(gametype);
        // console.log(this.playway+":playway的值")
        // console.log(this.playway)
        if (this.playway != null) {
            //获取RoomPlayway.js节点上的组件
            var script = this.playway.getComponent("RoomPlayway");
            // console.log(script+":script的值")
            // console.log(script.data)
            //克隆RoomPlayway.js节点上roomoption对象赋值给roomplayway
            var roomplayway = cc.instantiate(script.roomoption);
            // console.log(roomplayway+":roomplayway的值")
            // console.log(roomplayway)
            //将roomoption对象赋值给cc.beimi.openwin
            cc.beimi.openwin = roomplayway;
            // console.log(cc.beimi.openwin+":的值")
            // console.log(cc.beimi.openwin)
            //查找Canvas节点赋值给cc.beimi.openwin.parent  Node | null
            cc.beimi.openwin.parent = this.root();
            //获取RoomOption节点上所有组件赋值给roomoption
            var roomoption = roomplayway.getComponent("RoomOption");
            // console.log(roomoption+":roomoption的值")
            // console.log(roomoption)
            if (roomoption != null) {
                roomoption.init(script.data);
            }
        }
    }

    // update (dt) {},
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
        //# sourceMappingURL=BeiMiRoomOption.js.map
        