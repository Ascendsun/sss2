(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/resources/script/business/BeiMiQR.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cfbb8w3UbVOA4QUUKGuCXS8', 'BeiMiQR', __filename);
// resources/script/business/BeiMiQR.js

"use strict";

var beiMiCommon = require("BeiMiCommon");
cc.Class({
    extends: beiMiCommon,

    properties: {
        qrgraphics: {
            default: null,
            type: cc.Node
        },
        roomid: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},
    init: function init(data) {
        if (data != null && data != "") {
            this.roomid.string = "让好友扫描加入房间，房间号：" + data;
        }
        var qrcode = new QRCode(6, QRErrorCorrectLevel.H);
        qrcode.addData(data);

        qrcode.make();

        var size = this.qrgraphics.width;
        var num = qrcode.getModuleCount();
        var ctx = this.qrgraphics.getComponent(cc.Graphics);
        ctx.clear();
        ctx.fillColor = cc.Color.BLACK;
        // compute tileW/tileH based on node width and height
        var tileW = size / num;
        var tileH = size / num;
        // draw in the Graphics
        for (var row = 0; row < num; row++) {
            for (var col = 0; col < num; col++) {
                if (qrcode.isDark(row, col)) {
                    // cc.log(row, col)
                    // ctx.fillColor = cc.Color.BLACK;
                    var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
                    var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
                    ctx.rect(Math.round(col * tileW), size - tileH - Math.round(row * tileH), w, h);
                    ctx.fill();
                } else {}
                // ctx.fillColor = cc.Color.WHITE;

                // var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
                // var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
                // ctx.rect(Math.round(col * tileW), Math.round(row * tileH), w, h);
                // ctx.fill();
            }
        }
    }
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
        //# sourceMappingURL=BeiMiQR.js.map
        