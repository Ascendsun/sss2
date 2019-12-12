"use strict";
cc._RF.push(module, 'b8da7m1o6lOnpZbARNcuqt/', 'DeskCards');
// module/game/majiang/script/cards/DeskCards.js

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

    init: function init(cvalue) {
        this.value = cvalue;
        var cardframe = void 0;
        var cardcolors = parseInt(this.value / 4);
        var cardtype = parseInt(cardcolors / 9);
        var deskcard = void 0;
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
        cardframe = this.atlas.getSpriteFrame('牌面-' + deskcard);
        this.cardvalue.getComponent(cc.Sprite).spriteFrame = cardframe;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();