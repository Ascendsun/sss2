"use strict";
cc._RF.push(module, '74593mJuotD0Y/H/yjldfAs', 'DizhuButton');
// module/game/dizhu/script/DizhuButton.js

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
    back: function back() {
        this.loadding();
        var self = this;
        setTimeout(function () {
            self.scene(cc.beimi.gametype, self);
        }, 500);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();