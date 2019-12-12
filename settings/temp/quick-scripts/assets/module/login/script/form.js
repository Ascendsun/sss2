(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/module/login/script/form.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3c448sm7ERFGonudseXdiiB', 'form', __filename);
// module/login/script/form.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		username: cc.EditBox,
		password: cc.EditBox
	},
	onLoad: function onLoad() {
		this._prefab = cc.find("Canvas/login");
	},
	submit: function submit() {
		if (!this.username.string == "" && !this.password.string == "") {
			this._prefab.destroy();
			if (cc.beimi.loadding.size() > 0) {
				var loadding = cc.beimi.loadding.get();
				var root = cc.find("Canvas");
				loadding.parent = root;
				this._animCtrl = loadding.getComponent(cc.Animation);
				var animState = this._animCtrl.play("loadding");
				animState.wrapMode = cc.WrapMode.Loop;
			}
			/*
   var xhr = cc.tools.http.httpPost("/api/login",{mobile:this.username.string , password:this.password.string},function(ret){
   	cc.tools.http.authorization = ret ;
   	
   	 *获取注册或登录结果，如果密码验证通过，则登录成功，如果无用户，则直接注册成功
   	 *
   	 *
   	 
   	});
   */
		}
	},
	guest: function guest() {}
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
        //# sourceMappingURL=form.js.map
        