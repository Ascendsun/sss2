(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/module/hall/script/DefaultHallDataBind.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4b325WE1kpIToU13vjdwCfd', 'DefaultHallDataBind', __filename);
// module/hall/script/DefaultHallDataBind.js

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
        username: {
            default: null,
            type: cc.Label
        },
        goldcoins: {
            default: null,
            type: cc.Label
        },
        cards: {
            default: null,
            type: cc.Label
        },

        girl: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        if (this.ready()) {
            this.username.string = cc.beimi.user.username;
            this.pva_format(cc.beimi.user.goldcoins, cc.beimi.user.cards, cc.beimi.user.diamonds, self);
            this.pvalistener(self, function (context) {
                context.pva_format(cc.beimi.user.goldcoins, cc.beimi.user.cards, cc.beimi.user.diamonds, context);
            });
        }
    },
    pva_format: function pva_format(coins, cards, diamonds, object) {
        if (coins > 9999) {
            console.log(coins + ":金币");
            var num = coins / 10000;
            object.goldcoins.string = num.toFixed(2) + '万';
        } else {
            object.goldcoins.string = coins;
        }
        object.cards.string = cards + "张";
        console.log(cards + "张房卡");
    },
    playToLeft: function playToLeft() {
        //播放动画组件
        this._girlAnimCtrl = this.girl.getComponent(cc.Animation);
        this._girlAnimCtrl.play("girl_to_left");
    },
    playToRight: function playToRight() {
        this._girlAnimCtrl = this.girl.getComponent(cc.Animation);
        this._girlAnimCtrl.play("girl_to_right");
    },
    onDestroy: function onDestroy() {
        this.cleanpvalistener();
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
        //# sourceMappingURL=DefaultHallDataBind.js.map
        