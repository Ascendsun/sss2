"use strict";
cc._RF.push(module, 'b0664oMnHlOK5okeYWUYZ/B', 'SelectPlayway');
// module/hall/script/SelectPlayway.js

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
        //第一
        first: {
            default: null,
            type: cc.Node
        },
        //第二
        second: {
            default: null,
            type: cc.Node
        },
        gamepoint: {
            default: null,
            type: cc.Node
        },
        title: {
            default: null,
            type: cc.Node
        },
        global: {
            default: null,
            type: cc.Node
        },
        playway: {
            default: null,
            type: cc.Prefab
        },
        content: {
            default: null,
            type: cc.Node
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.beimi != null && cc.beimi.user != null) {
            this.disMenu("first");
            this.playwaypool = new cc.NodePool();
            for (var i = 0; i < 20; i++) {
                //最大玩法数量不能超过20种
                this.playwaypool.put(cc.instantiate(this.playway));
            }
            console.log(this.playwaypool + ":playwaypool的值");
            console.log(this.playwaypool);
            this.playwayarray = new Array();
            if (this.gamepoint && cc.beimi != null && cc.beimi.games != null) {
                for (var inx = 0; inx < this.gamepoint.children.length; inx++) {
                    var name = this.gamepoint.children[inx].name;
                    var gameenable = false;
                    for (var i = 0; i < cc.beimi.games.length; i++) {
                        var gamemodel = cc.beimi.games[i];
                        for (var j = 0; j < gamemodel.types.length; j++) {
                            var gametype = gamemodel.types[j];
                            if (gametype.code == name) {
                                gameenable = true;break;
                            }
                        }
                        if (gameenable == true) {
                            break;
                        }
                    }
                    if (gameenable == true) {
                        this.gamepoint.children[inx].active = true;
                    } else {
                        this.gamepoint.children[inx].active = false;
                    }
                }
            }
        }
    },

    onClick: function onClick(event, data) {
        console.log(data + "data的值");

        this.disMenu("second");
        //取到DefaultHallDataBind.js节点所有方法赋值给girAni
        // var girlAni = this.global.getComponent("DefaultHallDataBind");
        //用DefaultHallDataBind.js节点playToLeft方法
        // girlAni.playToLeft();
        //播放动画组件
        // this._secondAnimCtrl = this.second.getComponent(cc.Animation);
        // this._secondAnimCtrl.play("playway_display");

        if (this.title) {
            for (var inx = 0; inx < this.title.children.length; inx++) {
                if (this.title.children[inx].name == data) {
                    console.log("CAV" + this.title);
                    console.log(this.title);

                    this.title.children[inx].active = true;
                } else {
                    this.title.children[inx].active = false;
                }
            }
        }
        /**
         * 加载预制的 玩法
         */
        var gametype = cc.beimi.game.type(data);

        console.log(gametype);
        if (gametype != null) {
            for (var inx = 0; inx < gametype.playways.length; inx++) {
                /**
                 * 此处需要做判断，检查 对象池有足够的对象可以使用
                 */
                //获取对象池中的对象，如果对象池没有可用对象，则返回空
                var playway = this.playwaypool.get();
                var script = playway.getComponent("Playway");
                console.log(script + "script的值");
                if (script == null) {
                    script = playway.getComponent("RoomPlayway");
                    console.log(script);
                }
                script.init(gametype.playways[inx]);
                playway.parent = this.content;
                this.playwayarray.push(playway);
            }
            console.log(this.content);
        }
    },

    onRoomClick: function onRoomClick() {
        this.disMenu("third");
        this._menuDisplay = this.third.getComponent(cc.Animation);
        this._menuDisplay.play("play_room_display");
    },
    onSecondBack: function onSecondBack(event, data) {
        var girlAni = this.global.getComponent("DefaultHallDataBind");
        girlAni.playToRight();
        this.collect();
        this.disMenu("first");
    },
    onThirddBack: function onThirddBack(event, data) {
        this.disMenu("first");
    },
    collect: function collect() {
        for (var inx = 0; inx < this.playwayarray.length; inx++) {
            this.playwaypool.put(this.playwayarray[inx]);
        }
        this.playwayarray.splice(0, this.playwayarray.length);
    },
    disMenu: function disMenu(order) {
        if (order == 'first') {
            this.first.active = true;
            this.second.active = false;
            if (this.third != null) {
                this.third.active = false;
            }
        } else if (order == 'second') {
            this.first.active = false;
            this.second.active = true;
            if (this.third != null) {
                this.third.active = false;
            }
        } else if (order == 'third') {
            this.first.active = false;
            this.second.active = false;
            if (this.third != null) {
                this.third.active = true;
            }
        }
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();