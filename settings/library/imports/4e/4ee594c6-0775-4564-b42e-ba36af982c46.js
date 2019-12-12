"use strict";
cc._RF.push(module, '4ee59TGB3VFZLQuujavmCxG', 'MenuClick');
// module/hall/script/menu/MenuClick.js

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
        setting: {
            default: null,
            type: cc.Prefab
        },
        xiaoxi: {
            default: null,
            type: cc.Prefab
        },
        share: {
            default: null,
            type: cc.Prefab
        },
        playway: {
            default: null,
            type: cc.Prefab
        },
        feedback: {
            default: null,
            type: cc.Prefab
        },
        Invitationcode: {
            default: null,
            type: cc.Prefab
        },
        shorekuang: {
            default: null,
            type: cc.Prefab
        },
        qiandao: {
            default: null,
            type: cc.Prefab
        },
        kefu: {
            default: null,
            type: cc.Prefab
        },
        zhanji: {
            default: null,
            type: cc.Prefab
        },
        caidan: {
            default: null,
            type: cc.Prefab
        },
        paixing: {
            default: null,
            type: cc.Prefab
        },
        wanfa: {
            default: null,
            type: cc.Prefab
        },
        qiehuanzhanhao: {
            default: null,
            type: cc.Prefab
        },
        menclick: {
            default: null,
            type: cc.Node
        },
        julebu: {
            default: null,
            type: cc.Prefab
        }

    },

    // use this for initialization
    onLoad: function onLoad() {},
    //foot设置按钮
    onSettingClick: function onSettingClick() {
        this.closeOpenWin();
        //cc.beimi.openwin得到setting对象
        cc.beimi.openwin = cc.instantiate(this.setting);
        //查找Canvas节点后返回的数据
        cc.beimi.openwin.parent = this.root();
    },
    //foot邮件按钮
    onMessageClick: function onMessageClick() {
        //cc.beimi.openwin得到message对象
        cc.beimi.openwin = cc.instantiate(this.xiaoxi);
        //查找Canvas节点后返回的数据
        cc.beimi.openwin.parent = this.root();
    },
    //foot分享按钮
    onShareClick: function onShareClick() {
        //cc.beimi.openwin得到share对象
        cc.beimi.openwin = cc.instantiate(this.share);
        //查找Canvas节点后返回的数据
        cc.beimi.openwin.parent = this.root();
    },
    //foot玩法按钮
    onPlaywayClick: function onPlaywayClick() {
        //cc.beimi.openwin得到playway对象
        cc.beimi.openwin = cc.instantiate(this.playway);
        //查找Canvas节点后返回的数据
        cc.beimi.openwin.parent = this.root();
    },
    //foot战绩按钮
    onRecordClick: function onRecordClick() {
        //cc.beimi.openwin得到playway对象
        cc.beimi.openwin = cc.instantiate(this.playway);
        //查找Canvas节点后返回的数据
        cc.beimi.openwin.parent = this.root();
    },
    //foot反馈按钮
    onFeedBackClick: function onFeedBackClick() {
        //cc.beimi.openwin得到feedback对象
        cc.beimi.openwin = cc.instantiate(this.feedback);
        //查找Canvas节点后返回的数据
        cc.beimi.openwin.parent = this.root();
    },
    onOpenchuangkou: function onOpenchuangkou() {
        cc.beimi.openwin = cc.instantiate(this.Invitationcode);
        cc.beimi.openwin.parent = this.root();
    },

    onOpenstore: function onOpenstore() {
        cc.beimi.openwin = cc.instantiate(this.shorekuang);
        cc.beimi.openwin.parent = this.root();
    },

    onOpensigin: function onOpensigin() {
        cc.beimi.openwin = cc.instantiate(this.qiandao);
        cc.beimi.openwin.parent = this.root();
    },

    onOpenkefu: function onOpenkefu() {
        cc.beimi.openwin = cc.instantiate(this.kefu);
        cc.beimi.openwin.parent = this.root();
    },

    onOpenzhanji: function onOpenzhanji() {
        cc.beimi.openwin = cc.instantiate(this.zhanji);
        cc.beimi.openwin.parent = this.root();
    },

    onOpencaidan: function onOpencaidan() {
        cc.beimi.openwin = cc.instantiate(this.caidan);
        cc.beimi.openwin.parent = this.root();
    },

    onOpenpaixing: function onOpenpaixing() {
        if (cc.beimi.openwin != null) {
            //销毁该对象，并释放所有它对其它对象的引用。
            cc.beimi.openwin.destroy();
            cc.beimi.openwin = null;
        }
        cc.beimi.openwin = cc.instantiate(this.paixing);
        cc.beimi.openwin.parent = this.root();
    },
    onOpenwanfa: function onOpenwanfa() {
        if (cc.beimi.openwin != null) {
            //销毁该对象，并释放所有它对其它对象的引用。
            cc.beimi.openwin.destroy();
            cc.beimi.openwin = null;
        }
        cc.beimi.openwin = cc.instantiate(this.wanfa);
        cc.beimi.openwin.parent = this.root();
    },

    onOpenqiehuanyonghu: function onOpenqiehuanyonghu() {
        if (cc.beimi.openwin != null) {
            //销毁该对象，并释放所有它对其它对象的引用。
            cc.beimi.openwin.destroy();
            cc.beimi.openwin = null;
        }
        cc.beimi.openwin = cc.instantiate(this.qiehuanzhanhao);
        cc.beimi.openwin.parent = this.root();
    },

    onOpenjulebu: function onOpenjulebu() {
        cc.beimi.openwin = cc.instantiate(this.julebu);
        cc.beimi.openwin.parent = this.root();
    }

    /*
    *缺少一个商城按钮
    */

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();