"use strict";
cc._RF.push(module, 'f8327R8gFFLi72Qcm9IEpSQ', 'SelectColor');
// module/game/dizhu/script/SelectColor.js

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
    onClick: function onClick(event, data) {
        if (this.ready()) {
            var socket = this.socket();
            socket.emit("selectcolor", data);
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();