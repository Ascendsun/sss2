"use strict";
cc._RF.push(module, '3086d4/qp5Fs4lHZ22cK68H', 'RoomPlayway');
// module/hall/script/RoomPlayway.js

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
        atlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        gametype: {
            default: null,
            type: cc.Node
        },
        roomoption: {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},
    init: function init(playway) {
        console.log("这是测试:" + this.gametype);
        console.log(this.gametype);
        /**
         * 需要预先请求 在线人数
         */
        if (playway) {
            this.data = playway;
        }
        if (playway.code == "dizhu") {
            this.gametype.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("斗地主");
        } else if (playway.code == "majiang") {
            this.gametype.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("广东麻将");
        } else if (playway.code == "poker") {
            this.gametype.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("德州扑克");
        }
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();