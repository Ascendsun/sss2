(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/resources/script/lib/socket.io.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '83e71BFtMFHUZ8vefL8Yxl5', 'socket.io', __filename);
// resources/script/lib/socket.io.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {},

  connect: function connect(url, options) {
    var self = this;
    this.ws = new WebSocket(url + "?userid=" + cc.beimi.user.id);
    this.ws.onopen = function (event) {
      console.log("Send Text WS was opened.");
    };
    this.ws.onmessage = function (event) {
      var data = self.parse(event.data);
      if (data != null && data.event != null) {
        cc.beimi.event[data.event](event.data);
      }
      console.log("response text msg: " + event.data);
    };
    this.ws.onerror = function (event) {
      console.log("Send Text fired an error");
    };
    this.ws.onclose = function (event) {
      console.log("WebSocket instance closed.");
    };
    return this;
  },
  on: function on(command, func) {
    cc.beimi.event[command] = func;
  },
  exec: function exec(command, data) {
    if (this.ws.readyState === WebSocket.OPEN) {
      data.command = command;
      data.userid = cc.beimi.user.id;
      data.orgi = cc.beimi.user.orgi;
      data.token = cc.beimi.authorization;
      this.ws.send(JSON.stringify(data));
    }
  },
  emit: function emit(command, data) {
    var param = {
      data: data
    };
    this.exec(command, param);
  },
  disconnect: function disconnect() {},
  parse: function parse(result) {
    return JSON.parse(result);
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
        //# sourceMappingURL=socket.io.js.map
        