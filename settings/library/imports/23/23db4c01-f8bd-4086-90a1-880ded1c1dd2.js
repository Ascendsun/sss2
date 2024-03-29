"use strict";
cc._RF.push(module, '23db4wB+L1AhpChiA3tHB3S', 'PlaywayGroup');
// module/hall/script/room/PlaywayGroup.js

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

        //组名称
        grouptitle: {
            default: null,
            type: cc.Label
        },
        //分组框
        groupbox: {
            default: null,
            type: cc.Node
        },
        //分组框4个
        groupbox_four: {
            default: null,
            type: cc.Node
        },
        //内容
        content: {
            default: null,
            type: cc.Node
        },
        //选项名
        itemname: {
            default: null,
            type: cc.Label
        },
        //单选框按钮
        checkbox: {
            default: null,
            type: cc.Node
        },
        //单选框节点
        checkboxnode: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        this.node.on('checkbox', function (event) {
            console.log("qiancheng");
            if (self.checkbox != null) {
                if (self.checked == false) {
                    if (self.data.type == "radio") {
                        for (var inx = 0; inx < self.options.length; inx++) {
                            var script = self.options[inx];
                            script.doUnChecked();
                        }
                    }
                    self.doChecked();
                } else {
                    if (self.data.type == "radio") {
                        for (var inx = 0; inx < self.options.length; inx++) {
                            var _script = self.options[inx];
                            _script.doUnChecked();
                        }
                        self.doChecked();
                    } else {
                        self.doUnChecked();
                    }
                }
            }
            event.stopPropagation();
        });
    },
    init: function init(group, itempre, items, parentoptions) {
        this.data = group;
        this.options = parentoptions;

        this.groupoptions = new Array();
        this.checked = false;

        this.grouptitle.string = group.name;
        if (this.groupbox != null && itempre != null) {
            var itemsnum = 0;
            for (var inx = 0; inx < items.length; inx++) {
                if (items[inx].groupid == group.id) {
                    itemsnum = itemsnum + 1;
                    var newitem = cc.instantiate(itempre);
                    if (group.style != null && group.style == "three") {
                        newitem.parent = this.groupbox;
                        this.groupbox_four.active = false;
                        this.groupbox.active = true;
                    } else {
                        newitem.parent = this.groupbox_four;
                        this.groupbox_four.active = true;
                        this.groupbox.active = false;
                    }
                    var script = newitem.getComponent("PlaywayGroup");
                    this.groupoptions.push(script);
                    script.inititem(items[inx], group, this.groupoptions);
                }
            }
            if (group.style != null && group.style == "three") {
                if (itemsnum > 4) {
                    this.content.height = 35 + 50 * (parseInt((itemsnum - 1) / 3) + 1);
                    this.groupbox.height = 50 * (parseInt((itemsnum - 1) / 3) + 1);
                }
            } else {
                if (itemsnum > 4) {
                    this.content.height = 35 + 50 * (parseInt((itemsnum - 1) / 4) + 1);
                    this.groupbox_four.height = 50 * (parseInt((itemsnum - 1) / 4) + 1);
                }
            }
        }
    },
    inititem: function inititem(item, group, parentoptions) {
        this.data = group;
        this.item = item;
        this.options = parentoptions;
        this.itemname.string = item.name;
        /**
         * 以下代码修正 OPTION超出宽度导致 点击错误的 问题
         */
        if (group.style == "three") {
            this.itemname.node.width = 160;
            this.itemname.node.x = 107;
        } else {
            this.itemname.node.width = 105;
            this.itemname.node.x = 77;
        }
        if (item.defaultvalue == true) {
            this.doChecked();
        } else {
            this.doUnChecked();
        }
        if (group != null && group.style != null && group.style == "three") {
            this.checkboxnode.x = -76;
        }
    },
    doChecked: function doChecked() {
        this.checked = true;
        this.checkbox.active = true;
    },
    doUnChecked: function doUnChecked() {
        this.checked = false;
        this.checkbox.active = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();