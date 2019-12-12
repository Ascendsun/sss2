(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/module/game/majiang/script/cards/HandCards.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ea8287c50lMKb/Afb/yUYFR', 'HandCards', __filename);
// module/game/majiang/script/cards/HandCards.js

'use strict';

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
        atlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        beimi0: {
            default: null,
            type: cc.SpriteAtlas
        },
        cardvalue: {
            default: null,
            type: cc.Node
        },
        target: {
            default: null,
            type: cc.Node
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.lastonecard = false;
        this.take = false;
        this.node.on('mousedown', function (event) {
            console.log('Hello!');
        });
        this.node.on('mousemove', function (event) {
            console.log('Hello Mover!');
        });
    },
    init: function init(cvalue) {
        this.value = cvalue;
        var cardframe = void 0;
        var cardcolors = parseInt(this.value / 4);
        var cardtype = parseInt(cardcolors / 9);

        this.mjtype = cardtype;
        this.mjvalue = parseInt(this.value % 36 / 4);

        var deskcard = void 0;
        this.lastonecard = false;
        if (cardcolors < 0) {
            deskcard = "wind" + (cardcolors + 8); //东南西北风 ， 中发白
        } else {
            if (cardtype == 0) {
                //万
                deskcard = "wan" + (parseInt(this.value % 36 / 4) + 1);
            } else if (cardtype == 1) {
                //筒
                deskcard = "tong" + (parseInt(this.value % 36 / 4) + 1);
            } else if (cardtype == 2) {
                //条
                deskcard = "suo" + (parseInt(this.value % 36 / 4) + 1);
            }
        }
        if (deskcard == "suo2") {
            cardframe = this.beimi0.getSpriteFrame('牌面-' + deskcard);
        } else {
            cardframe = this.atlas.getSpriteFrame('牌面-' + deskcard);
        }
        this.cardvalue.getComponent(cc.Sprite).spriteFrame = cardframe;

        var anim = this.getComponent(cc.Animation);
        anim.play("majiang_current");
    },
    lastone: function lastone() {
        if (this.lastonecard == false) {
            this.lastonecard = true;
            this.target.width = this.target.width + 30;
        }
    },
    selected: function selected() {
        this.target.opacity = 168;
        this.selectcolor = true;
    },
    relastone: function relastone() {
        if (this.lastonecard == true) {
            this.lastonecard = false;
            this.target.width = this.target.width - 30;
        }
    },
    reinit: function reinit() {
        this.relastone();

        this.lastonecard = false;

        this.selectcolor = false;
        this.target.opacity = 255;

        if (this.take) {
            this.target.y = this.target.y - 30;
            this.take = false;
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
        //# sourceMappingURL=HandCards.js.map
        