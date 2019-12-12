(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/module/hall/script/room/RoomOption.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '69fc37PjLpDHJPum+0hWtu/', 'RoomOption', __filename);
// module/hall/script/room/RoomOption.js

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
        atlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        // memo:{
        //     default:null ,
        //     type : cc.Label
        // },
        optionsnode: {
            default: null,
            type: cc.Node
        },
        // roomtitle:{
        //     default:null ,
        //     type : cc.Node
        // },
        optiongroup: {
            default: null,
            type: cc.Prefab
        },
        optiongroupitem: {
            default: null,
            type: cc.Prefab
        },
        memonode: {
            default: null,
            type: cc.Node
        },
        createroom: {
            default: null,
            type: cc.Node
        },
        freeopt: {
            default: null,
            type: cc.Node
        },
        fenshuselect: {
            default: null,
            type: cc.Node
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        console.log(self);
        console.log("self的值");
        this.group = new Array();
        this.node.on('createroom', function (event) {
            /**
             * 把参数 汇总一下， 然后转JSON以后序列化成字符串，发送 创建房间的请求
             */
            var extparams = {};
            var values = new Array();
            for (var inx = 0; inx < self.group.length; inx++) {
                var groupitem = self.group[inx];
                var value = "";
                for (var j = 0; j < groupitem.groupoptions.length; j++) {
                    var option = groupitem.groupoptions[j];
                    if (option.checked == true) {
                        if (value != "") {
                            value = value + ",";
                        }
                        value = value + option.item.value;
                    }
                }
                extparams[groupitem.data.code] = value;
            }
            /**
             * 藏到全局变量里去，进入场景后使用，然后把这个参数置空
             * @type {{}}
             */
            // extparams.gametype = self.data.code ;
            // console.log(self.data.code+"这个是code");
            // extparams.playway = self.data.id;
            // console.log(self.data.id+"这个是id");
            // extparams.gamemodel = "room" ;
            /**
             * 发送创建房间开始游戏的请求
             */
            event.stopPropagation();
            self.preload(extparams, self);
        });
    },
    init: function init(playway) {

        this.data = playway;
        if (this.memo != null && playway.memo != null && playway.memo != "") {
            this.memonode.active = true;
            this.memo.string = playway.memo;
        } else if (this.memonode != null) {
            this.memonode.active = false;
        }
        // if(playway.free == true){
        //     this.freeopt.active = true;
        //     this.createroom.active = false ;
        // }else{
        //     this.freeopt.active = false;
        //     this.createroom.active = true ;
        // }
        // if(playway.roomtitle!=null && playway.roomtitle!=""){
        //     let frame = this.atlas.getSpriteFrame(playway.roomtitle);
        //     if(frame!=null){
        //         this.roomtitle.getComponent(cc.Sprite).spriteFrame = frame ;
        //     }
        // }
        // if(this.optiongroup!=null && playway.groups!=null){
        //     for(var inx = 0 ; inx < playway.groups.length ; inx++){
        //         let group = cc.instantiate(this.optiongroup) ;


        //         let playWayGroup = group.getComponent("PlaywayGroup") ;
        //         playWayGroup.init(playway.groups[inx] , this.optiongroupitem , playway.items) ;
        //         this.group.push(playWayGroup);

        //         group.parent = this.optionsnode ;
        //     }
        // }
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
        //# sourceMappingURL=RoomOption.js.map
        