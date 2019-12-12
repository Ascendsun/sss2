"use strict";
cc._RF.push(module, 'e9bfb1QJiRAHJZMZ1KPDpqH', 'GameRoom');
// module/hall/script/GameRoom.js

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
        roomidDialog: {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},
    onClick: function onClick(event, data) {
        this.loadding();
        var object = this;
        setTimeout(function () {
            object.scene(data, object);
        }, 200);
    },
    onClickJoinRoom: function onClickJoinRoom() {
        if (this.roomidDialog) {
            cc.beimi.openwin = cc.instantiate(this.roomidDialog);
            cc.beimi.openwin.parent = this.root();
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();