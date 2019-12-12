(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/module/game/majiang/script/MaJiangPlayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e95383hjkFI0LhTixqeMZQ5', 'MaJiangPlayer', __filename);
// module/game/majiang/script/MaJiangPlayer.js

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
        username: {
            default: null,
            type: cc.Label
        },
        goldcoins: {
            default: null,
            type: cc.Label
        },
        selected: {
            default: null,
            type: cc.Node
        },
        creator: {
            default: null,
            type: cc.Node
        },
        selectcards: {
            default: null,
            type: cc.Node
        },
        selectcolor: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.selected.active = false;
        this.creator.active = false;
    },
    init: function init(playerdata, inx, tablepos) {
        this.data = playerdata; //存放玩家数据
        this.tablepos = tablepos;
        if (inx == 0) {
            this.selectcards.parent.x = this.selectcards.parent.x * -1;
        } else if (inx == 1) {
            this.selectcards.parent.x = this.selectcards.parent.x * -1;
        }

        this.username.string = playerdata.username;
        this.goldcoins.string = playerdata.goldcoins;
    },
    banker: function banker() {
        this.creator.active = true;
    },
    selecting: function selecting() {
        if (this.data.id != cc.beimi.user.id) {
            this.selectcards.active = true;
            var ani = this.selectcolor.getComponent(cc.Animation);
            this.animState = ani.play("majiang_select");
            // 设置循环模式为 Loop
            this.animState.wrapMode = cc.WrapMode.Loop;
            this.animState.repeatCount = 20; //最大不超过 20次
        }
    },
    selectresult: function selectresult(data) {
        for (var i = 0; i < this.selected.children.length; i++) {
            this.selected.children[i].active = false;
            if (this.selected.children[i].name == data.color) {
                this.selected.children[i].active = true;
            }
        }
        this.selected.active = true;
        if (this.data.id != cc.beimi.user.id) {
            if (this.animState != null) {
                this.animState.stop("majiang_select");
            }
        }
    },
    clean: function clean() {
        this.creator.active = false;
        for (var i = 0; i < this.selected.children.length; i++) {
            this.selected.children[i].active = false;
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
        //# sourceMappingURL=MaJiangPlayer.js.map
        