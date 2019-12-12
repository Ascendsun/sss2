"use strict";
cc._RF.push(module, '814429VO1VJ+J7V3s9PuEOH', 'inputjuzhong');
// resources/prefab/room/inputjuzhong.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        zistinput: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function onLoad() {},


    onClick: function onClick() {

        console.log(this.zistinput);
        var editbox = this.getComponent(cc.EditBox);
        console.log(editbox);
        if (editbox) {
            var render_cmd = editbox.sgNode.renderCmd;
            var edTxt = render_cmd._edTxt;
            //text-align:
            edTxt.style["text-align"] = "center";
            //遍历下对象
            Object.keys(render_cmd).forEach(function (key) {
                console.log(key, render_cmd[key]);
            });
        }
    },

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();