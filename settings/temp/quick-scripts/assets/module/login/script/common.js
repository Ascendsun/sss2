(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/module/login/script/common.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c20fdJA4UpBA5zauiK5QF44', 'common', __filename);
// module/login/script/common.js

"use strict";

var beiMiCommon = require("BeiMiCommon");
cc.Class({
    extends: beiMiCommon,

    // use this for initialization
    onLoad: function onLoad() {},
    login: function login() {
        this.io = require("IOUtils");
        this.loadding();
        if (this.io.get("userinfo") == null) {
            //发送游客注册请求
            var xhr = cc.beimi.http.httpGet("/api/guest", this.sucess, this.error, this);
            console.log(xhr);
            // object.alert(xhr);
        } else {
            //通过ID获取 玩家信息
            var data = JSON.parse(this.io.get("userinfo"));
            if (data.token != null) {
                //获取用户登录信息
                var xhr = cc.beimi.http.httpGet("/api/guest?token=" + data.token.id, this.sucess, this.error, this);
            }
        }
    },
    sucess: function sucess(result, object) {
        var data = JSON.parse(result);
        console.log(data + "成功后的参数");
        console.log(object + "这个说实话我也不知道是什么");
        if (data != null && data.token != null && data.data != null) {
            //放在全局变量
            object.reset(data, result);
            cc.beimi.gamestatus = data.data.gamestatus;
            /**
             * 登录成功后即创建Socket链接
             */
            object.connect();
            //预加载场景
            if (cc.beimi.gametype != null && cc.beimi.gametype != "") {
                //只定义了单一游戏类型 ，否则 进入游戏大厅
                object.scene(cc.beimi.gametype, object);
            } else {
                /**
                 * 暂未实现功能
                 */
            }
        }
    },
    error: function error(object) {
        object.closeloadding(object.loaddingDialog);
        object.alert("网络异常，服务访问失败");
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
        //# sourceMappingURL=common.js.map
        