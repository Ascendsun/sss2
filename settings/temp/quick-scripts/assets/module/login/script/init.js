(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/module/login/script/init.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2b60bxhrRtJ44oyACJf+UrI', 'init', __filename);
// module/login/script/init.js

"use strict";

cc.Class({

    //cc.Class继承自cc.Component
    extends: cc.Component,

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
        _progress: 0.0,
        _splash: null,
        _isLoading: false, //是否成功加载
        loaddingPrefab: {
            default: null,
            type: cc.Prefab
        },
        alertPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    // 将其用于初始化
    onLoad: function onLoad() {
        //非本地并且不是移动系统的进if  
        if (!cc.sys.isNative && cc.sys.isMobile) {
            //返回节点上canvas类型的所有组件赋值给canvas
            var canvas = this.node.getComponent(cc.Canvas);
            //优先将设计分辨率高度撑满视图高度。
            canvas.fitHeight = true;
            //优先将设计分辨率宽度撑满视图宽度。
            canvas.fitWidth = true;
        }
        'use strict';
        //获取视图的大小赋值给win
        var win = cc.director.getWinSize();
        //通过设置设计分辨率和匹配模式来进行游戏画面的屏幕适配(视图的宽,视图的高,整个应用程序在指定的区域内的可见位置);;作用就是屏幕自适应
        cc.view.setDesignResolutionSize(win.width, win.height, cc.ResolutionPolicy.EXACT_FIT);
        //最后调用initMgr方法
        this.initMgr();
    },
    start: function start() {
        var self = this;
        var SHOW_TIME = 3000;
        var FADE_TIME = 500;
        /***
         * 
         * 控制登录界面或者广告首屏界面显示时间
         * 
         */
    },
    initMgr: function initMgr() {
        console.log(cc.beimi + "这个是要打印的值");
        //cc.beimi的值为空
        if (cc.beimi == null) {
            /**
             * 增加了游戏全局变量控制，增加了 cc.beimi.gamestatus 参数，可选值：ready|notready|playing
             * @type {{}}
             */
            cc.beimi = {};
            cc.beimi.routes = {};
            cc.beimi.event = {};

            cc.beimi.http = require("HTTP");
            console.log(cc.beimi.http + "第一个");

            cc.beimi.seckey = "beimi";
            console.log(cc.beimi.seckey + "第二个");

            cc.beimi.gamestatus = "none";
            console.log(cc.beimi.gamestatus + "第三个");

            cc.beimi.dialog = null; //弹出的提示对话框，  alert

            cc.beimi.openwin = null; //弹出的对话窗口，    设置、玩法、战绩等等

            cc.beimi.loadding = new cc.NodePool(); //创建对象缓存池
            //克隆loaddingPrefab对象写入<-
            cc.beimi.loadding.put(cc.instantiate(this.loaddingPrefab)); // 创建节点

            cc.beimi.dialog = new cc.NodePool(); //创建对象缓存池
            //克隆alertPrefab对象写入<-
            cc.beimi.dialog.put(cc.instantiate(this.alertPrefab)); // 创建节点

            /**
             * 游客登录，无需弹出注册对话框，先从本地获取是否有过期的对话数据，如果有过期的对话数据，则使用过期的对话数据续期
             * 如果没有对话数据，则重新使用游客注册接口
             */
            // this.loginFormPool = new cc.NodePool();
            // this.loginFormPool.put(cc.instantiate(this.prefab)); // 创建节点
            cc.beimi.game = {
                model: null,
                playway: null,
                type: function type(name) {
                    var temp;
                    if (cc.beimi.games != null) {
                        for (var i = 0; i < cc.beimi.games.length; i++) {
                            var gamemodel = cc.beimi.games[i];
                            for (var inx = 0; inx < gamemodel.types.length; inx++) {
                                var type = gamemodel.types[inx];
                                if (type.code == name) {
                                    temp = type;
                                }
                            }
                        }
                    }
                    return temp;
                }
            };

            var Audio = require("Audio");
            cc.beimi.audio = new Audio();
            cc.beimi.audio.init();

            var SocketIO = require("socket.io");
            window.io = new SocketIO();

            cc.beimi.audio.playBGM("bgMain.mp3");

            cc.Button.prototype.touchEndedClone = cc.Button.prototype._onTouchEnded;
            cc.Button.prototype._soundOn = true;
            cc.Button.prototype.setSoundEffect = function (on) {
                this._soundOn = on;
            };
            cc.Button.prototype._onTouchEnded = function (event) {
                if (this.interactable && this.enabledInHierarchy && this._pressed && this._soundOn == true) {
                    /**
                     * 播放声效
                     */
                    cc.beimi.audio.playSFX("select.mp3");
                }
                this.touchEndedClone(event);
            };
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
        //# sourceMappingURL=init.js.map
        