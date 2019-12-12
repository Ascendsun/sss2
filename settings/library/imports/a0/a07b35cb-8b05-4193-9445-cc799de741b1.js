"use strict";
cc._RF.push(module, 'a07b3XLiwVBk5RFzHmd50Gx', 'DialogClick');
// module/hall/script/menu/DialogClick.js

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
    onLoad: function onLoad() {},
    onClick: function onClick(event) {
        event.stopPropagation();
    },
    onCloseClick: function onCloseClick() {
        this.closeOpenWin();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();