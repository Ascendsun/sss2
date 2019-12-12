(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/resources/prefab/room/ZuJiang.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f0489wSRTpKopAQCyf9f1qp', 'ZuJiang', __filename);
// resources/prefab/room/ZuJiang.js

"use strict";

var com = require('modol');
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
        //========下拉组件===================
        fenshuselsect: {
            default: null,
            type: cc.Node
        },
        jushuselect: {
            default: null,
            type: cc.Node
        },
        fuwufeiselect: {
            default: null,
            type: cc.Node
        },
        zidongkaizhuoselect: {
            default: null,
            type: cc.Node
        },
        xianjiatuizhuselect: {
            default: null,
            type: cc.Node
        },
        zuidaqiangzhuang: {
            default: null,
            type: cc.Node
        },
        fanbeiguizeselect: {
            default: null,
            type: cc.Node
        },
        teshupaixingselect: {
            default: null,
            type: cc.Node
        },
        gaojixuanxiangselect: {
            default: null,
            type: cc.Node
        },
        fuwufeishuomingbutton: {
            default: null,
            type: cc.Node
        },
        wanjiatuizhubutton: {
            default: null,
            type: cc.Node
        },
        xiazhujiabeibutton: {
            default: null,
            type: cc.Node
        },
        xiazhuxianzhibutton: {
            default: null,
            type: cc.Node
        },
        anqiangzhuangjiabutton: {
            default: null,
            type: cc.Node
        },
        //=============================================================================
        oneClick: {
            default: null,
            type: cc.Node
        },
        toClick: {
            default: null,
            type: cc.Node
        },
        threeClick: {
            default: null,
            type: cc.Node
        },
        fourClick: {
            default: null,
            type: cc.Node
        },
        fiveClick: {
            default: null,
            type: cc.Node
        },
        sixClick: {
            default: null,
            type: cc.Node
        },
        sevenClick: {
            default: null,
            type: cc.Node
        },

        //================================
        tonghuashuntenbei: {
            default: null,
            type: cc.Node
        },
        wuxiaoniueightbei: {
            default: null,
            type: cc.Node
        },
        tonghuaniufivebei: {
            default: null,
            type: cc.Node
        },
        zhadanniuninebei: {
            default: null,
            type: cc.Node
        },
        yinhuaniusixbei: {
            default: null,
            type: cc.Node
        },
        shunziniufivebei: {
            default: null,
            type: cc.Node
        },
        jinhuaniueightbei: {
            default: null,
            type: cc.Node
        },
        huluniusixbei: {
            default: null,
            type: cc.Node
        },
        teshupaixingdikuang: {
            default: null,
            type: cc.Node
        },
        //=================================
        jinzhizhongtujiaru: {
            default: null,
            type: cc.Node
        },
        xinshoumoshi: {
            default: null,
            type: cc.Node
        },
        zidongtuoguan: {
            default: null,
            type: cc.Node
        },
        xiazhujiabei: {
            default: null,
            type: cc.Node
        },
        xiazhuxianzhi: {
            default: null,
            type: cc.Node
        },
        anqiangzhuangjiato: {
            default: null,
            type: cc.Node
        },
        gaojixuanxiangkuang: {
            default: null,
            type: cc.Node
        },
        caidanguanbi: {
            default: null,
            type: cc.Node
        },
        qumukuang: {
            default: null,
            type: cc.Node
        },
        xiaojiahao: {
            default: null,
            type: cc.Node
        },
        changjianjulebu: {
            default: null,
            type: cc.Node
        },
        jiarujulebu: {
            default: null,
            type: cc.Node
        },
        numberofpeople: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function onLoad() {},

    onClick: function onClick(evelnc) {
        this.jushuselect.active = false;
        this.fuwufeiselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.fanbeiguizeselect.active = false;
        this.teshupaixingselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.fenshuselsect.active == false) {
            this.fenshuselsect.active = true;
        } else {
            this.fenshuselsect.active = false;
        }
    },

    noClickto: function noClickto() {
        this.fenshuselsect.active = false;
        this.fuwufeiselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.fanbeiguizeselect.active = false;
        this.teshupaixingselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.jushuselect.active == false) {
            this.jushuselect.active = true;
        } else {
            this.jushuselect.active = false;
        }
    },

    onClickthree: function onClickthree() {
        this.fenshuselsect.active = false;
        this.jushuselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.fanbeiguizeselect.active = false;
        this.teshupaixingselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.fuwufeiselect.active == false) {
            this.fuwufeiselect.active = true;
        } else {
            this.fuwufeiselect.active = false;
        }
    },

    onClickfour: function onClickfour() {
        this.fenshuselsect.active = false;
        this.jushuselect.active = false;
        this.fuwufeiselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.fanbeiguizeselect.active = false;
        this.teshupaixingselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.zidongkaizhuoselect.active == false) {
            this.zidongkaizhuoselect.active = true;
        } else {
            this.zidongkaizhuoselect.active = false;
        }
    },

    onClickfive: function onClickfive() {
        this.fenshuselsect.active = false;
        this.jushuselect.active = false;
        this.fuwufeiselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.fanbeiguizeselect.active = false;
        this.teshupaixingselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.xianjiatuizhuselect.active == false) {
            this.xianjiatuizhuselect.active = true;
        } else {
            this.xianjiatuizhuselect.active = false;
        }
    },

    onClicksix: function onClicksix() {
        this.fenshuselsect.active = false;
        this.jushuselect.active = false;
        this.fuwufeiselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.fanbeiguizeselect.active = false;
        this.teshupaixingselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.zuidaqiangzhuang.active == false) {
            this.zuidaqiangzhuang.active = true;
        } else {
            this.zuidaqiangzhuang.active = false;
        }
    },

    onClickseven: function onClickseven() {
        this.fenshuselsect.active = false;
        this.jushuselect.active = false;
        this.fuwufeiselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.teshupaixingselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.fanbeiguizeselect.active == false) {
            this.fanbeiguizeselect.active = true;
        } else {
            this.fanbeiguizeselect.active = false;
        }
    },

    onClickeight: function onClickeight() {
        this.fenshuselsect.active = false;
        this.jushuselect.active = false;
        this.fuwufeiselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.fanbeiguizeselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.teshupaixingselect.active == false) {
            this.teshupaixingselect.active = true;
        } else {
            this.teshupaixingselect.active = false;
        }
    },

    onClicknine: function onClicknine() {
        this.fenshuselsect.active = false;
        this.jushuselect.active = false;
        this.fuwufeiselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.fanbeiguizeselect.active = false;
        this.teshupaixingselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.gaojixuanxiangselect.active == false) {
            this.gaojixuanxiangselect.active = true;
        } else {
            this.gaojixuanxiangselect.active = false;
        }
    },

    servestate: function servestate() {
        this.fenshuselsect.active = false;
        this.jushuselect.active = false;
        this.fuwufeiselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.fanbeiguizeselect.active = false;
        this.teshupaixingselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.fuwufeishuomingbutton.active == false) {
            this.fuwufeishuomingbutton.active = true;
        } else {
            this.fuwufeishuomingbutton.active = false;
        }
    },

    pushstate: function pushstate() {
        this.fenshuselsect.active = false;
        this.jushuselect.active = false;
        this.fuwufeiselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.fanbeiguizeselect.active = false;
        this.teshupaixingselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
        if (this.wanjiatuizhubutton.active == false) {
            this.wanjiatuizhubutton.active = true;
        } else {
            this.wanjiatuizhubutton.active = false;
        }
    },

    doublestate: function doublestate() {

        if (this.xiazhujiabeibutton.active == false) {
            this.xiazhujiabeibutton.active = true;
        } else {
            this.xiazhujiabeibutton.active = false;
        }
    },

    astrictstate: function astrictstate() {
        if (this.xiazhuxianzhibutton.active == false) {
            this.xiazhuxianzhibutton.active = true;
        } else {
            this.xiazhuxianzhibutton.active = false;
        }
    },

    bankerstate: function bankerstate() {
        if (this.anqiangzhuangjiabutton.active == false) {
            this.anqiangzhuangjiabutton.active = true;
        } else {
            this.anqiangzhuangjiabutton.active = false;
        }
    },

    teleport: function teleport(ccp, CustomEventData) {
        this.oneClick.children[0].getComponent(cc.Label).string = ccp.node.children[2].getComponent(cc.Label).string;
        this.fenshuselsect.active = false;
        com.score = CustomEventData;
        console.log(com.score + "ddd");
    },

    teleportto: function teleportto(ele, CustomEventData) {
        this.toClick.children[0].getComponent(cc.Label).string = ele.node.children[2].getComponent(cc.Label).string;
        this.jushuselect.active = false;
        com.nugames = CustomEventData;
    },

    teleportthree: function teleportthree(ele, CustomEventData) {
        this.threeClick.children[0].getComponent(cc.Label).string = ele.node.children[2].getComponent(cc.Label).string;
        this.fuwufeiselect.active = false;
        com.secharge = CustomEventData;
    },

    teleportfour: function teleportfour(ele, CustomEventData) {
        this.fourClick.children[0].getComponent(cc.Label).string = ele.node.children[2].getComponent(cc.Label).string;
        this.zidongkaizhuoselect.active = false;
        com.seoptable = CustomEventData;
    },

    teleportfive: function teleportfive(ele, CustomEventData) {
        this.fiveClick.children[0].getComponent(cc.Label).string = ele.node.children[2].getComponent(cc.Label).string;
        this.xianjiatuizhuselect.active = false;
        com.seoptable = CustomEventData;
    },

    teleportsix: function teleportsix(ele, CustomEventData) {
        this.sixClick.children[0].getComponent(cc.Label).string = ele.node.children[2].getComponent(cc.Label).string;
        this.zuidaqiangzhuang.active = false;
        com.maxhog = CustomEventData;
    },

    teleportseven: function teleportseven(ele, CustomEventData) {
        this.sevenClick.children[0].getComponent(cc.Label).string = ele.node.children[2].getComponent(cc.Label).string;
        this.fanbeiguizeselect.active = false;
        com.sptype = CustomEventData;
    },

    closeselect: function closeselect() {
        this.fenshuselsect.active = false;
        this.jushuselect.active = false;
        this.fuwufeiselect.active = false;
        this.zidongkaizhuoselect.active = false;
        this.xianjiatuizhuselect.active = false;
        this.zuidaqiangzhuang.active = false;
        this.fanbeiguizeselect.active = false;
        this.teshupaixingselect.active = false;
        this.gaojixuanxiangselect.active = false;
        this.fuwufeishuomingbutton.active = false;
        this.wanjiatuizhubutton.active = false;
        this.xiazhujiabeibutton.active = false;
        this.xiazhuxianzhibutton.active = false;
        this.anqiangzhuangjiabutton.active = false;
    },
    //=============================================
    clickyinchang: function clickyinchang() {
        console.log(this.teshupaixingselect);
        if (this.tonghuashuntenbei.children[1].active == true) {
            this.tonghuashuntenbei.children[2].active = true;
            this.tonghuashuntenbei.children[3].active = false;
            this.teshupaixingdikuang.children[0].active = true;
            if (com.doublerules == null || com.doublerules.equals("")) {
                com.doublerules = 1 + ',';
            } else {
                com.doublerules += 1 + ",";
            }
        } else {
            this.tonghuashuntenbei.children[2].active = false;
            this.tonghuashuntenbei.children[3].active = true;
            this.teshupaixingdikuang.children[0].active = false;
            if (com.doublerules != null || com.doublerules.equals("") == false) {
                com.doublerules = com.doublerules.replace("1,", "");
            }
        }
    },

    clickyinchangto: function clickyinchangto() {
        if (this.wuxiaoniueightbei.children[1].active == true) {
            this.wuxiaoniueightbei.children[2].active = true;
            this.wuxiaoniueightbei.children[3].active = false;
            this.teshupaixingdikuang.children[3].active = true;
            if (com.doublerules == null || com.doublerules.equals("")) {
                com.doublerules = 2 + ',';
            } else {
                com.doublerules += 2 + ",";
            }
        } else {
            this.wuxiaoniueightbei.children[2].active = false;
            this.wuxiaoniueightbei.children[3].active = true;
            this.teshupaixingdikuang.children[3].active = false;
            if (com.doublerules != null || com.doublerules.equals("") == false) {
                com.doublerules = com.doublerules.replace("2,", "");
            }
        }
    },

    clickyinchangthree: function clickyinchangthree() {
        if (this.tonghuaniufivebei.children[1].active == true) {
            this.tonghuaniufivebei.children[2].active = true;
            this.tonghuaniufivebei.children[3].active = false;
            this.teshupaixingdikuang.children[6].active = true;
            if (com.doublerules == null || com.doublerules.equals("")) {
                com.doublerules = 3 + ',';
            } else {
                com.doublerules += 3 + ",";
            }
        } else {
            this.tonghuaniufivebei.children[2].active = false;
            this.tonghuaniufivebei.children[3].active = true;
            this.teshupaixingdikuang.children[6].active = false;
            if (com.doublerules != null || com.doublerules.equals("") == false) {
                com.doublerules = com.doublerules.replace("3,", "");
            }
        }
    },

    clickyinchangfour: function clickyinchangfour() {
        if (this.zhadanniuninebei.children[1].active == true) {
            this.zhadanniuninebei.children[2].active = true;
            this.zhadanniuninebei.children[3].active = false;
            this.teshupaixingdikuang.children[1].active = true;
            if (com.doublerules == null || com.doublerules.equals("")) {
                com.doublerules = 4 + ',';
            } else {
                com.doublerules += 4 + ",";
            }
        } else {
            this.zhadanniuninebei.children[2].active = false;
            this.zhadanniuninebei.children[3].active = true;
            this.teshupaixingdikuang.children[1].active = false;
            if (com.doublerules != null || com.doublerules.equals("") == false) {
                com.doublerules = com.doublerules.replace("4,", "");
            }
        }
    },

    clickyinchangfive: function clickyinchangfive() {
        if (this.yinhuaniusixbei.children[1].active == true) {
            this.yinhuaniusixbei.children[2].active = true;
            this.yinhuaniusixbei.children[3].active = false;
            this.teshupaixingdikuang.children[4].active = true;
            if (com.doublerules == null || com.doublerules.equals("")) {
                com.doublerules = 5 + ',';
            } else {
                com.doublerules += 5 + ",";
            }
        } else {
            this.yinhuaniusixbei.children[2].active = false;
            this.yinhuaniusixbei.children[3].active = true;
            this.teshupaixingdikuang.children[4].active = false;
            if (com.doublerules != null || com.doublerules.equals("") == false) {
                com.doublerules = com.doublerules.replace("5,", "");
            }
        }
    },

    clickyinchangsix: function clickyinchangsix() {
        if (this.shunziniufivebei.children[1].active == true) {
            this.shunziniufivebei.children[2].active = true;
            this.shunziniufivebei.children[3].active = false;
            this.teshupaixingdikuang.children[7].active = true;
            if (com.doublerules == null || com.doublerules.equals("")) {
                com.doublerules = 6 + ',';
            } else {
                com.doublerules += 6 + ",";
            }
        } else {
            this.shunziniufivebei.children[2].active = false;
            this.shunziniufivebei.children[3].active = true;
            this.teshupaixingdikuang.children[7].active = false;
            if (com.doublerules != null || com.doublerules.equals("") == false) {
                com.doublerules = com.doublerules.replace("6,", "");
            }
        }
    },

    clickyinchangseven: function clickyinchangseven() {
        if (this.jinhuaniueightbei.children[1].active == true) {
            this.jinhuaniueightbei.children[2].active = true;
            this.jinhuaniueightbei.children[3].active = false;
            this.teshupaixingdikuang.children[2].active = true;
            if (com.doublerules == null || com.doublerules.equals("")) {
                com.doublerules = 7 + ',';
            } else {
                com.doublerules += 7 + ",";
            }
        } else {
            this.jinhuaniueightbei.children[2].active = false;
            this.jinhuaniueightbei.children[3].active = true;
            this.teshupaixingdikuang.children[2].active = false;
            if (com.doublerules != null || com.doublerules.equals("") == false) {
                com.doublerules = com.doublerules.replace("7,", "");
            }
        }
    },

    clickyinchangeight: function clickyinchangeight() {
        if (this.huluniusixbei.children[1].active == true) {
            this.huluniusixbei.children[2].active = true;
            this.huluniusixbei.children[3].active = false;
            this.teshupaixingdikuang.children[5].active = true;
            if (com.doublerules == null || com.doublerules.equals("")) {
                com.doublerules = 8 + ',';
            } else {
                com.doublerules += 8 + ",";
            }
        } else {
            this.huluniusixbei.children[2].active = false;
            this.huluniusixbei.children[3].active = true;
            this.teshupaixingdikuang.children[5].active = false;
            if (com.doublerules != null || com.doublerules.equals("") == false) {
                com.doublerules = com.doublerules.replace("8,", "");
            }
        }
    },
    //===================================================
    gaojiclickyincang: function gaojiclickyincang() {
        if (this.jinzhizhongtujiaru.children[1].active == true) {
            this.jinzhizhongtujiaru.children[2].active = true;
            this.jinzhizhongtujiaru.children[3].active = false;
            this.gaojixuanxiangkuang.children[0].active = true;
            if (com.adoption == null || com.adoption.equals("")) {
                com.adoption = 1 + ',';
            } else {
                com.adoption += 1 + ",";
            }
        } else {
            this.jinzhizhongtujiaru.children[2].active = false;
            this.jinzhizhongtujiaru.children[3].active = true;
            this.gaojixuanxiangkuang.children[0].active = false;
            if (com.adoption != null || com.adoption.equals("") == false) {
                com.adoption = com.adoption.replace("1,", "");
            }
        }
    },

    gaojiclickyincangto: function gaojiclickyincangto() {
        if (this.xinshoumoshi.children[1].active == true) {
            this.xinshoumoshi.children[2].active = true;
            this.xinshoumoshi.children[3].active = false;
            this.gaojixuanxiangkuang.children[1].active = true;
            if (com.adoption == null || com.adoption.equals("")) {
                com.adoption = 2 + ',';
            } else {
                com.adoption += 2 + ",";
            }
        } else {
            this.xinshoumoshi.children[2].active = false;
            this.xinshoumoshi.children[3].active = true;
            this.gaojixuanxiangkuang.children[1].active = false;
            if (com.adoption != null || com.adoption.equals("") == false) {
                com.adoption = com.adoption.replace("2,", "");
            }
        }
    },

    gaojiclickyincangthree: function gaojiclickyincangthree() {
        if (this.zidongtuoguan.children[1].active == true) {
            this.zidongtuoguan.children[2].active = true;
            this.zidongtuoguan.children[3].active = false;
            this.gaojixuanxiangkuang.children[2].active = true;
            if (com.adoption == null || com.adoption.equals("")) {
                com.adoption = 3 + ',';
            } else {
                com.adoption += 3 + ",";
            }
        } else {
            this.zidongtuoguan.children[2].active = false;
            this.zidongtuoguan.children[3].active = true;
            this.gaojixuanxiangkuang.children[2].active = false;
            if (com.adoption != null || com.adoption.equals("") == false) {
                com.adoption = com.adoption.replace("3,", "");
            }
        }
    },

    gaojiclickyincangfour: function gaojiclickyincangfour() {
        if (this.xiazhujiabei.children[1].active == true) {
            this.xiazhujiabei.children[2].active = true;
            this.xiazhujiabei.children[3].active = false;
            this.gaojixuanxiangkuang.children[3].active = true;
            if (com.adoption == null || com.adoption.equals("")) {
                com.adoption = 4 + ',';
            } else {
                com.adoption += 4 + ",";
            }
        } else {
            this.xiazhujiabei.children[2].active = false;
            this.xiazhujiabei.children[3].active = true;
            this.gaojixuanxiangkuang.children[3].active = false;
            if (com.adoption != null || com.adoption.equals("") == false) {
                com.adoption = com.adoption.replace("4,", "");
            }
        }
    },

    gaojiclickyincangfive: function gaojiclickyincangfive() {
        if (this.xiazhuxianzhi.children[1].active == true) {
            this.xiazhuxianzhi.children[2].active = true;
            this.xiazhuxianzhi.children[3].active = false;
            this.gaojixuanxiangkuang.children[4].active = true;
            if (com.adoption == null || com.adoption.equals("")) {
                com.adoption = 5 + ',';
            } else {
                com.adoption += 5 + ",";
            }
        } else {
            this.xiazhuxianzhi.children[2].active = false;
            this.xiazhuxianzhi.children[3].active = true;
            this.gaojixuanxiangkuang.children[4].active = false;
            if (com.adoption != null || com.adoption.equals("") == false) {
                com.adoption = com.adoption.replace("5,", "");
            }
        }
    },

    gaojiclickyincangsix: function gaojiclickyincangsix() {
        if (this.anqiangzhuangjiato.children[1].active == true) {
            this.anqiangzhuangjiato.children[2].active = true;
            this.anqiangzhuangjiato.children[3].active = false;
            this.gaojixuanxiangkuang.children[5].active = true;
            if (com.adoption == null || com.adoption.equals("")) {
                com.adoption = 6 + ',';
            } else {
                com.adoption += 6 + ",";
            }
        } else {
            this.anqiangzhuangjiato.children[2].active = false;
            this.anqiangzhuangjiato.children[3].active = true;
            this.gaojixuanxiangkuang.children[5].active = false;
            if (com.adoption != null || com.adoption.equals("") == false) {
                com.adoption = com.adoption.replace("6,", "");
            }
        }
    },
    //=====================================================
    onClickguanbi: function onClickguanbi() {
        if (cc.beimi.openwin != null) {
            //销毁该对象，并释放所有它对其它对象的引用。
            cc.beimi.openwin.destroy();
            cc.beimi.openwin = null;
        }
    },

    onClickqumu: function onClickqumu() {
        console.log(this.qumukuang);
        if (this.qumukuang.active == false) {
            this.qumukuang.active = true;
        } else {
            this.qumukuang.active = false;
        }
    },

    onClickxiaojiahao: function onClickxiaojiahao() {
        if (this.xiaojiahao.active == false) {
            this.xiaojiahao.active = true;
        } else {
            this.xiaojiahao.active = false;
        }
    },

    onClickcreatejulebu: function onClickcreatejulebu() {
        if (this.jiarujulebu.active == true) {
            this.jiarujulebu.active = false;
            this.changjianjulebu.active = true;
        } else {
            this.changjianjulebu.active = true;
        }
        if (this.xiaojiahao.active == true) {
            this.xiaojiahao.active = false;
        }
    },

    onClickjiarujulebu: function onClickjiarujulebu() {
        if (this.changjianjulebu.active == true) {
            this.changjianjulebu.active = false;
            this.jiarujulebu.active = true;
        } else {
            this.jiarujulebu.active = true;
        }
        if (this.xiaojiahao.active == true) {
            this.xiaojiahao.active = false;
        }
    },

    onClicktagoption: function onClicktagoption() {
        if (this.numberofpeople.children[0].children[0].children[1].active == true) {
            com.nupeople = 6;
        } else if (this.numberofpeople.children[0].children[1].children[1].active == true) {
            com.nupeople = 8;
        } else if (this.numberofpeople.children[0].children[2].children[1].active == true) {
            com.nupeople = 10;
        }
    },

    asdfjjjjjjjj: function asdfjjjjjjjj() {
        console.log(com);
    },

    root: function root() {
        //查找Canvas节点
        return cc.find("Canvas");
    },
    onclone: function onclone(eveln) {
        console.log(eveln);
    },
    onhisi: function onhisi(eveln) {
        console.log(eveln);
        // this.ccp.target.children[0].getComponent(cc.Label).string = eveln.node.children[2].getComponent(cc.Label).string;
    },

    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=ZuJiang.js.map
        