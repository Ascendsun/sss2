window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  ActionEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cec81E6xpJha9kLGshjdk8", "ActionEvent");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {},
      onLoad: function onLoad() {},
      onClick: function onClick(event, data) {
        this.node.dispatchEvent(new cc.Event.EventCustom(data, true));
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  AnimEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed85cO6wFBO1oa4VrDfi3g7", "AnimEvent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onAnimCompleted: function onAnimCompleted() {
        this.node.destroy();
      }
    });
    cc._RF.pop();
  }, {} ],
  Audio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d983bGxrrZHt6V//bCOnrSX", "Audio");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bgVolume: 1,
        deskVolume: 1,
        bgAudioID: -1
      },
      init: function init() {
        var t = cc.sys.localStorage.getItem("bgVolume");
        null != t && (this.bgVolume = parseFloat(t));
        var t = cc.sys.localStorage.getItem("deskVolume");
        null != t && (this.deskVolume = parseFloat(t));
        cc.game.on(cc.game.EVENT_HIDE, function() {
          cc.audioEngine.pauseAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          cc.audioEngine.resumeAll();
        });
      },
      getUrl: function getUrl(url) {
        return cc.url.raw("resources/sounds/" + url);
      },
      playBGM: function playBGM(url) {
        var audioUrl = this.getUrl(url);
        this.bgAudioID >= 0 && cc.audioEngine.stop(this.bgAudioID);
        this.bgAudioID = cc.audioEngine.play(audioUrl, true, this.bgVolume);
      },
      playSFX: function playSFX(url) {
        var audioUrl = this.getUrl(url);
        if (this.sfxVolume > 0) var audioId = cc.audioEngine.play(audioUrl, false, this.deskVolume);
      },
      setSFXVolume: function setSFXVolume(v) {
        if (this.sfxVolume != v) {
          cc.sys.localStorage.setItem("deskVolume", v);
          this.deskVolume = v;
        }
      },
      getState: function getState() {
        return cc.audioEngine.getState(this.bgAudioID);
      },
      setBGMVolume: function setBGMVolume(v, force) {
        this.bgAudioID >= 0 && (v > 0 && cc.audioEngine.getState(this.bgAudioID) === cc.audioEngine.AudioState.PAUSED ? cc.audioEngine.resume(this.bgAudioID) : 0 == v && cc.audioEngine.pause(this.bgAudioID));
        if (this.bgVolume != v || force) {
          cc.sys.localStorage.setItem("bgVolume", v);
          this.bgmVolume = v;
          cc.audioEngine.setVolume(this.bgAudioID, v);
        }
      },
      pauseAll: function pauseAll() {
        cc.audioEngine.pauseAll();
      },
      resumeAll: function resumeAll() {
        cc.audioEngine.resumeAll();
      }
    });
    cc._RF.pop();
  }, {} ],
  Base64: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a9bcPo4GZL2aYuqS5Gbs8/", "Base64");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      statics: {
        decode: function decode(_base64Str) {
          var BASE64_MAPPING = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/" ];
          var _len = _base64Str.length;
          var extra_Zero_Count = 0;
          if ("=" == _base64Str.charAt(_len - 1)) if ("=" == _base64Str.charAt(_len - 2)) {
            extra_Zero_Count = 4;
            _base64Str = _base64Str.substring(0, _len - 2);
          } else {
            extra_Zero_Count = 2;
            _base64Str = _base64Str.substring(0, _len - 1);
          }
          var binaryArray = [];
          for (var i = 0, len = _base64Str.length; i < len; ++i) {
            var c = _base64Str.charAt(i);
            for (var j = 0, size = BASE64_MAPPING.length; j < size; ++j) if (c == BASE64_MAPPING[j]) {
              var _tmp = this._toBinary(j);
              var _tmpLen = _tmp.length;
              if (6 - _tmpLen > 0) for (var k = 6 - _tmpLen; k > 0; --k) _tmp.unshift(0);
              binaryArray = binaryArray.concat(_tmp);
              break;
            }
          }
          extra_Zero_Count > 0 && (binaryArray = binaryArray.slice(0, binaryArray.length - extra_Zero_Count));
          var unicode = [];
          var unicodeBinary = [];
          for (var i = 0, len = binaryArray.length; i < len; ) if (0 == binaryArray[i]) {
            unicode = unicode.concat(this._toDecimal(binaryArray.slice(i, i + 8)));
            i += 8;
          } else {
            var sum = 0;
            while (i < len) {
              if (1 != binaryArray[i]) break;
              ++sum;
              ++i;
            }
            unicodeBinary = unicodeBinary.concat(binaryArray.slice(i + 1, i + 8 - sum));
            i += 8 - sum;
            while (sum > 1) {
              unicodeBinary = unicodeBinary.concat(binaryArray.slice(i + 2, i + 8));
              i += 8;
              --sum;
            }
            unicode = unicode.concat(this._toDecimal(unicodeBinary));
            unicodeBinary = [];
          }
          return unicode;
        },
        _toBinary: function _toBinary(ascii) {
          var binary = new Array();
          while (ascii > 0) {
            var b = ascii % 2;
            ascii = Math.floor(ascii / 2);
            binary.push(b);
          }
          binary.reverse();
          return binary;
        },
        _toDecimal: function _toDecimal(binary) {
          var dec = 0;
          var p = 0;
          for (var i = binary.length - 1; i >= 0; --i) {
            var b = binary[i];
            1 == b && (dec += Math.pow(2, p));
            ++p;
          }
          return dec;
        }
      },
      onLoad: function onLoad() {}
    });
    cc._RF.pop();
  }, {} ],
  BeiMiCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "98564jYdD5LFJWUjTOZJZYQ", "BeiMiCard");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        card: cc.Integer,
        initcard: {
          default: null,
          type: cc.Node
        },
        normal: {
          default: null,
          type: cc.Node
        },
        lefttop: {
          default: null,
          type: cc.Node
        },
        leftcolor: {
          default: null,
          type: cc.Node
        },
        rightbottom: {
          default: null,
          type: cc.Node
        },
        rightcolor: {
          default: null,
          type: cc.Node
        },
        kingbg: {
          default: null,
          type: cc.Node
        },
        king: {
          default: null,
          type: cc.Node
        },
        atlas: {
          default: null,
          type: cc.SpriteAtlas
        }
      },
      proxy: function proxy(data) {
        this.game = data;
      },
      onLoad: function onLoad() {
        this.initcard.active = true;
        this.normal.active = false;
        this.selected = false;
        this.kingbg.active = false;
      },
      setCard: function setCard(card) {
        this.card = card;
        this.normal.y = 0;
        this.normal.active = false;
        this.kingbg.y = 0;
        this.kingbg.active = false;
      },
      unselected: function unselected() {
        this.selected && (this.card >= 52 ? this.kingbg.y = 0 : this.normal.y = 0);
        this.selected = false;
      },
      doselect: function doselect() {
        if (false == this.selected) {
          this.card >= 52 ? this.kingbg.y = this.kingbg.y + 30 : this.normal.y = this.normal.y + 30;
          this.selected = true;
        } else this.unselected();
      },
      order: function order() {
        var self = this;
        var frame, cardframe;
        if (self.card < 52) {
          var cardvalue = self.card + 1;
          cardvalue % 4 == 0 ? frame = this.atlas.getSpriteFrame("\u65b9\u7247") : cardvalue % 4 == 1 ? frame = this.atlas.getSpriteFrame("\u9ed1\u6843") : cardvalue % 4 == 2 ? frame = this.atlas.getSpriteFrame("\u7ea2\u5fc3") : cardvalue % 4 == 3 && (frame = this.atlas.getSpriteFrame("\u6885\u82b1"));
          var src = (self.card - self.card % 4) / 4 + 1 + 2;
          14 == src ? src = 1 : 15 == src && (src = 2);
          cardframe = self.card % 2 == 0 ? this.atlas.getSpriteFrame(src) : this.atlas.getSpriteFrame("r" + src);
          this.leftcolor.getComponent(cc.Sprite).spriteFrame = frame;
          this.lefttop.getComponent(cc.Sprite).spriteFrame = cardframe;
          this.rightcolor.getComponent(cc.Sprite).spriteFrame = frame;
          this.rightbottom.getComponent(cc.Sprite).spriteFrame = cardframe;
          this.initcard.active = false;
          this.normal.active = true;
          this.kingbg.active = false;
          this.normal.y = 0;
        } else if (52 == self.card) {
          frame = this.atlas.getSpriteFrame("\u5c0f\u738b_\u5927");
          this.king.getComponent(cc.Sprite).spriteFrame = frame;
          this.initcard.active = false;
          this.normal.active = false;
          this.kingbg.active = true;
          this.kingbg.y = 0;
        } else if (53 == self.card) {
          frame = this.atlas.getSpriteFrame("\u5927\u738b_\u5927");
          this.king.getComponent(cc.Sprite).spriteFrame = frame;
          this.initcard.active = false;
          this.normal.active = false;
          this.kingbg.active = true;
          this.kingbg.y = 0;
        }
      },
      reset: function reset() {
        this.normal.y = 0;
        this.kingbg.y = 0;
        this.normal.active = false;
        this.kingbg.active = false;
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  BeiMiCommon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4442aLvATdDQqqq9ihQ2QP7", "BeiMiCommon");
    "use strict";
    var Base64 = require("Base64");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.beimi.room_callback = null;
      },
      ready: function ready() {
        var check = false;
        cc.beimi ? check = true : this.scene("login", this);
        return check;
      },
      connect: function connect() {
        var self = this;
        if (null != cc.beimi.socket) {
          cc.beimi.socket.disconnect();
          cc.beimi.socket = null;
        }
        cc.beimi.socket = window.io.connect(cc.beimi.http.wsURL + "/bm/game", {
          reconnection: true
        });
        cc.game.on(cc.game.EVENT_HIDE, function(event) {});
        cc.game.on(cc.game.EVENT_SHOW, function(event) {
          console.log("SHOW TRUE");
        });
        cc.beimi.socket.on("connect", function(data) {
          console.log("connected to server");
        });
        cc.beimi.socket.on("disconnect", function(data) {
          console.log("disconnected from server");
        });
        var param = {
          token: cc.beimi.authorization,
          orgi: cc.beimi.user.orgi,
          userid: cc.beimi.user.id
        };
        cc.beimi.socket.exec("gamestatus", param);
        cc.beimi.socket.on("gamestatus", function(result) {
          if (null != result) {
            var data = self.parse(result);
            if (null != cc.beimi.extparams) if ("playing" == data.gamestatus && null != data.gametype) {
              if (null != cc.beimi.extparams) {
                cc.beimi.extparams.playway = data.playway;
                cc.beimi.extparams.gametype = data.gametype;
                null != data.cardroom && true == data.cardroom && (cc.beimi.extparams.gamemodel = "room");
              }
              self.scene(data.gametype, self);
            } else if ("timeout" == data.gamestatus) {
              cc.beimi.sessiontimeout = true;
              self.alert("\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55");
            } else self.scene(cc.beimi.extparams.gametype, self);
            cc.beimi.gamestatus = data.gamestatus;
          }
        });
        cc.beimi.socket.on("searchroom", function(result) {
          null != result && null != cc.beimi.room_callback && cc.beimi.room_callback(result, self);
        });
        return cc.beimi.socket;
      },
      disconnect: function disconnect() {
        if (null != cc.beimi.socket) {
          cc.beimi.socket.disconnect();
          cc.beimi.socket = null;
        }
      },
      registercallback: function registercallback(callback) {
        cc.beimi.room_callback = callback;
      },
      cleancallback: function cleancallback() {
        cc.beimi.room_callback = null;
      },
      getCommon: function getCommon(common) {
        var object = cc.find("Canvas/script/" + common);
        return object.getComponent(common);
      },
      loadding: function loadding() {
        if (cc.beimi.loadding.size() > 0) {
          this.loaddingDialog = cc.beimi.loadding.get();
          this.loaddingDialog.parent = cc.find("Canvas");
          this._animCtrl = this.loaddingDialog.getComponent(cc.Animation);
          var animState = this._animCtrl.play("loadding");
          animState.wrapMode = cc.WrapMode.Loop;
        }
      },
      alert: function alert(message) {
        this.alertForCallBack(message, null);
      },
      alertForCallBack: function alertForCallBack(message, func) {
        if (cc.beimi.dialog.size() > 0) {
          this.alertdialog = cc.beimi.dialog.get();
          this.alertdialog.parent = cc.find("Canvas");
          var node = this.alertdialog.getChildByName("message");
          null != node && node.getComponent(cc.Label) && (node.getComponent(cc.Label).string = message);
          if (null != func) {
            var temp = this.alertdialog.getComponent("BeiMiDialog");
            null != temp && temp.callback(func);
          }
        }
        this.closeloadding();
      },
      closeloadding: function closeloadding() {
        cc.find("Canvas/loadding") && cc.beimi.loadding.put(cc.find("Canvas/loadding"));
      },
      closeOpenWin: function closeOpenWin() {
        if (null != cc.beimi.openwin) {
          cc.beimi.openwin.destroy();
          cc.beimi.openwin = null;
        }
      },
      openWin: function openWin(prefab) {
        if (null != prefab) {
          cc.beimi.openwin = cc.instantiate(prefab);
          cc.beimi.openwin.parent = this.root();
        }
      },
      pvalistener: function pvalistener(context, func) {
        cc.beimi.listener = func;
        cc.beimi.context = context;
      },
      cleanpvalistener: function cleanpvalistener() {
        if (null != cc.beimi) {
          cc.beimi.listener = null;
          cc.beimi.context = null;
        }
      },
      pva: function pva(pvatype, balance) {
        null != pvatype && ("gold" == pvatype ? cc.beimi.user.goldcoins = balance : "cards" == pvatype ? cc.beimi.user.cards = balance : "diamonds" == pvatype && (cc.beimi.user.diamonds = balance));
      },
      updatepva: function updatepva() {
        null != cc.beimi && null != cc.beimi.listener && null != cc.beimi.context && cc.beimi.listener(cc.beimi.context);
      },
      subsidy: function subsidy() {
        var needsubsidy = false;
        if (cc.beimi.user.goldcoins <= 0) {
          var self = this;
          needsubsidy = true;
          if (true == cc.beimi.data.subsidy && cc.beimi.data.subtimes > 0 && cc.beimi.data.subgolds > 0 && cc.beimi.data.lefttimes > 0) {
            var tipmsg = "\u91d1\u5e01\u4e0d\u8db3\uff0c\u60a8\u53ef\u4ee5\u9886\u53d6\u6551\u6d4e\u91d1\u3002";
            null != cc.beimi.data.submsg && (tipmsg = cc.beimi.data.submsg);
            this.alertForCallBack(tipmsg, function() {
              self.welfareDialog();
            });
          } else {
            var recmsg = "\u91d1\u5e01\u4e0d\u8db3\uff0c\u8bf7\u5145\u503c\u3002";
            null != cc.beimi.data.recmsg && (recmsg = cc.beimi.data.recmsg);
            this.alertForCallBack(recmsg, function() {
              self.shopDialog();
            });
          }
        }
        return needsubsidy;
      },
      welfareDialog: function welfareDialog() {
        cc.loader.loadRes("prefab/welfare/over", function(err, prefab) {
          cc.beimi.openwin = cc.instantiate(prefab);
          cc.beimi.openwin.parent = cc.beimi.context.root();
        });
      },
      shopDialog: function shopDialog() {
        cc.loader.loadRes("prefab/welfare/shop", function(err, prefab) {
          cc.beimi.openwin = cc.instantiate(prefab);
          cc.beimi.openwin.parent = cc.beimi.context.root();
        });
      },
      resize: function resize() {
        var win = cc.director.getWinSize();
        cc.view.setDesignResolutionSize(win.width, win.height, cc.ResolutionPolicy.EXACT_FIT);
      },
      closealert: function closealert() {
        cc.find("Canvas/alert") && cc.beimi.dialog.put(cc.find("Canvas/alert"));
      },
      scene: function scene(name, self) {
        cc.director.preloadScene(name, function() {
          cc.beimi && self.closeloadding(self.loaddingDialog);
          cc.director.loadScene(name);
        });
      },
      preload: function preload(extparams, self) {
        this.loadding();
        cc.beimi.extparams = extparams;
        var param = {
          token: cc.beimi.authorization,
          orgi: cc.beimi.user.orgi,
          userid: cc.beimi.user.id
        };
        cc.beimi.socket.exec("gamestatus", param);
      },
      root: function root() {
        return cc.find("Canvas");
      },
      decode: function decode(data) {
        return Base64.decode(data);
      },
      parse: function parse(result) {
        return JSON.parse(result);
      },
      reset: function reset(data, result) {
        cc.beimi.authorization = data.token.id;
        cc.beimi.user = data.data;
        cc.beimi.games = data.games;
        cc.beimi.gametype = data.gametype;
        cc.beimi.data = data;
        cc.beimi.playway = null;
        this.io.put("token", data.token.id);
      },
      logout: function logout() {
        this.closeOpenWin();
        cc.beimi.authorization = null;
        cc.beimi.user = null;
        cc.beimi.games = null;
        cc.beimi.playway = null;
        this.disconnect();
      },
      socket: function socket() {
        var socket = cc.beimi.socket;
        null == socket && (socket = this.connect());
        return socket;
      },
      map: function map(command, callback) {
        null != cc.beimi && null == cc.beimi.routes[command] && (cc.beimi.routes[command] = callback || function() {});
      },
      cleanmap: function cleanmap() {
        if (null != cc.beimi && null != cc.beimi.routes) for (var p in cc.beimi.routes) delete cc.beimi.routes[p];
      },
      route: function route(command) {
        return cc.beimi.routes[command] || function() {};
      },
      layout: function layout(target, func) {
        if (null != target) {
          var temp = new Array();
          var children = target.children;
          for (var inx = 0; inx < children.length; inx++) temp.push(children[inx]);
          for (var inx = 0; inx < temp.length; inx++) target.removeChild(temp[inx]);
          temp.sort(func);
          for (var inx = 0; inx < temp.length; inx++) temp[inx].parent = target;
          temp.splice(0, temp.length);
        }
      }
    });
    cc._RF.pop();
  }, {
    Base64: "Base64"
  } ],
  BeiMiDialog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c2f5/wtw5P0LyzuKEzV2dP", "BeiMiDialog");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {},
      onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
          e.stopPropagation();
        });
        this.node.on("close", function(event) {
          if (null != cc.beimi && true == cc.beimi.sessiontimeout) {
            cc.beimi.sessiontimeout = null;
            self.scene("login", self);
          }
          event.stopPropagation();
        });
      },
      onClose: function onClose() {
        var dialog = cc.find("Canvas/alert");
        cc.beimi.dialog.put(dialog);
        this.node.dispatchEvent(new cc.Event.EventCustom("close", true));
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  BeiMiQR: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfbb8w3UbVOA4QUUKGuCXS8", "BeiMiQR");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        qrgraphics: {
          default: null,
          type: cc.Node
        },
        roomid: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {},
      init: function init(data) {
        null != data && "" != data && (this.roomid.string = "\u8ba9\u597d\u53cb\u626b\u63cf\u52a0\u5165\u623f\u95f4\uff0c\u623f\u95f4\u53f7\uff1a" + data);
        var qrcode = new QRCode(6, QRErrorCorrectLevel.H);
        qrcode.addData(data);
        qrcode.make();
        var size = this.qrgraphics.width;
        var num = qrcode.getModuleCount();
        var ctx = this.qrgraphics.getComponent(cc.Graphics);
        ctx.clear();
        ctx.fillColor = cc.Color.BLACK;
        var tileW = size / num;
        var tileH = size / num;
        for (var row = 0; row < num; row++) for (var col = 0; col < num; col++) if (qrcode.isDark(row, col)) {
          var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
          var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
          ctx.rect(Math.round(col * tileW), size - tileH - Math.round(row * tileH), w, h);
          ctx.fill();
        }
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  BeiMiRoomOption: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "214d0MHSC5DcoE4sSZlfyz2", "BeiMiRoomOption");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        playway: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      onClick: function onClick() {
        console.log("\u4e0d\u77e5\u9053\u662f\u9ebb\u5c06\u8fd8\u662f\u6597\u5730\u4e3b");
        if (null != this.playway) {
          var script = this.playway.getComponent("RoomPlayway");
          console.log(this.script + ":script\u7684\u503c");
          var roomplayway = cc.instantiate(script.roomoption);
          console.log(this.roomplayway + ":roomplayway\u7684\u503c");
          cc.beimi.openwin = roomplayway;
          console.log(cc.beimi.openwin + ":\u7684\u503c");
          cc.beimi.openwin.parent = this.root();
          var roomoption = roomplayway.getComponent("RoomOption");
          console.log(this.roomoption + ":roomoption\u7684\u503c");
          null != roomoption && roomoption.init(script.data);
        }
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  BeiMiTimer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "39256C0d5RLXatej7GTm9/q", "BeiMiTimer");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        text: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {},
      init: function init(text, time, target) {
        var self = this;
        this.remaining = time;
        this.text.string = text + "\uff08" + this.remaining + "\uff09";
        this.schedule(function() {
          this.remaining = this.remaining - 1;
          this.remaining < 0 ? self.unschedule(this) : self.text.string = text + "\uff08" + this.remaining + "\uff09";
        }, 1, time);
      },
      stop: function stop(target) {
        this.remaining = 0;
        target.destroy();
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  DefaultHallDataBind: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b325WE1kpIToU13vjdwCfd", "DefaultHallDataBind");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        username: {
          default: null,
          type: cc.Label
        },
        goldcoins: {
          default: null,
          type: cc.Label
        },
        cards: {
          default: null,
          type: cc.Label
        },
        girl: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var self = this;
        if (this.ready()) {
          this.username.string = cc.beimi.user.username;
          this.pva_format(cc.beimi.user.goldcoins, cc.beimi.user.cards, cc.beimi.user.diamonds, self);
          this.pvalistener(self, function(context) {
            context.pva_format(cc.beimi.user.goldcoins, cc.beimi.user.cards, cc.beimi.user.diamonds, context);
          });
        }
      },
      pva_format: function pva_format(coins, cards, diamonds, object) {
        if (coins > 9999) {
          console.log(coins + ":\u91d1\u5e01");
          var num = coins / 1e4;
          object.goldcoins.string = num.toFixed(2) + "\u4e07";
        } else object.goldcoins.string = coins;
        object.cards.string = cards + "\u5f20";
        console.log(cards + "\u5f20\u623f\u5361");
      },
      playToLeft: function playToLeft() {
        this._girlAnimCtrl = this.girl.getComponent(cc.Animation);
        this._girlAnimCtrl.play("girl_to_left");
      },
      playToRight: function playToRight() {
        this._girlAnimCtrl = this.girl.getComponent(cc.Animation);
        this._girlAnimCtrl.play("girl_to_right");
      },
      onDestroy: function onDestroy() {
        this.cleanpvalistener();
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  DeskCards: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8da7m1o6lOnpZbARNcuqt/", "DeskCards");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        atlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        beimi0: {
          default: null,
          type: cc.SpriteAtlas
        },
        cardvalue: {
          default: null,
          type: cc.Node
        },
        target: {
          default: null,
          type: cc.Node
        }
      },
      init: function init(cvalue) {
        this.value = cvalue;
        var cardframe = void 0;
        var cardcolors = parseInt(this.value / 4);
        var cardtype = parseInt(cardcolors / 9);
        var deskcard = void 0;
        cardcolors < 0 ? deskcard = "wind" + (cardcolors + 8) : 0 == cardtype ? deskcard = "wan" + (parseInt(this.value % 36 / 4) + 1) : 1 == cardtype ? deskcard = "tong" + (parseInt(this.value % 36 / 4) + 1) : 2 == cardtype && (deskcard = "suo" + (parseInt(this.value % 36 / 4) + 1));
        cardframe = this.atlas.getSpriteFrame("\u724c\u9762-" + deskcard);
        this.cardvalue.getComponent(cc.Sprite).spriteFrame = cardframe;
      }
    });
    cc._RF.pop();
  }, {} ],
  DiZhuSummaryClick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e980BPHPtCgozJhOw88LZe", "DiZhuSummaryClick");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onBegin: function onBegin() {
        this.node.dispatchEvent(new cc.Event.EventCustom("begin", true));
      },
      opendeal: function opendeal() {
        this.node.dispatchEvent(new cc.Event.EventCustom("opendeal", true));
      },
      onClose: function onClose() {
        this.node.dispatchEvent(new cc.Event.EventCustom("close", true));
      }
    });
    cc._RF.pop();
  }, {} ],
  DialogClick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a07b3XLiwVBk5RFzHmd50Gx", "DialogClick");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {},
      onLoad: function onLoad() {},
      onClick: function onClick(event) {
        event.stopPropagation();
      },
      onCloseClick: function onCloseClick() {
        this.closeOpenWin();
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  DizhuBegin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc414fafx1EfIEhdfVAesnW", "DizhuBegin");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        gamebtn: {
          default: null,
          type: cc.Node
        },
        continuegamebtn: {
          default: null,
          type: cc.Node
        },
        poker: {
          default: null,
          type: cc.Node
        },
        lastCardsPanel: {
          default: null,
          type: cc.Node
        },
        waitting: {
          default: null,
          type: cc.Prefab
        },
        ratio: {
          default: null,
          type: cc.Label
        },
        summary_win: {
          default: null,
          type: cc.Prefab
        },
        summary: {
          default: null,
          type: cc.Prefab
        },
        inviteplayer: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        this.resize();
        this.player = new Array();
        this.pokercards = new Array();
        this.lastcards = new Array();
        this.lastCardsPanel.active = false;
        this.summarypage = null;
        this.inited = false;
        this.lasttip = null;
        if (null != cc.beimi) {
          null != cc.beimi.gamestatus && "playing" == cc.beimi.gamestatus ? this.recovery() : null != cc.beimi.extparams && "room" == cc.beimi.extparams.gamemodel && (this.invite = cc.instantiate(this.inviteplayer));
          this.initgame();
        }
      },
      begin: function begin() {
        null != cc.beimi.data && true == cc.beimi.data.enableai ? this.statictimer("\u6b63\u5728\u5339\u914d\u73a9\u5bb6", cc.beimi.data.waittime) : this.statictimer("\u6b63\u5728\u5339\u914d\u73a9\u5bb6\uff0c\u8bf7\u7a0d\u5019", cc.beimi.data.noaiwaitime);
        this.startgame("false");
      },
      opendeal: function opendeal() {
        null != cc.beimi.data && true == cc.beimi.data.enableai ? this.statictimer("\u6b63\u5728\u5339\u914d\u73a9\u5bb6", cc.beimi.data.waittime) : this.statictimer("\u6b63\u5728\u5339\u914d\u73a9\u5bb6\uff0c\u8bf7\u7a0d\u5019", cc.beimi.data.noaiwaitime);
        this.startgame("true");
      },
      recovery: function recovery() {
        this.statictimer("\u6b63\u5728\u6062\u590d\u6570\u636e\uff0c\u8bf7\u7a0d\u5019", cc.beimi.data.waittime);
      },
      initgame: function initgame() {
        var self = this;
        this.gamebtn.active = true;
        this.continuegamebtn.active = false;
        if (this.ready()) {
          var socket = this.socket();
          this.game = this.getCommon("DizhuDataBind");
          this.map("joinroom", this.joinroom_event);
          this.map("players", this.players_event);
          this.map("catch", this.catch_event);
          this.map("catchresult", this.catchresult_event);
          this.map("lasthands", this.lasthands_event);
          this.map("takecards", this.takecards_event);
          this.map("ratio", this.ratio_event);
          this.map("play", this.play_event);
          this.map("allcards", this.allcards_event);
          this.map("cardtips", this.cardtips_event);
          this.map("roomready", this.roomready_event);
          this.map("playeready", this.playeready_event);
          this.map("cardtips", this.cardtips_event);
          this.map("recovery", this.recovery_event);
          socket.on("command", function(result) {
            cc.beimi.gamestatus = "playing";
            if (true == self.inited) {
              var data = self.parse(result);
              self.route(data.command)(data, self);
            }
          });
          socket.on("ping", function() {});
          var param = {
            token: cc.beimi.authorization,
            playway: cc.beimi.extparams.playway,
            orgi: cc.beimi.user.orgi,
            extparams: cc.beimi.extparams
          };
          socket.exec("joinroom", param);
          this.inited = true;
        }
      },
      joinroom_event: function joinroom_event(data, context) {
        if (true == data.cardroom && null != context.inviteplayer) {
          var script = context.invite.getComponent("BeiMiQR");
          script.init(data.roomid);
          context.invite.parent = context.root();
        }
        if (data.player.id && data.player.id == cc.beimi.user.id) context.index = data.index; else {
          var inroom = false;
          for (var i = 0; i < context.player.length; i++) {
            var player = context.player[i].getComponent("PlayerRender");
            player.userid == data.player.id && (inroom = true);
          }
          false == inroom && context.newplayer(context.player.length, context, data.player, context.index + 1 == data.index);
        }
      },
      roomready_event: function roomready_event(data, context) {
        true == data.cardroom && null != context.invite && context.invite.destroy();
      },
      playeready_event: function playeready_event(data, context) {
        data.userid == cc.beimi.user.id && (context.gamebtn.active = false);
      },
      players_event: function players_event(data, context) {
        var inx = -1;
        for (var i = 0; i < data.player.length; i++) if (data.player[i].id == cc.beimi.user.id) {
          inx = i;
          break;
        }
        if (data.player.length > 1 && inx >= 0) {
          var pos = inx + 1;
          while (true) {
            pos == data.player.length && (pos = 0);
            false == context.playerexist(data.player[pos], context) && context.newplayer(context.player.length, context, data.player[pos], 0 == context.player.length && !(0 == pos && data.player.length < data.maxplayers));
            if (pos == inx) break;
            pos += 1;
          }
        }
      },
      playerexist: function playerexist(player, context) {
        var inroom = false;
        if (player.id == cc.beimi.user.id) inroom = true; else for (var j = 0; j < context.player.length; j++) if (context.player[j].id == player.id) {
          inroom = true;
          break;
        }
        return inroom;
      },
      catch_event: function catch_event(data, context) {
        context.ratio && (context.ratio.string = data.ratio + "\u500d");
        if (data.userid == cc.beimi.user.id) context.game.catchtimer(15); else for (var inx = 0; inx < context.player.length; inx++) {
          var render = context.player[inx].getComponent("PlayerRender");
          if (render.userid && render.userid == data.userid) {
            render.catchtimer(15);
            break;
          }
        }
      },
      recovery_event: function recovery_event(data, context) {
        var mycards = context.decode(data.player.cards);
        if (null != context.waittimer) {
          var timer = context.waittimer.getComponent("BeiMiTimer");
          timer && timer.stop(context.waittimer);
        }
        context.gamebtn.active = false;
        context.ratio && (context.ratio.string = data.ratio + "\u500d");
        context.doLastCards(context.game, context, 3, 0);
        for (var inx = 0; inx < mycards.length; inx++) {
          var _pokencard = context.playcards(context.game, context, 50 * inx - 300, mycards[inx]);
          context.registerProxy(_pokencard);
        }
        for (var i = 0; i < context.pokercards.length; i++) {
          var pokencard = context.pokercards[i];
          pokencard.getComponent("BeiMiCard").order();
        }
        context.lastCardsPanel.active = true;
        if (data.lasthands) {
          var lasthands = context.decode(data.lasthands);
          for (var i = 0; i < context.lastcards.length; i++) {
            var last = context.lastcards[i].getComponent("BeiMiCard");
            last.setCard(lasthands[i]);
            last.order();
          }
          data.banker.userid == cc.beimi.user.id ? context.game.lasthands(context, context.game, data.data) : context.getPlayer(data.banker.userid).setDizhuFlag(data.data);
        }
        if (null != data.last) {
          var lastcards = context.decode(data.last.cards);
          data.last.userid == cc.beimi.user.id ? context.game.lasttakecards(context.game, context, data.last.cardsnum, lastcards, data.last) : context.getPlayer(data.last.userid).lasttakecards(context.game, context, data.last.cardsnum, lastcards, data.last);
          data.nextplayer == cc.beimi.user.id ? context.game.playtimer(context.game, 25, data.automic) : context.getPlayer(data.nextplayer).playtimer(context.game, 25);
        }
        if (null != data.cardsnum && data.cardsnum.length > 0) for (var i = 0; i < data.cardsnum.length; i++) context.getPlayer(data.cardsnum[i].userid).resetcards(data.cardsnum[i].cardsnum);
      },
      ratio_event: function ratio_event(data, context) {
        true == data.king || true == data.bomb;
        context.ratio && (context.ratio.string = data.ratio + "\u500d");
      },
      catchresult_event: function catchresult_event(data, context) {
        context.ratio && (context.ratio.string = data.ratio + "\u500d");
        data.userid == cc.beimi.user.id ? context.game.catchresult(data) : setTimeout(function() {
          context.getPlayer(data.userid).catchresult(data);
        }, 1500);
      },
      lasthands_event: function lasthands_event(data, context) {
        var lasthands = context.decode(data.lasthands);
        for (var i = 0; i < context.lastcards.length; i++) {
          var last = context.lastcards[i].getComponent("BeiMiCard");
          last.setCard(lasthands[i]);
          last.order();
        }
        if (data.userid == cc.beimi.user.id) {
          context.game.lasthands(context, context.game, data);
          for (var inx = 0; inx < context.player.length; inx++) {
            var render = context.player[inx].getComponent("PlayerRender");
            render.hideresult();
          }
          for (var i = 0; i < lasthands.length; i++) {
            var func = null;
            i == lasthands.length - 1 && (func = cc.callFunc(function(target, data) {
              data.tempcontext && data.tempcontext.layout(data.tempcontext.poker, function(fir, sec) {
                return fir.zIndex - sec.zIndex;
              });
            }, this, {
              tempcontext: context
            }));
            var _pc = context.current(context.game, context, 600 + 50 * (6 + i) - 300, lasthands[i], func);
            var beiMiCard = _pc.getComponent("BeiMiCard");
            beiMiCard.order();
            context.registerProxy(_pc);
          }
          context.game.playtimer(context.game, 25, true);
        } else {
          context.game.hideresult();
          for (var inx = 0; inx < context.player.length; inx++) {
            var render = context.player[inx].getComponent("PlayerRender");
            render.hideresult();
          }
          context.getPlayer(data.userid).lasthands(context, context.game, data);
          context.getPlayer(data.userid).playtimer(context.game, 25);
        }
        for (var inx = 0; inx < context.pokercards.length; inx++) {
          var pc = context.pokercards[inx];
          pc.zIndex = 54 - pc.card;
        }
      },
      takecards_event: function takecards_event(data, context) {
        context.lasttip = null;
        if (true == data.allow) {
          var lastcards;
          false == data.donot && (lastcards = context.decode(data.cards));
          if (data.userid == cc.beimi.user.id) {
            context.game.unselected(context, context.game);
            context.game.lasttakecards(context.game, context, data.cardsnum, lastcards, data);
          } else context.getPlayer(data.userid).lasttakecards(context.game, context, data.cardsnum, lastcards, data);
          context.game.selectedcards.splice(0, context.game.selectedcards.length);
          false == data.over && (data.nextplayer == cc.beimi.user.id ? context.game.playtimer(context.game, 25, data.automic) : context.getPlayer(data.nextplayer).playtimer(context.game, 25));
        } else {
          context.game.notallow.active = true;
          setTimeout(function() {
            context.game.notallow.active = false;
          }, 2e3);
          context.game.unselected(context, context.game);
        }
      },
      cardtips_event: function cardtips_event(data, context) {
        context.game.unselected(context, context.game);
        if (true == data.allow) {
          var tipcards = context.decode(data.cards);
          context.lasttip = tipcards.join(",");
          for (var inx = 0; inx < tipcards.length; inx++) context.game.cardtips(context, tipcards[inx], tipcards);
        } else context.game.cardtipsfornot(context, context.game);
      },
      play_event: function play_event(data, context) {
        cc.beimi.gamestatus = "playing";
        var mycards = context.decode(data.player.cards);
        if (context.waittimer) {
          var timer = context.waittimer.getComponent("BeiMiTimer");
          timer && timer.stop(context.waittimer);
        }
        var center = context.game.pokerpool.get();
        var left = context.game.pokerpool.get(), right = context.game.pokerpool.get();
        center.parent = context.root();
        left.parent = context.root();
        right.parent = context.root();
        center.setPosition(0, 200);
        left.setPosition(0, 200);
        right.setPosition(0, 200);
        var finished = cc.callFunc(function(target, data) {
          if (data.game) {
            data.game.pokerpool.put(data.current);
            data.game.pokerpool.put(data.left);
            data.game.pokerpool.put(data.right);
            for (var i = 0; i < data.self.pokercards.length; i++) {
              var pokencard = data.self.pokercards[i];
              pokencard.getComponent("BeiMiCard").order();
            }
            data.self.lastCardsPanel.active = true;
          }
        }, this, {
          game: context.game,
          self: context,
          left: left,
          right: right,
          current: center
        });
        context.doLastCards(context.game, context, 3, 0);
        setTimeout(function() {
          context.dealing(context.game, 6, context, 0, left, right, mycards);
          setTimeout(function() {
            context.dealing(context.game, 6, context, 1, left, right, mycards);
            setTimeout(function() {
              context.dealing(context.game, 5, context, 2, left, right, mycards, finished);
              context.reordering(context);
            }, 500);
          }, 500);
        }, 0);
      },
      allcards_event: function allcards_event(data, context) {
        cc.beimi.gamestatus = "notready";
        var player = void 0;
        for (var i = 0; i < data.players.length; i++) {
          var temp = data.players[i];
          if (temp.userid != cc.beimi.user.id) {
            var cards = context.decode(temp.cards);
            var tempscript = context.getPlayer(temp.userid);
            for (var inx = 0; inx < cards.length; inx++) ;
          } else player = temp;
        }
        if (null != player) {
          context.pva("gold", player.balance);
          context.updatepva();
        }
        setTimeout(function() {
          if (null != player) {
            true == player.win ? context.summarypage = cc.instantiate(context.summary_win) : context.summarypage = cc.instantiate(context.summary);
            context.summarypage.parent = context.root();
            var _temp = context.summarypage.getComponent("SummaryDetail");
            _temp.create(context, data);
          }
          context.lastCardsPanel.active = false;
          if (true == data.gameRoomOver) {
            for (var inx = 0; inx < context.player.length; inx++) context.player[inx].destroy();
            context.player.splice(0, context.player.length);
            context.player = new Array();
            context.clean();
          }
        }, 2e3);
      },
      getPlayer: function getPlayer(userid) {
        var tempRender;
        for (var inx = 0; inx < this.player.length; inx++) {
          var render = this.player[inx].getComponent("PlayerRender");
          if (render.userid && render.userid == userid) {
            tempRender = render;
            break;
          }
        }
        return tempRender;
      },
      dealing: function dealing(game, num, self, times, left, right, cards, finished) {
        for (var i = 0; i < num; i++) {
          var myCards = self.current(game, self, 300 * times + 50 * i - 300, cards[6 * times + i], finished);
          this.registerProxy(myCards);
        }
        self.otherplayer(left, 0, num, game, self);
        self.otherplayer(right, 1, num, game, self);
      },
      otherplayer: function otherplayer(currpoker, inx, num, game, self) {
        if (0 == inx) {
          var seq = cc.sequence(cc.spawn(cc.moveTo(.2, -350, 50), cc.scaleTo(.2, .3, .3)), cc.moveTo(0, 0, 200), cc.scaleTo(0, 1, 1));
          currpoker.runAction(seq);
        } else {
          var _seq = cc.sequence(cc.spawn(cc.moveTo(.2, 350, 50), cc.scaleTo(.2, .3, .3)), cc.moveTo(0, 0, 200), cc.scaleTo(0, 1, 1));
          currpoker.runAction(_seq);
        }
        var render = self.player[inx].getComponent("PlayerRender");
        for (var i = 0; i < num; i++) render.countcards(1);
      },
      doLastCards: function doLastCards(game, self, num, card) {
        for (var i = 0; i < num; i++) {
          var width = 80 * i - 80;
          var currpoker = game.minpokerpool.get();
          currpoker.getComponent("BeiMiCard").setCard(card);
          currpoker.card = card;
          currpoker.parent = this.lastCardsPanel;
          currpoker.setPosition(width, 0);
          self.lastcards[self.lastcards.length] = currpoker;
        }
      },
      registerProxy: function registerProxy(myCard) {
        if (myCard) {
          var beiMiCard = myCard.getComponent("BeiMiCard");
          beiMiCard.proxy(this.game);
        }
      },
      playcards: function playcards(game, self, posx, card) {
        return self.current(game, self, posx, card, null);
      },
      current: function current(game, self, posx, card, func) {
        var currpoker = game.pokerpool.get();
        var beiMiCard = currpoker.getComponent("BeiMiCard");
        beiMiCard.setCard(card);
        currpoker.card = card;
        currpoker.parent = self.poker;
        currpoker.setPosition(0, 200);
        currpoker.setScale(1, 1);
        currpoker.zIndex = 100 - card;
        self.pokercards.push(currpoker);
        if (null != func) {
          var seq = cc.sequence(cc.moveTo(.2, posx, -180), func);
          currpoker.runAction(seq);
        } else {
          var action = cc.moveTo(.2, posx, -180);
          currpoker.runAction(action);
        }
        return currpoker;
      },
      reordering: function reordering(self) {
        for (var i = 0; i < self.pokercards.length; i++) self.pokercards[i].parent = self.poker;
      },
      newplayer: function newplayer(inx, self, data, isRight) {
        var pos = cc.v2(520, 100);
        false == isRight && (pos = cc.v2(-520, 100));
        var game = self.getCommon("DizhuDataBind");
        if (game && game.playerspool.size() > 0) {
          self.player[inx] = game.playerspool.get();
          self.player[inx].parent = self.root();
          self.player[inx].setPosition(pos);
          var render = self.player[inx].getComponent("PlayerRender");
          render.initplayer(data, isRight);
        }
      },
      givup: function givup() {
        if (this.ready()) {
          var socket = this.socket();
          socket.emit("giveup", "giveup");
        }
      },
      startgame: function startgame(opendeal) {
        if (this.ready()) {
          var socket = this.socket();
          socket.emit("start", opendeal);
        }
      },
      cardtips: function cardtips() {
        if (this.ready()) {
          var socket = this.socket();
          null != this.lasttip ? socket.emit("cardtips", this.lasttip) : socket.emit("cardtips", "");
          this.lasttip = null;
        }
      },
      docatch: function docatch() {
        if (this.ready()) {
          var socket = this.socket();
          socket.emit("docatch", "docatch");
        }
      },
      doPlayCards: function doPlayCards() {
        if (this.ready()) {
          var socket = this.socket();
          this.game.selectedcards.splice(0, this.game.selectedcards.length);
          for (var i = 0; i < this.pokercards.length; i++) {
            var card = this.pokercards[i];
            var temp = card.getComponent("BeiMiCard");
            true == temp.selected && this.game.selectedcards.push(temp.card);
          }
          socket.emit("doplaycards", this.game.selectedcards.join());
        }
        this.lasttip = null;
      },
      noCards: function noCards() {
        if (this.ready()) {
          var socket = this.socket();
          socket.emit("nocards", "nocards");
        }
        this.lasttip = null;
      },
      clean: function clean() {
        for (var inx = 0; inx < this.pokercards.length; inx++) {
          var pc = this.pokercards[inx];
          this.game.pokerpool.put(pc);
        }
        this.pokercards.splice(0, this.pokercards.length);
        for (var i = 0; i < this.lastcards.length; i++) this.game.minpokerpool.put(this.lastcards[i]);
        this.lastcards.splice(0, this.lastcards.length);
        for (var i = 0; i < this.player.length; i++) {
          var player = this.player[i].getComponent("PlayerRender");
          player.clean(this.game);
        }
        this.player.splice(0, this.player.length);
        this.game.clean(this);
        this.ratio.string = "15\u500d";
      },
      onCloseClick: function onCloseClick() {
        this.continuegamebtn.active = true;
      },
      restart: function restart(command) {
        this.game.restart();
        this.statictimer("\u6b63\u5728\u5339\u914d\u73a9\u5bb6", 5);
        if (this.ready()) {
          var socket = this.socket();
          socket.emit("restart", command);
        }
      },
      continuegame: function continuegame() {
        this.continuegamebtn.active = false;
        this.restart("begin");
      },
      statictimer: function statictimer(message, time) {
        this.waittimer = cc.instantiate(this.waitting);
        this.waittimer.parent = this.root();
        var timer = this.waittimer.getComponent("BeiMiTimer");
        timer && timer.init(message, time, this.waittimer);
      },
      onDestroy: function onDestroy() {
        this.inited = false;
        this.cleanmap();
        if (this.ready()) {
          var socket = this.socket();
          socket.emit("leave", "leave");
        }
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  DizhuButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74593mJuotD0Y/H/yjldfAs", "DizhuButton");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {},
      onLoad: function onLoad() {},
      back: function back() {
        this.loadding();
        var self = this;
        setTimeout(function() {
          self.scene(cc.beimi.gametype, self);
        }, 500);
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  DizhuDataBind: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb412rJilJPFo/eaLVo2ey6", "DizhuDataBind");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        goldcoins: {
          default: null,
          type: cc.Label
        },
        cards: {
          default: null,
          type: cc.Label
        },
        player: {
          default: null,
          type: cc.Prefab
        },
        poker: {
          default: null,
          type: cc.Prefab
        },
        poker_min: {
          default: null,
          type: cc.Prefab
        },
        myself: {
          default: null,
          type: cc.Prefab
        },
        atlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        catchbtn: {
          default: null,
          type: cc.Node
        },
        timer: {
          default: null,
          type: cc.Node
        },
        timer_num: {
          default: null,
          type: cc.Label
        },
        lastcards: {
          default: null,
          type: cc.Node
        },
        playbtn: {
          default: null,
          type: cc.Node
        },
        notallow: {
          default: null,
          type: cc.Node
        },
        operesult: {
          default: null,
          type: cc.Node
        },
        donottake: {
          default: null,
          type: cc.Node
        },
        cardtipmsg: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var self = this;
        this.timer && (this.timer.active = false);
        this.catchbtn && (this.catchbtn.active = false);
        this.playbtn && (this.playbtn.active = false);
        this.notallow && (this.notallow.active = false);
        this.operesult && (this.operesult.active = false);
        this.cardtipmsg && (this.cardtipmsg.active = false);
        this.playerspool = new cc.NodePool();
        this.myselfpool = new cc.NodePool();
        this.pokerpool = new cc.NodePool();
        this.minpokerpool = new cc.NodePool();
        this.selectedcards = new Array();
        this.cardslist = new Array();
        for (i = 0; i < 2; i++) this.playerspool.put(cc.instantiate(this.player));
        for (i = 0; i < 25; i++) this.pokerpool.put(cc.instantiate(this.poker));
        for (i = 0; i < 60; i++) this.minpokerpool.put(cc.instantiate(this.poker_min));
        this.myselfpool.put(cc.instantiate(this.myself));
        if (this.ready()) {
          this.pva_format(cc.beimi.user.goldcoins, cc.beimi.user.cards, cc.beimi.user.diamonds, self);
          this.pvalistener(self, function(context) {
            context.pva_format(cc.beimi.user.goldcoins, cc.beimi.user.cards, cc.beimi.user.diamonds, context);
          });
        }
        if (this.myselfpool.size() > 0 && null != cc.beimi) {
          this.playermysql = this.myselfpool.get();
          this.playermysql.parent = this.root();
          this.playermysql.setPosition(-520, -180);
          var render = this.playermysql.getComponent("PlayerRender");
          render.initplayer(cc.beimi.user);
        }
      },
      pva_format: function pva_format(coins, cards, diamonds, object) {
        if (coins > 9999) {
          var num = coins / 1e4;
          object.goldcoins.string = num.toFixed(2) + "\u4e07";
        } else object.goldcoins.string = coins;
        object.cards.string = cards + "\u5f20";
      },
      catchtimer: function catchtimer(times) {
        this.playbtn && (this.playbtn.active = false);
        this.timer && (this.timer.active = true);
        this.catchbtn && (this.catchbtn.active = true);
        this.operesult && (this.operesult.active = false);
        var self = this;
        var gameTimer = require("GameTimer");
        this.beimitimer = new gameTimer();
        this.timesrc = this.beimitimer.runtimer(this, this.timer, this.atlas, this.timer_num, this.timer_num, times);
      },
      catchresult: function catchresult(data) {
        this.timer && (this.timer.active = false);
        this.catchbtn && (this.catchbtn.active = false);
        this.playbtn && (this.playbtn.active = false);
        this.timesrc && this.beimitimer.stoptimer(this, this.timer, this.timesrc);
        this.doOperatorResult("catch", data.docatch, false);
      },
      hideresult: function hideresult() {
        this.operesult && (this.operesult.active = false);
      },
      lasthands: function lasthands(self, game, data) {
        this.setDizhuFlag(data);
        this.operesult && (this.operesult.active = false);
      },
      setDizhuFlag: function setDizhuFlag(data) {
        var render = this.playermysql.getComponent("PlayerRender");
        render.setDizhuFlag(data);
      },
      lasttakecards: function lasttakecards(game, self, cardsnum, lastcards, data) {
        this.result && (this.result.active = false);
        this.playbtn && (this.playbtn.active = false);
        this.catchbtn && (this.catchbtn.active = false);
        this.jsq && (this.jsq.active = false);
        this.lastcards && (this.lastcards.active = true);
        this.timesrc && this.beimitimer.stoptimer(this, this.timer, this.timesrc);
        for (var i = 0; i < this.cardslist.length; i++) this.pokerpool.put(this.cardslist[i]);
        this.cardslist.splice(0, this.cardslist.length);
        if (false == data.donot) {
          for (var i = 0; i < lastcards.length; i++) this.playcards(self, i, lastcards[i], lastcards);
          this.layout(this.lastcards, function(fir, sec) {
            return fir.zIndex - sec.zIndex;
          });
        } else this.doOperatorResult("lasttakecards", true, data.sameside);
      },
      cardtips: function cardtips(self, card, tipcards) {
        var cacheCard;
        for (var inx = 0; inx < self.pokercards.length; inx++) {
          var pc = self.pokercards[inx];
          if (pc.getComponent("BeiMiCard").card == card) {
            cacheCard = pc;
            break;
          }
        }
        null != cacheCard && cacheCard.getComponent("BeiMiCard").doselect();
      },
      cardtipsfornot: function cardtipsfornot(self, game) {
        game.cardtipmsg.active = true;
        setTimeout(function() {
          game.cardtipmsg.active = false;
        }, 1e3);
        game.unselected(self, game);
      },
      unselected: function unselected(self, game) {
        for (var inx = 0; inx < self.pokercards.length; inx++) {
          var pc = self.pokercards[inx];
          pc.getComponent("BeiMiCard").unselected();
        }
      },
      playcards: function playcards(self, index, card, lastcards) {
        var cacheCard;
        for (var inx = 0; inx < self.pokercards.length; inx++) {
          var pc = self.pokercards[inx];
          if (pc.card == card) {
            cacheCard = pc;
            break;
          }
        }
        if (null != cacheCard) {
          cacheCard.getComponent("BeiMiCard").unselected();
          cacheCard.x = 30 * index - 30;
          cacheCard.y = 0;
          var zIndex = this.countcard(card, lastcards);
          cacheCard.zIndex = 4 - zIndex;
          cacheCard.setScale(.5, .5);
          cacheCard.parent = this.lastcards;
          this.cardslist.push(cacheCard);
        }
      },
      countcard: function countcard(card, lastcards) {
        var value = parseInt(card / 4);
        var count = 0;
        for (var i = 0; i < lastcards.length; i++) {
          var temp = parseInt(lastcards[i] / 4);
          value == temp && (count += 1);
        }
        return count;
      },
      playtimer: function playtimer(game, times, automic) {
        this.timer && (this.timer.active = true);
        this.playbtn && (this.playbtn.active = true);
        this.catchbtn && (this.catchbtn.active = false);
        this.lastcards && (this.lastcards.active = false);
        this.operesult && (this.operesult.active = false);
        this.donottake.active = true != automic;
        for (var i = 0; i < this.cardslist.length; i++) game.pokerpool.put(this.cardslist[i]);
        var self = this;
        var gameTimer = require("GameTimer");
        this.beimitimer = new gameTimer();
        this.timesrc = this.beimitimer.runtimer(this, this.timer, this.atlas, this.timer_num, this.timer_num, times);
      },
      doOperatorResult: function doOperatorResult(oper, resvalue, sameside) {
        this.operesult.active = true;
        if ("catch" == oper) if (true == resvalue) for (var i = 0; i < this.operesult.children.length; i++) {
          this.operesult.children[i].active = false;
          "\u63d0\u793a_\u62a2\u5730\u4e3b" == this.operesult.children[i].name && (this.operesult.children[i].active = true);
        } else for (var i = 0; i < this.operesult.children.length; i++) {
          this.operesult.children[i].active = false;
          "\u63d0\u793a_\u4e0d\u62a2" == this.operesult.children[i].name && (this.operesult.children[i].active = true);
        } else if ("lasttakecards" == oper) if (true == sameside) for (var i = 0; i < this.operesult.children.length; i++) {
          this.operesult.children[i].active = false;
          "\u4e0d\u8981" == this.operesult.children[i].name && (this.operesult.children[i].active = true);
        } else for (var i = 0; i < this.operesult.children.length; i++) {
          this.operesult.children[i].active = false;
          "\u8981\u4e0d\u8d77" == this.operesult.children[i].name && (this.operesult.children[i].active = true);
        }
      },
      doSelectCard: function doSelectCard(card) {
        var existcard = this.selectedcards.find(function(pokercard) {
          pokercard.card == card;
        });
        void 0 == existcard && this.selectedcards.push(card);
      },
      doUnSelectCard: function doUnSelectCard(card) {
        var inx = this.selectedcards.indexOf(card);
        inx >= 0 && this.selectedcards.splice(inx, inx + 1);
      },
      clean: function clean(context) {
        this.catchbtn && (this.catchbtn.active = false);
        this.lastcards && (this.lastcards.active = false);
        this.operesult && (this.operesult.active = false);
        var render = this.playermysql.getComponent("PlayerRender");
        render.clean(context);
      },
      restart: function restart() {
        for (var i = 0; i < 2; i++) this.playerspool.put(cc.instantiate(this.player));
        this.pokerpool.clear();
        this.minpokerpool.clear();
        for (var inx = 0; inx < 25; inx++) this.pokerpool.put(cc.instantiate(this.poker));
        for (var inx = 0; inx < 60; inx++) this.minpokerpool.put(cc.instantiate(this.poker_min));
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon",
    GameTimer: "GameTimer"
  } ],
  EventStop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ac9b4vOTi9OKqQ68Kuj6+oT", "EventStop");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
          e.stopPropagation();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  FeedBackDialog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "789dcDahxtFoaHaAAyS85K3", "FeedBackDialog");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        title_feedback: {
          default: null,
          type: cc.Node
        },
        title_reply: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.title_feedback.active = true;
        this.title_reply.active = false;
      },
      onFeedBack: function onFeedBack() {
        this.title_feedback.active = true;
        this.title_reply.active = false;
      },
      onReply: function onReply() {
        this.title_feedback.active = false;
        this.title_reply.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  GameMenu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ed13WRoL5Mv7fLyNGLHVpu", "GameMenu");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      back: function back() {}
    });
    cc._RF.pop();
  }, {} ],
  GameRoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9bfb1QJiRAHJZMZ1KPDpqH", "GameRoom");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        roomidDialog: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {},
      onClick: function onClick(event, data) {
        this.loadding();
        var object = this;
        setTimeout(function() {
          object.scene(data, object);
        }, 200);
      },
      onClickJoinRoom: function onClickJoinRoom() {
        if (this.roomidDialog) {
          cc.beimi.openwin = cc.instantiate(this.roomidDialog);
          cc.beimi.openwin.parent = this.root();
        }
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  GameTimer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35465tZFoBKsKL/r5rkrS4C", "GameTimer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      runtimer: function runtimer(source, timernode, atlas, timer_first, timer_sec, times) {
        var self = this;
        this.remaining = times;
        timer_first.string = times;
        timernode && (timernode.active = true);
        this.timersrc = function() {
          self.remaining = self.remaining - 1;
          if (self.remaining < 0) {
            source.unschedule(this);
            timernode.active = false;
          } else timer_first.string = self.remaining;
        };
        source.schedule(this.timersrc, 1, times, 0);
        return this.timersrc;
      },
      stoptimer: function stoptimer(source, timernode, timer) {
        timernode && (timernode.active = false);
        var self = this;
        this.remaining = 0;
        timer && source.unscheduleAllCallbacks();
      }
    });
    cc._RF.pop();
  }, {} ],
  GangAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0fe67JecMpLz5GGCrRtpy0D", "GangAction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        atlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        beimi0: {
          default: null,
          type: cc.SpriteAtlas
        },
        card_one: {
          default: null,
          type: cc.Node
        },
        card_two: {
          default: null,
          type: cc.Node
        },
        card_three: {
          default: null,
          type: cc.Node
        },
        card_four: {
          default: null,
          type: cc.Node
        },
        card_last: {
          default: null,
          type: cc.Node
        },
        target: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      init: function init(cvalue, gang) {
        this.value = cvalue;
        var cardcolors = parseInt(this.value / 4);
        var cardtype = parseInt(cardcolors / 9);
        this.mjtype = cardtype;
        this.mjvalue = parseInt(this.value % 36 / 4);
        var deskcard = void 0, cardframe = void 0;
        cardcolors < 0 ? deskcard = "wind" + (cardcolors + 8) : 0 == cardtype ? deskcard = "wan" + (parseInt(this.value % 36 / 4) + 1) : 1 == cardtype ? deskcard = "tong" + (parseInt(this.value % 36 / 4) + 1) : 2 == cardtype && (deskcard = "suo" + (parseInt(this.value % 36 / 4) + 1));
        cardframe = "suo2" == deskcard ? this.beimi0.getSpriteFrame("\u724c\u9762-" + deskcard) : this.atlas.getSpriteFrame("\u724c\u9762-" + deskcard);
        this.card_one.getComponent(cc.Sprite).spriteFrame = cardframe;
        this.card_two && (this.card_two.getComponent(cc.Sprite).spriteFrame = cardframe);
        this.card_three && (this.card_three.getComponent(cc.Sprite).spriteFrame = cardframe);
        this.card_four && (this.card_four.getComponent(cc.Sprite).spriteFrame = cardframe);
        this.card_last && (this.card_last.active = false != gang);
      }
    });
    cc._RF.pop();
  }, {} ],
  HTTP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf72714t+NASJp+J1e5wv0I", "HTTP");
    "use strict";
    cc.VERSION = 2017061001;
    var HTTP = cc.Class({
      extends: cc.Component,
      properties: {},
      statics: {
        baseURL: "http://localhost",
        wsURL: "ws://localhost:8080",
        authorization: null,
        httpGet: function httpGet(url, success, error, object) {
          console.log(url + "\u8bf7\u6c42\u8def\u5f84" + success + "\u6210\u529f\u72b6\u6001\u4e0b" + error + "\u5931\u8d25\u72b6\u6001\u4e0b" + object);
          var xhr = cc.loader.getXMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (4 === xhr.readyState) if (xhr.status >= 200 && xhr.status < 300) {
              var respone = xhr.responseText;
              success && success(respone, object);
            } else error && error(object);
          };
          var token = "";
          null != cc.beimi && null != cc.beimi.authorization && (token = cc.beimi.authorization);
          url.indexOf("?") > 0 ? xhr.open("GET", HTTP.baseURL + url + "&authorization=" + token, true) : xhr.open("GET", HTTP.baseURL + url + "?authorization=" + token, true);
          cc.sys.isNative && xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
          xhr.ontimeout = function(event) {
            error(object);
          };
          xhr.onerror = function(event) {
            error(object);
          };
          xhr.timeout = 3e3;
          xhr.send();
        },
        encodeFormData: function encodeFormData(data) {
          var pairs = [];
          var regexp = /%20/g;
          for (var name in data) {
            var value = data[name].toString();
            var pair = encodeURIComponent(name).replace(regexp, "+") + "=" + encodeURIComponent(value).replace(regexp, "+");
            pairs.push(pair);
          }
          return pairs.join("&");
        },
        httpPost: function httpPost(url, params, success, error, object) {
          var xhr = cc.loader.getXMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (4 === xhr.readyState) if (xhr.status >= 200 && xhr.status < 300) {
              var respone = xhr.responseText;
              success && success(respone, object);
            } else error && error(object);
          };
          xhr.open("POST", HTTP.baseURL + url, true);
          null != cc.beimi && null != cc.beimi.authorization && xhr.setRequestHeader("authorization", cc.beimi.authorization);
          cc.sys.isNative && xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.timeout = 5e3;
          xhr.send(HTTP.encodeFormData(params));
        }
      },
      onLoad: function onLoad() {}
    });
    cc._RF.pop();
  }, {} ],
  HandCards: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea8287c50lMKb/Afb/yUYFR", "HandCards");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        atlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        beimi0: {
          default: null,
          type: cc.SpriteAtlas
        },
        cardvalue: {
          default: null,
          type: cc.Node
        },
        target: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.lastonecard = false;
        this.take = false;
        this.node.on("mousedown", function(event) {
          console.log("Hello!");
        });
        this.node.on("mousemove", function(event) {
          console.log("Hello Mover!");
        });
      },
      init: function init(cvalue) {
        this.value = cvalue;
        var cardframe = void 0;
        var cardcolors = parseInt(this.value / 4);
        var cardtype = parseInt(cardcolors / 9);
        this.mjtype = cardtype;
        this.mjvalue = parseInt(this.value % 36 / 4);
        var deskcard = void 0;
        this.lastonecard = false;
        cardcolors < 0 ? deskcard = "wind" + (cardcolors + 8) : 0 == cardtype ? deskcard = "wan" + (parseInt(this.value % 36 / 4) + 1) : 1 == cardtype ? deskcard = "tong" + (parseInt(this.value % 36 / 4) + 1) : 2 == cardtype && (deskcard = "suo" + (parseInt(this.value % 36 / 4) + 1));
        cardframe = "suo2" == deskcard ? this.beimi0.getSpriteFrame("\u724c\u9762-" + deskcard) : this.atlas.getSpriteFrame("\u724c\u9762-" + deskcard);
        this.cardvalue.getComponent(cc.Sprite).spriteFrame = cardframe;
        var anim = this.getComponent(cc.Animation);
        anim.play("majiang_current");
      },
      lastone: function lastone() {
        if (false == this.lastonecard) {
          this.lastonecard = true;
          this.target.width = this.target.width + 30;
        }
      },
      selected: function selected() {
        this.target.opacity = 168;
        this.selectcolor = true;
      },
      relastone: function relastone() {
        if (true == this.lastonecard) {
          this.lastonecard = false;
          this.target.width = this.target.width - 30;
        }
      },
      reinit: function reinit() {
        this.relastone();
        this.lastonecard = false;
        this.selectcolor = false;
        this.target.opacity = 255;
        if (this.take) {
          this.target.y = this.target.y - 30;
          this.take = false;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  IOUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "39610X6GEFHlrTGAdd3Wcer", "IOUtils");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      statics: {
        get: function get(key) {
          console.log(cc.sys.localStorage.getItem(key) + "\u8fd9\u4e2a\u662fget\u65b9\u6cd5\u8fd4\u56de\u7684\u53c2\u6570");
          return cc.sys.localStorage.getItem(key);
        },
        put: function put(key, value) {
          cc.sys.localStorage.setItem(key, value);
        },
        remove: function remove(key) {
          cc.sys.localStorage.removeItem(key);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  JoinRoomClick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dca015EOkRD8b5hkhNcAXkU", "JoinRoomClick");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        numdata: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.roomid = new Array();
      },
      onClick: function onClick(event, data) {
        if (this.roomid.length < 6) {
          this.roomid.push(data);
          this.disRoomId();
        }
        if (6 == this.roomid.length) {
          this.closeOpenWin();
          if (this.ready()) {
            var socket = this.socket();
            var param = {
              token: cc.beimi.authorization,
              roomid: this.roomid.join(""),
              orgi: cc.beimi.user.orgi,
              userid: cc.beimi.user.id
            };
            socket.exec("searchroom", param);
            this.registercallback(this.roomCallBack);
          }
          this.loadding();
        }
      },
      roomCallBack: function roomCallBack(result, self) {
        var data = self.parse(result);
        if ("ok" == data.result) {
          var extparams = {
            gametype: data.code,
            playway: data.id,
            gamemodel: "room"
          };
          self.preload(extparams, self);
        } else "notexist" == data.result ? self.alert("\u623f\u95f4\u53f7\u4e0d\u5b58\u5728\u3002") : "full" == data.result && self.alert("\u623f\u95f4\u5df2\u6ee1\u5458\u3002");
      },
      onDeleteClick: function onDeleteClick() {
        this.roomid.splice(this.roomid.length - 1, this.roomid.length);
        this.disRoomId();
      },
      onCleanClick: function onCleanClick() {
        this.roomid.splice(0, this.roomid.length);
        this.disRoomId();
      },
      disRoomId: function disRoomId() {
        var children = this.numdata.children;
        for (var inx = 0; inx < 6; inx++) inx < this.roomid.length ? children[inx].children[0].getComponent(cc.Label).string = this.roomid[inx] : children[inx].children[0].getComponent(cc.Label).string = "";
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  JoinRoomEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43eb6PT5ldCaKJaeJn7zVx4", "JoinRoomEvent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {}
    });
    cc._RF.pop();
  }, {} ],
  LogoutClick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c02c1wqe0JFrrSphy0Aek62", "LogoutClick");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {},
      onLoad: function onLoad() {},
      onClick: function onClick() {
        this.logout();
        this.scene("login", this);
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  MJMenuClick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce2c1CkWWFBsK4mdw3v5/n2", "MJMenuClick");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {},
      onLoad: function onLoad() {},
      onBackClick: function onBackClick() {
        this.scene(cc.beimi.gametype, this);
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  MaJiangPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e95383hjkFI0LhTixqeMZQ5", "MaJiangPlayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        username: {
          default: null,
          type: cc.Label
        },
        goldcoins: {
          default: null,
          type: cc.Label
        },
        selected: {
          default: null,
          type: cc.Node
        },
        creator: {
          default: null,
          type: cc.Node
        },
        selectcards: {
          default: null,
          type: cc.Node
        },
        selectcolor: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.selected.active = false;
        this.creator.active = false;
      },
      init: function init(playerdata, inx, tablepos) {
        this.data = playerdata;
        this.tablepos = tablepos;
        0 == inx ? this.selectcards.parent.x = -1 * this.selectcards.parent.x : 1 == inx && (this.selectcards.parent.x = -1 * this.selectcards.parent.x);
        this.username.string = playerdata.username;
        this.goldcoins.string = playerdata.goldcoins;
      },
      banker: function banker() {
        this.creator.active = true;
      },
      selecting: function selecting() {
        if (this.data.id != cc.beimi.user.id) {
          this.selectcards.active = true;
          var ani = this.selectcolor.getComponent(cc.Animation);
          this.animState = ani.play("majiang_select");
          this.animState.wrapMode = cc.WrapMode.Loop;
          this.animState.repeatCount = 20;
        }
      },
      selectresult: function selectresult(data) {
        for (var i = 0; i < this.selected.children.length; i++) {
          this.selected.children[i].active = false;
          this.selected.children[i].name == data.color && (this.selected.children[i].active = true);
        }
        this.selected.active = true;
        this.data.id != cc.beimi.user.id && null != this.animState && this.animState.stop("majiang_select");
      },
      clean: function clean() {
        this.creator.active = false;
        for (var i = 0; i < this.selected.children.length; i++) this.selected.children[i].active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  MaJiangSummary: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d5bextO+xAqpCMOUoxJgQb", "MaJiangSummary");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        workitem: {
          default: null,
          type: cc.Node
        },
        myscore: {
          default: null,
          type: cc.Label
        },
        myflag: {
          default: null,
          type: cc.Node
        },
        player_1: {
          default: null,
          type: cc.Node
        },
        player_1_flag: {
          default: null,
          type: cc.Node
        },
        player_1_name: {
          default: null,
          type: cc.Label
        },
        player_1_score: {
          default: null,
          type: cc.Label
        },
        player_2: {
          default: null,
          type: cc.Node
        },
        player_2_flag: {
          default: null,
          type: cc.Node
        },
        player_2_name: {
          default: null,
          type: cc.Label
        },
        player_2_score: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var self = this;
        this.workitem.on("begin", function(event) {
          if (null != self.context) {
            self.context.summarypage.destroy();
            self.context.restart();
          }
          event.stopPropagation();
        });
        this.workitem.on("close", function(event) {
          null != self.context && self.context.summarypage.destroy();
          event.stopPropagation();
        });
      },
      create: function create(context, data) {
        this.context = context;
        var index = 0;
        for (var inx = 0; inx < data.players.length; inx++) var player = data.players[inx];
      }
    });
    cc._RF.pop();
  }, {} ],
  MajiangDataBind: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d95a8lKtJpJP42PDp+oYIJT", "MajiangDataBind");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        playerprefab: {
          default: null,
          type: cc.Prefab
        },
        statebtn: {
          default: null,
          type: cc.Node
        },
        mjtimer: {
          default: null,
          type: cc.Label
        },
        desk_tip: {
          default: null,
          type: cc.Node
        },
        desk_cards: {
          default: null,
          type: cc.Label
        },
        cards_current: {
          default: null,
          type: cc.Prefab
        },
        cards_panel: {
          default: null,
          type: cc.Node
        },
        one_card_panel: {
          default: null,
          type: cc.Node
        },
        left_panel: {
          default: null,
          type: cc.Node
        },
        right_panel: {
          default: null,
          type: cc.Node
        },
        top_panel: {
          default: null,
          type: cc.Node
        },
        cards_left: {
          default: null,
          type: cc.Prefab
        },
        cards_right: {
          default: null,
          type: cc.Prefab
        },
        cards_top: {
          default: null,
          type: cc.Prefab
        },
        takecards_one: {
          default: null,
          type: cc.Prefab
        },
        takecards_left: {
          default: null,
          type: cc.Prefab
        },
        takecards_right: {
          default: null,
          type: cc.Prefab
        },
        deskcards_current_panel: {
          default: null,
          type: cc.Node
        },
        deskcards_right_panel: {
          default: null,
          type: cc.Node
        },
        deskcards_top_panel: {
          default: null,
          type: cc.Node
        },
        deskcards_left_panel: {
          default: null,
          type: cc.Node
        },
        searchlight: {
          default: null,
          type: cc.Node
        },
        actionnode_two: {
          default: null,
          type: cc.Node
        },
        actionnode_two_list: {
          default: null,
          type: cc.Node
        },
        actionnode_three: {
          default: null,
          type: cc.Node
        },
        actionnode_three_list: {
          default: null,
          type: cc.Node
        },
        actionnode_deal: {
          default: null,
          type: cc.Node
        },
        action_gang_ming_prefab: {
          default: null,
          type: cc.Prefab
        },
        action_gang_an_prefab: {
          default: null,
          type: cc.Prefab
        },
        cards_gang_ming_prefab: {
          default: null,
          type: cc.Prefab
        },
        cards_gang_an_prefab: {
          default: null,
          type: cc.Prefab
        },
        roomid: {
          default: null,
          type: cc.Label
        },
        gang_current: {
          default: null,
          type: cc.Node
        },
        summary: {
          default: null,
          type: cc.Prefab
        },
        inviteplayer: {
          default: null,
          type: cc.Prefab
        },
        hu_cards_current: {
          default: null,
          type: cc.Node
        },
        hu_cards_top: {
          default: null,
          type: cc.Node
        },
        hu_cards_left: {
          default: null,
          type: cc.Node
        },
        hu_cards_right: {
          default: null,
          type: cc.Node
        },
        mask: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.initdata(true);
        this.resize();
        var self = this;
        null != this.mask && (this.mask.active = false);
        if (this.ready()) {
          var socket = this.socket();
          this.routes = {};
          this.playersarray = new Array();
          this.playercards = new Array();
          this.leftcards = new Array();
          this.rightcards = new Array();
          this.topcards = new Array();
          this.deskcards = new Array();
          this.actioncards = new Array();
          this.inited = false;
          this.centertimer = null;
          this.summarypage = null;
          this.exchange_state("init", this);
          this.node.on("takecard", function(event) {
            var card = event.target.getComponent("TakeMJCard");
            if (null != card) {
              var card_script = card.target.getComponent("HandCards");
              socket.emit("doplaycards", card_script.value);
            }
            event.stopPropagation();
          });
          this.node.on("gang", function(event) {
            self.dealActionProcess(self);
            socket.emit("selectaction", "gang");
            event.stopPropagation();
          });
          this.node.on("peng", function(event) {
            self.dealActionProcess(self);
            socket.emit("selectaction", "peng");
            event.stopPropagation();
          });
          this.node.on("chi", function(event) {
            self.dealActionProcess(self);
            socket.emit("selectaction", "chi");
            event.stopPropagation();
          });
          this.node.on("hu", function(event) {
            self.dealActionProcess(self);
            socket.emit("selectaction", "hu");
            event.stopPropagation();
          });
          this.node.on("guo", function(event) {
            self.dealActionProcess(self);
            socket.emit("selectaction", "guo");
            event.stopPropagation();
          });
          if (null != cc.beimi) {
            null != cc.beimi.gamestatus && "playing" == cc.beimi.gamestatus ? this.recovery() : null != cc.beimi.extparams && "room" == cc.beimi.extparams.gamemodel && (this.invite = cc.instantiate(this.inviteplayer));
            this.initgame();
          }
        }
      },
      initgame: function initgame() {
        var self = this;
        if (this.ready()) {
          var socket = this.socket();
          this.map("joinroom", this.joinroom_event);
          this.map("players", this.players_event);
          this.map("banker", this.banker_event);
          this.map("play", this.play_event);
          this.map("selectcolor", this.selectcolor_event);
          this.map("selectresult", this.selectresult_event);
          this.map("lasthands", this.lasthands_event);
          this.map("takecards", this.takecard_event);
          this.map("action", this.action_event);
          this.map("selectaction", this.selectaction_event);
          this.map("dealcard", this.dealcard_event);
          this.map("allcards", this.allcards_event);
          this.map("recovery", this.recovery_event);
          this.map("roomready", this.roomready_event);
          this.map("playeready", this.playeready_event);
          socket.on("command", function(result) {
            cc.beimi.gamestatus = "playing";
            if (true == self.inited) {
              var data = self.parse(result);
              self.route(data.command)(data, self);
            }
          });
          var param = {
            token: cc.beimi.authorization,
            playway: cc.beimi.extparams.playway,
            orgi: cc.beimi.user.orgi,
            extparams: cc.beimi.extparams
          };
          socket.exec("joinroom", param);
          this.inited = true;
        }
      },
      initdata: function initdata(initplayer) {
        if (true == initplayer) {
          this.playerspool = new cc.NodePool();
          for (var i = 0; i < 4; i++) this.playerspool.put(cc.instantiate(this.playerprefab));
        }
        this.cardpool = new cc.NodePool();
        for (var i = 0; i < 14; i++) this.cardpool.put(cc.instantiate(this.cards_current));
      },
      joinroom_event: function joinroom_event(data, context) {
        if (true == data.cardroom && null != context.inviteplayer) {
          var script = context.invite.getComponent("BeiMiQR");
          script.init(data.roomid);
          context.invite.parent = context.root();
          null != context.roomid && (context.roomid.string = data.roomid);
        } else null != context.roomid && (context.roomid.string = "\u5927\u5385\u623f\u95f4");
        var player = context.playerspool.get();
        var playerscript = player.getComponent("MaJiangPlayer");
        var inx = null, tablepos = "";
        if (data.player.id == cc.beimi.user.id) {
          player.setPosition(-570, -150);
          tablepos = "current";
          context.index = data.index;
        } else {
          inx = data.index - context.index;
          if (1 == inx) {
            player.setPosition(570, 50);
            tablepos = "right";
          } else if (2 == inx) {
            player.setPosition(400, 300);
            tablepos = "top";
          } else if (3 == inx) {
            player.setPosition(-570, 50);
            tablepos = "left";
          }
        }
        playerscript.init(data.player, inx, tablepos);
        player.parent = context.root();
        context.playersarray.push(player);
      },
      roomready_event: function roomready_event(data, context) {
        null != context.invite && context.invite.destroy();
      },
      playeready_event: function playeready_event(data, context) {
        data.userid == cc.beimi.user.id && context.exchange_state("ready", context);
      },
      takecard_event: function takecard_event(data, context) {
        if (data.userid == cc.beimi.user.id) {
          for (var inx = 0; inx < context.playercards.length; ) {
            var handcards = context.playercards[inx].getComponent("HandCards");
            if (data.card == handcards.value) {
              context.playercards[inx].zIndex = 0;
              context.playercards[inx].parent = null;
              handcards.reinit();
              context.cardpool.put(context.playercards[inx]);
              context.playercards.splice(inx, 1);
              var desk_card = cc.instantiate(context.takecards_one);
              var temp = desk_card.getComponent("DeskCards");
              temp.init(handcards.value);
              context.deskcards.push(desk_card);
              desk_card.parent = context.deskcards_current_panel;
            } else {
              handcards.relastone();
              true == handcards.selectcolor ? context.playercards[inx].zIndex = 1e3 + handcards.value : handcards.value >= 0 ? context.playercards[inx].zIndex = handcards.value : context.playercards[inx].zIndex = 200 + handcards.value;
              inx += 1;
            }
          }
          context.layout(context.cards_panel, function(fir, sec) {
            return fir.zIndex - sec.zIndex;
          });
          context.exchange_state("takecard", context);
        } else {
          var _temp = context.player(data.userid, context);
          var cardpanel = void 0, cardprefab = void 0, deskcardpanel = void 0;
          if ("right" == _temp.tablepos) {
            for (var inx = 0; inx < context.right_panel.children.length; inx++) {
              var right_temp = context.right_panel.children[inx].getComponent("SpecCards");
              right_temp.reinit();
            }
            cardpanel = context.right_panel;
            cardprefab = context.takecards_right;
            deskcardpanel = context.deskcards_right_panel;
          } else if ("left" == _temp.tablepos) {
            for (var inx = 0; inx < context.left_panel.children.length; inx++) {
              var left_temp = context.left_panel.children[inx].getComponent("SpecCards");
              left_temp.reinit();
            }
            cardpanel = context.left_panel;
            cardprefab = context.takecards_left;
            deskcardpanel = context.deskcards_left_panel;
          } else if ("top" == _temp.tablepos) {
            for (var inx = 0; inx < context.top_panel.children.length; inx++) {
              var top_temp = context.top_panel.children[inx].getComponent("SpecCards");
              top_temp.reinit();
            }
            cardpanel = context.top_panel;
            cardprefab = context.takecards_one;
            deskcardpanel = context.deskcards_top_panel;
          }
          null != cardpanel && cardpanel.children[cardpanel.children.length - 1].destroy();
          var _desk_card = cc.instantiate(cardprefab);
          var desk_script = _desk_card.getComponent("DeskCards");
          desk_script.init(data.card);
          _desk_card.parent = deskcardpanel;
          context.deskcards.push(_desk_card);
        }
      },
      recover_desk_cards: function recover_desk_cards(userid, card, context) {
        if (userid == cc.beimi.user.id) {
          var desk_card = cc.instantiate(context.takecards_one);
          var temp = desk_card.getComponent("DeskCards");
          temp.init(card);
          context.deskcards.push(desk_card);
          desk_card.parent = context.deskcards_current_panel;
        } else {
          var _temp2 = context.player(userid, context);
          var cardpanel = void 0, cardprefab = void 0, deskcardpanel = void 0;
          if ("right" == _temp2.tablepos) {
            cardpanel = context.right_panel;
            cardprefab = context.takecards_right;
            deskcardpanel = context.deskcards_right_panel;
          } else if ("left" == _temp2.tablepos) {
            cardpanel = context.left_panel;
            cardprefab = context.takecards_left;
            deskcardpanel = context.deskcards_left_panel;
          } else if ("top" == _temp2.tablepos) {
            cardpanel = context.top_panel;
            cardprefab = context.takecards_one;
            deskcardpanel = context.deskcards_top_panel;
          }
          var _desk_card2 = cc.instantiate(cardprefab);
          var desk_script = _desk_card2.getComponent("DeskCards");
          desk_script.init(card);
          _desk_card2.parent = deskcardpanel;
        }
      },
      dealcard_event: function dealcard_event(data, context) {
        var player = context.player(data.userid, context);
        context.select_action_searchlight(data, context, player);
        if (data.userid == cc.beimi.user.id) context.initDealHandCards(context, data); else {
          var inx = 0;
          "top" == player.tablepos ? inx = 1 : "left" == player.tablepos && (inx = 2);
          context.initPlayerHandCards(0, 1, inx, context, true);
        }
        context.desk_cards.string = data.deskcards;
        "deal" == context.action && data.userid == cc.beimi.user.id || context.exchange_state("action", context);
      },
      select_action_searchlight: function select_action_searchlight(data, context, player) {
        context.exchange_searchlight(player.tablepos, context);
        context.exchange_state("nextplayer", context);
      },
      allcards_event: function allcards_event(data, context) {
        cc.beimi.gamestatus = "notready";
        context.gameover = false;
        setTimeout(function() {
          context.summarypage = cc.instantiate(context.summary);
          context.summarypage.parent = context.root();
          var temp = context.summarypage.getComponent("MaJiangSummary");
          temp.create(context, data);
          true == data.gameRoomOver && (context.gameover = true);
        }, 2e3);
        context.exchange_state("allcards", context);
      },
      recoverboard: function recoverboard(data, context) {},
      setAction: function setAction(action, context) {
        context.action = action;
      },
      players_event: function players_event(data, context) {
        context.collect(context);
        var inx = 0;
        for (var i = 0; i < data.player.length; i++) {
          var _temp3 = data.player[i];
          if (_temp3.id == cc.beimi.user.id) {
            context.index = i;
            break;
          }
        }
        if (data.player.length > 1 && inx >= 0) {
          var pos = inx + 1;
          while (true) {
            pos == data.player.length && (pos = 0);
            if (false == context.playerexist(data.player[pos], context)) {
              var player = context.playerspool.get();
              var playerscript = player.getComponent("MaJiangPlayer");
              var tablepos = "";
              var temp = pos - context.index;
              if (1 == temp || -3 == temp) {
                player.setPosition(570, 50);
                tablepos = "right";
              } else if (2 == temp || -2 == temp) {
                player.setPosition(400, 300);
                tablepos = "top";
              } else if (3 == temp || -1 == temp) {
                player.setPosition(-570, 50);
                tablepos = "left";
              }
              playerscript.init(data.player[pos], inx, tablepos);
              player.parent = context.root();
              context.playersarray.push(player);
            }
            if (pos == inx) break;
            pos += 1;
          }
        }
      },
      playerexist: function playerexist(player, context) {
        var inroom = false;
        if (player.id == cc.beimi.user.id) inroom = true; else for (var j = 0; j < context.playersarray.length; j++) {
          var temp = context.playersarray[j];
          var playerscript = temp.getComponent("MaJiangPlayer");
          if (playerscript.data.id == player.id) {
            inroom = true;
            break;
          }
        }
        return inroom;
      },
      banker_event: function banker_event(data, context) {
        for (var inx = 0; inx < context.playersarray.length; inx++) {
          var temp = context.playersarray[inx].getComponent("MaJiangPlayer");
          if (temp.data.id == data.userid) {
            temp.banker();
            break;
          }
        }
      },
      recovery_event: function recovery_event(data, context) {
        var mycards = context.decode(data.player.cards);
        context.play_event(data.userboard, context);
        context.banker_event(data.banker, context);
        context.selectresult_event(data.selectcolor, context);
        for (var i = 0; i < data.cardsnum.length; i++) {
          var temp = data.cardsnum[i];
          context.selectresult_event(temp.selectcolor, context);
          var hiscards = context.decode(temp.hiscards);
          for (var j = 0; j < hiscards.length; j++) context.recover_desk_cards(temp.userid, hiscards[j], context);
        }
        var hiscards = context.decode(data.hiscards);
        for (var j = 0; j < hiscards.length; j++) context.recover_desk_cards(data.userid, hiscards[j], context);
      },
      action_event: function action_event(data, context) {
        context.setAction("take", context);
        if (cc.beimi.user.id == data.userid) {
          context.exchange_state("action", context);
          var gang = void 0, peng = void 0, chi = void 0, hu = void 0, guo = void 0;
          if (true == data.deal) {
            for (var inx = 0; inx < context.actionnode_deal.children.length; inx++) {
              var temp = context.actionnode_deal.children[inx];
              "gang" == temp.name && (gang = temp);
              "peng" == temp.name && (peng = temp);
              "chi" == temp.name && (chi = temp);
              "hu" == temp.name && (hu = temp);
              temp.active = false;
            }
            data.gang && (gang.active = true);
            data.peng && (peng.active = true);
            data.chi && (chi.active = true);
            data.hu && (hu.active = true);
            context.actionnode_deal.active = true;
            context.setAction("deal", context);
          } else {
            var actionNum = 0;
            if (true == data.gang || true == data.peng || true == data.chi || true == data.hu) {
              var desk_script = context.actionnode_three.getComponent("DeskCards");
              desk_script.init(data.card);
              for (var inx = 0; inx < context.actionnode_three_list.children.length; inx++) {
                var _temp4 = context.actionnode_three_list.children[inx];
                "gang" == _temp4.name && (gang = _temp4);
                "peng" == _temp4.name && (peng = _temp4);
                "chi" == _temp4.name && (chi = _temp4);
                "hu" == _temp4.name && (hu = _temp4);
                "guo" == _temp4.name && (guo = _temp4);
                _temp4.active = false;
              }
              if (data.gang) {
                gang.active = true;
                actionNum += 1;
              }
              if (data.peng) {
                peng.active = true;
                actionNum += 1;
              }
              if (data.chi) {
                chi.active = true;
                actionNum += 1;
              }
              if (data.hu) {
                hu.active = true;
                actionNum += 1;
              }
              if (false == data.deal) {
                guo.active = true;
                actionNum += 1;
              }
              var posx = 1080 - 124 * (actionNum + 1);
              var actionevent = cc.moveTo(.5, posx, -147);
              actionevent.easing(cc.easeIn(3));
              context.actionnode_three.runAction(actionevent);
              setTimeout(function() {
                null != context.action && context.dealActionProcess(context);
              }, 5e3);
            }
          }
        }
      },
      selectaction_event: function selectaction_event(data, context) {
        var player = context.player(data.userid, context);
        if (cc.beimi.user.id == data.userid) {
          if ("all" == data.target) {
            var rightpre = cc.instantiate(context.action_gang_ming_prefab);
            rightpre.parent = context.deskcards_right_panel.parent;
            var toppre = cc.instantiate(context.action_gang_ming_prefab);
            toppre.parent = context.deskcards_top_panel.parent;
            var leftpre = cc.instantiate(context.action_gang_ming_prefab);
            leftpre.parent = context.deskcards_left_panel.parent;
          } else context.select_action_searchlight(data, context, player);
          if ("hu" == data.action) {
            var hu_card = cc.instantiate(context.takecards_one);
            var _temp5 = hu_card.getComponent("DeskCards");
            _temp5.init(data.card);
            context.deskcards.push(hu_card);
            hu_card.setScale(.5, .5);
            hu_card.parent = context.hu_cards_current;
            context.mask.active = true;
          } else {
            for (var inx = 0; inx < context.playercards.length; ) {
              var _temp6 = context.playercards[inx].getComponent("HandCards");
              if (data.cardtype == _temp6.mjtype && data.cardvalue == _temp6.mjvalue) {
                context.cardpool.put(context.playercards[inx]);
                context.playercards.splice(inx, 1);
              } else inx++;
            }
            var cards_gang = void 0;
            cards_gang = "an" == data.actype ? cc.instantiate(context.cards_gang_an_prefab) : cc.instantiate(context.cards_gang_ming_prefab);
            var temp_script = cards_gang.getComponent("GangAction");
            "gang" == data.action ? temp_script.init(data.card, true) : temp_script.init(data.card, false);
            if ("peng" == data.action || "chi" == data.action) {
              var _temp7 = context.cards_panel.children[context.cards_panel.children.length - 1];
              if (null != _temp7) {
                var _script = _temp7.getComponent("HandCards");
                null != _script && _script.lastone();
              }
            }
            cards_gang.parent = context.gang_current;
            context.actioncards.push(cards_gang);
            for (var inx = 0; inx < context.deskcards.length; inx++) {
              var temp = context.deskcards[inx];
              if (null != temp) {
                var script = temp.getComponent("DeskCards");
                if (null != script && script.value == data.card) {
                  temp.destroy();
                  context.deskcards.splice(inx, inx + 1);
                  break;
                }
              }
            }
          }
          context.exchange_state("nextplayer", context);
          context.exchange_state("action", context);
        } else {
          var _temp8 = context.player(data.target, context), deskcardpanel = void 0;
          "right" == _temp8.tablepos ? deskcardpanel = context.deskcards_right_panel : "left" == _temp8.tablepos ? deskcardpanel = context.deskcards_left_panel : "top" == _temp8.tablepos && (deskcardpanel = context.deskcards_top_panel);
          deskcardpanel.children.length > 0 && deskcardpanel.children[deskcardpanel.children.length - 1].destroy();
        }
      },
      play_event: function play_event(data, context) {
        cc.beimi.gamestatus = "playing";
        context.exchange_state("begin", context);
        var temp_player = data.player;
        var cards = context.decode(temp_player.cards);
        setTimeout(function() {
          context.calcdesc_cards(context, 136, data.deskcards);
        }, 0);
        var groupNums = 0;
        for (var times = 0; times < 4; times++) {
          context.initMjCards(groupNums, context, cards, temp_player.banker);
          var inx = 0;
          for (var i = 0; i < data.players.length; i++) data.players[i].playuser != cc.beimi.user.id && context.initPlayerHandCards(groupNums, data.players[inx++].deskcards, inx, context, false);
          groupNums += 1;
        }
        var ani = context.cards_panel.getComponent(cc.Animation);
        ani.play("majiang_reorder");
        var maxvalue = -100;
        var maxvalluecard;
        for (var i = 0; i < context.playercards.length; i++) {
          var temp_script = context.playercards[i].getComponent("HandCards");
          temp_script.value >= 0 ? context.playercards[i].zIndex = temp_script.value : context.playercards[i].zIndex = 200 + temp_script.value;
          if (context.playercards[i].zIndex > maxvalue) {
            maxvalue = context.playercards[i].zIndex;
            maxvalluecard = context.playercards[i];
          }
        }
        context.layout(context.cards_panel, function(fir, sec) {
          return fir.zIndex - sec.zIndex;
        });
        setTimeout(function() {
          true == temp_player.banker && null != maxvalluecard && maxvalluecard.getComponent("HandCards").lastone();
        }, 200);
        context.exchange_state("play", context);
      },
      selectcolor_event: function selectcolor_event(data, context) {
        for (var inx = 0; inx < context.playersarray.length; inx++) {
          var temp = context.playersarray[inx].getComponent("MaJiangPlayer");
          temp.data.id == cc.beimi.user.id && temp.selecting();
        }
        context.exchange_state("selectcolor", context);
      },
      selectresult_event: function selectresult_event(data, context) {
        for (var inx = 0; inx < context.playersarray.length; inx++) {
          var temp = context.playersarray[inx].getComponent("MaJiangPlayer");
          if (temp.data.id == data.userid) {
            temp.selectresult(data);
            break;
          }
        }
        if (data.userid == cc.beimi.user.id) {
          context.exchange_state("selectresult", context);
          data.color < 10 && context.changecolor(data, context);
        }
      },
      lasthands_event: function lasthands_event(data, context) {
        if (data.userid == cc.beimi.user.id) {
          context.exchange_state("lasthands", context);
          context.exchange_searchlight("current", context);
        } else {
          context.exchange_state("otherplayer", context);
          for (var inx = 0; inx < context.playersarray.length; inx++) {
            var temp = context.playersarray[inx].getComponent("MaJiangPlayer");
            if (temp.data.id == data.userid) {
              context.exchange_searchlight(temp.tablepos, context);
              break;
            }
          }
        }
      },
      changecolor: function changecolor(data, context) {
        var lastcard = void 0;
        for (var inx = 0; inx < context.playercards.length; inx++) {
          var temp = context.playercards[inx].getComponent("HandCards");
          temp.relastone();
          if (parseInt(temp.value / 36) == data.color && temp.value >= 0) {
            temp.selected();
            context.playercards[inx].zIndex = 1e3 + temp.value;
            (null == lastcard || lastcard.zIndex < context.playercards[inx].zIndex) && (lastcard = context.playercards[inx]);
          }
        }
        context.layout(context.cards_panel, function(fir, sec) {
          return fir.zIndex - sec.zIndex;
        });
        if (data.banker == cc.beimi.user.id && null != lastcard) {
          var _temp9 = lastcard.getComponent("HandCards");
          _temp9.lastone();
        }
      },
      calcdesc_cards: function calcdesc_cards(context, start, end) {
        start -= 1;
        if (start > end) {
          context.desk_cards.string = start;
          setTimeout(function() {
            context.calcdesc_cards(context, start, end);
          }, 15);
        }
      },
      initDealHandCards: function initDealHandCards(context, data) {
        var temp = context.cardpool.get();
        var temp_script = temp.getComponent("HandCards");
        context.playercards.push(temp);
        temp_script.init(data.card);
        temp_script.lastone();
        parseInt(data.card / 36) == data.color && data.card >= 0 && temp_script.selected();
        temp.zIndex = 2e3;
        temp.parent = context.cards_panel;
      },
      initPlayerHandCards: function initPlayerHandCards(groupNums, deskcards, inx, context, spec) {
        var parent = context.right_panel;
        var cardarray = context.rightcards;
        var prefab = context.cards_right;
        if (1 == inx) {
          parent = context.top_panel;
          cardarray = context.topcards;
          prefab = context.cards_top;
        } else if (2 == inx) {
          parent = context.left_panel;
          cardarray = context.leftcards;
          prefab = context.cards_left;
        }
        context.initOtherCards(groupNums, context, deskcards, prefab, cardarray, parent, spec, inx);
      },
      initOtherCards: function initOtherCards(group, context, cards, prefab, cardsarray, parent, spec, inx) {
        for (var i = 4 * group; i < cards && i < 4 * (group + 1); i++) {
          var temp = cc.instantiate(prefab);
          var temp_script = temp.getComponent("SpecCards");
          temp_script.init(spec, inx);
          temp.parent = parent;
          cardsarray.push(temp);
        }
      },
      initMjCards: function initMjCards(group, context, cards, banker) {
        var _loop = function _loop() {
          var temp = context.cardpool.get();
          var temp_script = temp.getComponent("HandCards");
          context.playercards.push(temp);
          temp_script.init(cards[i]);
          true == banker && i == cards.length - 1 ? temp.parent = context.one_card_panel : temp.parent = context.cards_panel;
          setTimeout(function() {
            temp.parent = context.cards_panel;
          }, 200);
        };
        for (var i = 4 * group; i < cards.length && i < 4 * (group + 1); i++) _loop();
      },
      collect: function collect(context) {
        for (var i = 0; i < context.playersarray.length; ) {
          var player = context.playersarray[i];
          var playerscript = player.getComponent("MaJiangPlayer");
          if (playerscript.data.id != cc.beimi.user.id) {
            context.playerspool.put(player);
            context.playersarray.splice(i, 1);
          } else i++;
        }
      },
      waittingForPlayers: function waittingForPlayers() {
        this.exchange_state("ready", this);
      },
      player: function player(pid, context) {
        var player = void 0;
        for (var inx = 0; inx < context.playersarray.length; inx++) {
          var _temp10 = context.playersarray[inx].getComponent("MaJiangPlayer");
          if (_temp10.data.id == pid) {
            player = _temp10;
            break;
          }
        }
        return player;
      },
      exchange_state: function exchange_state(state, object) {
        var readybtn = null, waitting = null, selectbtn = null, banker = null;
        for (var i = 0; i < object.statebtn.children.length; i++) {
          var target = object.statebtn.children[i];
          "readybtn" == target.name ? readybtn = target : "waitting" == target.name ? waitting = target : "select" == target.name ? selectbtn = target : "banker" == target.name && (banker = target);
          target.active = false;
        }
        switch (state) {
         case "init":
          object.desk_tip.active = false;
          readybtn.active = true;
          object.actionnode_deal.active = false;
          object.exchange_searchlight("none", object);
          break;

         case "ready":
          waitting.active = true;
          null != cc.beimi.data && true == cc.beimi.data.enableai ? object.timer(object, cc.beimi.data.waittime) : object.timer(object, cc.beimi.data.noaiwaitime);
          break;

         case "begin":
          waitting.active = false;
          object.desk_tip.active = true;
          object.canceltimer(object);
          break;

         case "play":
          object.timer(object, 2);
          break;

         case "selectcolor":
          object.exchange_searchlight("current", object);
          selectbtn.active = true;
          object.timer(object, 5);
          break;

         case "selectresult":
          selectbtn.active = false;
          object.canceltimer(object);
          break;

         case "lasthands":
          banker.active = true;
          object.timer(object, 8);
          break;

         case "otherplayer":
          object.timer(object, 8);
          break;

         case "takecard":
          banker.active = false;
          break;

         case "action":
          object.dealActionProcess(object);
          break;

         case "nextplayer":
          object.timer(object, 8);
          break;

         case "allcards":
          for (var i = 0; i < object.playersarray.length; i++) {
            var player = object.playersarray[i];
            var playerscript = player.getComponent("MaJiangPlayer");
            playerscript.clean();
          }
          object.canceltimer(object);
        }
      },
      exchange_searchlight: function exchange_searchlight(direction, context) {
        for (var inx = 0; inx < context.searchlight.children.length; inx++) direction == context.searchlight.children[inx].name ? context.searchlight.children[inx].active = true : context.searchlight.children[inx].active = false;
      },
      dealActionProcess: function dealActionProcess(object) {
        var actionevent = cc.moveTo(.5, 1080, -147);
        actionevent.easing(cc.easeIn(3));
        object.actionnode_three.runAction(actionevent);
        "deal" == object.action && (object.actionnode_deal.active = false);
        object.action = null;
      },
      canceltimer: function canceltimer(object) {
        object.unscheduleAllCallbacks();
        object.mjtimer.string = "00";
      },
      recovery: function recovery() {},
      timer: function timer(object, times) {
        object.mjtimer.string = times > 9 ? times : "0" + times;
        object.callback = function() {
          times -= 1;
          if (times >= 0) {
            var text = times;
            times < 10 && (text = "0" + times);
            object.mjtimer.string = text;
          }
        };
        object.unscheduleAllCallbacks();
        object.schedule(object.callback, 1, times, 0);
      },
      clean: function clean() {
        for (var i = 0; i < this.playercards.length; i++) this.playercards[i].destroy();
        this.playercards.splice(0, this.playercards.length);
        for (var i = 0; i < this.deskcards.length; i++) this.deskcards[i].destroy();
        this.deskcards.splice(0, this.deskcards.length);
        for (var i = 0; i < this.leftcards.length; i++) this.leftcards[i].destroy();
        this.leftcards.splice(0, this.leftcards.length);
        for (var i = 0; i < this.rightcards.length; i++) this.rightcards[i].destroy();
        this.rightcards.splice(0, this.rightcards.length);
        for (var i = 0; i < this.topcards.length; i++) this.topcards[i].destroy();
        this.topcards.splice(0, this.topcards.length);
        for (var i = 0; i < this.actioncards.length; i++) this.actioncards[i].destroy();
        this.actioncards.splice(0, this.actioncards.length);
        this.mask.active = false;
      },
      restart: function restart() {
        this.clean();
        if (true == this.gameover) {
          for (var inx = 0; inx < this.player.length; inx++) this.player[inx].destroy();
          this.player.splice(0, this.player.length);
          this.player = new Array();
          this.initdata(true);
        } else this.initdata(false);
        if (this.ready()) {
          var socket = this.socket();
          socket.emit("restart", "restart");
        }
      },
      startgame: function startgame() {
        if (this.ready()) {
          var socket = this.socket();
          socket.emit("start", "true");
        }
      },
      onDestroy: function onDestroy() {
        this.inited = false;
        this.cleanmap();
        if (this.ready()) {
          var socket = this.socket();
          socket.emit("leave", "leave");
        }
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  MenuClick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ee59TGB3VFZLQuujavmCxG", "MenuClick");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        setting: {
          default: null,
          type: cc.Prefab
        },
        message: {
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
        }
      },
      onLoad: function onLoad() {},
      onSettingClick: function onSettingClick() {
        cc.beimi.openwin = cc.instantiate(this.setting);
        cc.beimi.openwin.parent = this.root();
      },
      onMessageClick: function onMessageClick() {
        cc.beimi.openwin = cc.instantiate(this.message);
        cc.beimi.openwin.parent = this.root();
      },
      onShareClick: function onShareClick() {
        cc.beimi.openwin = cc.instantiate(this.share);
        cc.beimi.openwin.parent = this.root();
      },
      onPlaywayClick: function onPlaywayClick() {
        cc.beimi.openwin = cc.instantiate(this.playway);
        cc.beimi.openwin.parent = this.root();
      },
      onRecordClick: function onRecordClick() {
        cc.beimi.openwin = cc.instantiate(this.playway);
        cc.beimi.openwin.parent = this.root();
      },
      onFeedBackClick: function onFeedBackClick() {
        cc.beimi.openwin = cc.instantiate(this.feedback);
        cc.beimi.openwin.parent = this.root();
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  MessageDialog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c56edHPmRpESZK38dhRM8Dx", "MessageDialog");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        title_message: {
          default: null,
          type: cc.Node
        },
        title_contact: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.title_contact.active = false;
        this.title_message.active = true;
      },
      onContacts: function onContacts() {
        this.title_contact.active = true;
        this.title_message.active = false;
      },
      onMessage: function onMessage() {
        this.title_contact.active = false;
        this.title_message.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  PlayGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6643cbk+6NH4aV0uFiz0KPh", "PlayGame");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {},
      onLoad: function onLoad() {
        this.resize();
      },
      onClickDizhu: function onClickDizhu() {
        this.loadding();
        var object = this;
        setTimeout(function() {
          object.scene("dizhu", object);
        }, 200);
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  PlayPoker: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0da62UUiKFCy6UjmbXoH553", "PlayPoker");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        posy: cc.Integer,
        card: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.posy = this.card.y;
      },
      takecard: function takecard(event) {
        var beiMiCard = event.target.parent.getComponent("BeiMiCard");
        if (null != beiMiCard.game) if (event.target.y == this.posy) {
          event.target.y = event.target.y + 30;
          beiMiCard.selected = true;
        } else {
          event.target.y = event.target.y - 30;
          beiMiCard.selected = false;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  PlayerRender: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04f19Z9BnFGC5KENS4kRc0S", "PlayerRender");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        username: {
          default: null,
          type: cc.Label
        },
        goldcoins: {
          default: null,
          type: cc.Label
        },
        dizhu: {
          default: null,
          type: cc.Node
        },
        pokertag: {
          default: null,
          type: cc.Node
        },
        pokercards: {
          default: null,
          type: cc.Label
        },
        timer: {
          default: null,
          type: cc.Node
        },
        jsq: {
          default: null,
          type: cc.Node
        },
        headimg: {
          default: null,
          type: cc.Node
        },
        atlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        timer_num: {
          default: null,
          type: cc.Label
        },
        result: {
          default: null,
          type: cc.Node
        },
        lastcards: {
          default: null,
          type: cc.Node
        },
        cannot: {
          default: null,
          type: cc.Node
        },
        donot: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.cardcount = 0;
        this.cardslist = new Array();
        this.isRight = false;
      },
      initplayer: function initplayer(data, isRight) {
        this.username.string = data.username;
        this.userid = data.id;
        if (true == isRight) {
          this.pokertag.x = -1 * this.pokertag.x;
          this.timer.x = -1 * this.timer.x;
          this.headimg.x = -1 * this.headimg.x;
          this.result.x = -1 * this.result.x;
          this.cannot.x = -1 * this.cannot.x;
          this.donot.x = -1 * this.donot.x;
          this.jsq.x = -1 * this.jsq.x;
          this.dizhu.x = -1 * this.dizhu.x;
          this.lastcards.getComponent(cc.Layout).horizontalDirection = 0;
          this.isRight = isRight;
        }
        if (this.goldcoins) if (data.goldcoins > 1e4) {
          var num = this.goldcoins / 1e4;
          this.goldcoins.string = num.toFixed(2) + "\u4e07";
        } else this.goldcoins.string = data.goldcoins;
        this.dizhu && (this.dizhu.active = false);
        this.jsq && (this.jsq.active = false);
        this.result && (this.result.active = false);
        this.cannot && (this.cannot.active = false);
        this.donot && (this.donot.active = false);
        this.takecards && (this.takecards.active = false);
      },
      countcards: function countcards(cards) {
        this.cardcount = this.cardcount + cards;
        this.pokercards.string = this.cardcount;
      },
      resetcards: function resetcards(cards) {
        this.cardcount = cards;
        null != this.pokercards && (this.pokercards.string = this.cardcount);
      },
      catchtimer: function catchtimer(times) {
        this.jsq && (this.jsq.active = true);
        this.result && (this.result.active = false);
        this.cannot && (this.cannot.active = false);
        this.donot && (this.donot.active = false);
        var self = this;
        var gameTimer = require("GameTimer");
        this.beimitimer = new gameTimer();
        this.timesrc = this.beimitimer.runtimer(this, this.jsq, this.atlas, this.timer_num, this.timer_num, times);
      },
      catchresult: function catchresult(data) {
        if (this.beimitimer) {
          this.beimitimer.stoptimer(this, this.jsq, this.timesrc);
          var dograb = this.atlas.getSpriteFrame("\u63d0\u793a_\u62a2\u5730\u4e3b");
          var docatch = this.atlas.getSpriteFrame("\u63d0\u793a_\u4e0d\u62a2");
          if (data.grab) {
            if (this.result) {
              this.result.getComponent(cc.Sprite).spriteFrame = dograb;
              this.result.active = true;
            }
            this.cannot && (this.cannot.active = false);
            this.donot && (this.donot.active = false);
          } else {
            if (this.result) {
              this.result.getComponent(cc.Sprite).spriteFrame = docatch;
              this.result.active = true;
            }
            this.cannot && (this.cannot.active = false);
            this.donot && (this.donot.active = false);
          }
        }
      },
      hideresult: function hideresult() {
        this.result && (this.result.active = false);
        this.cannot && (this.cannot.active = false);
        this.donot && (this.donot.active = false);
      },
      lasthands: function lasthands(self, game, data) {
        this.hideresult();
        this.beimitimer && this.timesrc && this.beimitimer.stoptimer(this, this.jsq, this.timesrc);
        if (this.userid == data.userid) {
          this.pokercards && this.countcards(3);
          this.playtimer(game, 25);
        }
        this.setDizhuFlag(data);
      },
      setDizhuFlag: function setDizhuFlag(data) {
        this.userid == data.userid ? this.dizhu.active = true : this.dizhu.active = false;
      },
      lasttakecards: function lasttakecards(game, self, cardsnum, cards, data) {
        this.beimitimer && this.timesrc && this.beimitimer.stoptimer(this, this.jsq, this.timesrc);
        this.result && (this.result.active = false);
        this.cannot && (this.cannot.active = false);
        this.donot && (this.donot.active = false);
        this.jsq && (this.jsq.active = false);
        this.lastcards && (this.lastcards.active = true);
        if (this.cardslist.length > 0) {
          for (var i = 0; i < this.cardslist.length; i++) game.minpokerpool.put(this.cardslist[i]);
          this.cardslist.splice(0, this.cardslist.length);
        }
        if (false == data.donot || true == data.finished) {
          this.resetcards(cardsnum);
          for (var i = 0; i < cards.length; i++) this.playcards(game, i, cards[i], cards);
          this.layout(this.lastcards, function(fir, sec) {
            return fir.zIndex - sec.zIndex;
          });
        } else "1" == data.sameside ? self.getPlayer(data.userid).tipdonot() : self.getPlayer(data.userid).tipcannot();
      },
      tipcannot: function tipcannot() {
        this.result && (this.result.active = false);
        this.cannot && (this.cannot.active = true);
        this.donot && (this.donot.active = false);
      },
      tipdonot: function tipdonot() {
        this.result && (this.result.active = false);
        this.cannot && (this.cannot.active = false);
        this.donot && (this.donot.active = true);
      },
      playcards: function playcards(game, index, card, cards) {
        var currpoker = game.minpokerpool.get();
        currpoker.x = 30 * index - 30;
        var zIndex = this.countcard(card, cards);
        currpoker.zIndex = 4 - zIndex;
        currpoker.parent = this.lastcards;
        this.cardslist.push(currpoker);
        var beiMiCard = currpoker.getComponent("BeiMiCard");
        beiMiCard.setCard(card);
        beiMiCard.order();
      },
      countcard: function countcard(card, lastcards) {
        var value = parseInt(card / 4);
        var count = 0;
        for (var i = 0; i < lastcards.length; i++) {
          var temp = parseInt(lastcards[i] / 4);
          value == temp && (count += 1);
        }
        return count;
      },
      playtimer: function playtimer(game, times) {
        this.result && (this.result.active = false);
        this.cannot && (this.cannot.active = false);
        this.donot && (this.donot.active = false);
        this.lastcards && (this.lastcards.active = false);
        for (var i = 0; i < this.cardslist.length; i++) game.minpokerpool.put(this.cardslist[i]);
        var self = this;
        var gameTimer = require("GameTimer");
        this.beimitimer = new gameTimer();
        this.timesrc = this.beimitimer.runtimer(this, this.jsq, this.atlas, this.timer_num, this.timer_num, times);
      },
      clean: function clean(game) {
        for (var i = 0; i < this.cardslist.length; i++) game.minpokerpool.put(this.cardslist[i]);
        this.resetcards(0);
        this.dizhu && (this.dizhu.active = false);
        this.jsq && (this.jsq.active = false);
        this.result && (this.result.active = false);
        this.cannot && (this.cannot.active = false);
        this.donot && (this.donot.active = false);
        this.takecards && (this.takecards.active = false);
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon",
    GameTimer: "GameTimer"
  } ],
  PlayersEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f88a1eHh9tCsqfPY5gVf+/A", "PlayersEvent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {}
    });
    cc._RF.pop();
  }, {} ],
  PlaywayClick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "917d5CY9nhAg4c6kp0gnisn", "PlaywayClick");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        playway: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      onClick: function onClick() {
        var self = this;
        var selectPlayway = this.getCommon("SelectPlayway");
        var thisplayway = this.playway.getComponent("Playway");
        var extparams = {
          gametype: thisplayway.data.code,
          playway: thisplayway.data.id
        };
        console.log(extparams.gametype + "code");
        console.log(extparams.playway + "id");
        this.closeOpenWin();
        this.preload(extparams, self);
      },
      createRoom: function createRoom(event, data) {
        var self = this;
        this.loadding();
        setTimeout(function() {
          self.scene(data, self);
        }, 200);
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  PlaywayGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23db4wB+L1AhpChiA3tHB3S", "PlaywayGroup");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        grouptitle: {
          default: null,
          type: cc.Label
        },
        groupbox: {
          default: null,
          type: cc.Node
        },
        groupbox_four: {
          default: null,
          type: cc.Node
        },
        content: {
          default: null,
          type: cc.Node
        },
        itemname: {
          default: null,
          type: cc.Label
        },
        checkbox: {
          default: null,
          type: cc.Node
        },
        checkboxnode: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var self = this;
        this.node.on("checkbox", function(event) {
          if (null != self.checkbox) if (false == self.checked) {
            if ("radio" == self.data.type) for (var inx = 0; inx < self.options.length; inx++) {
              var script = self.options[inx];
              script.doUnChecked();
            }
            self.doChecked();
          } else if ("radio" == self.data.type) {
            for (var inx = 0; inx < self.options.length; inx++) {
              var _script = self.options[inx];
              _script.doUnChecked();
            }
            self.doChecked();
          } else self.doUnChecked();
          event.stopPropagation();
        });
      },
      init: function init(group, itempre, items, parentoptions) {
        this.data = group;
        this.options = parentoptions;
        this.groupoptions = new Array();
        this.checked = false;
        this.grouptitle.string = group.name;
        if (null != this.groupbox && null != itempre) {
          var itemsnum = 0;
          for (var inx = 0; inx < items.length; inx++) if (items[inx].groupid == group.id) {
            itemsnum += 1;
            var newitem = cc.instantiate(itempre);
            if (null != group.style && "three" == group.style) {
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
          if (null != group.style && "three" == group.style) {
            if (itemsnum > 4) {
              this.content.height = 35 + 50 * (parseInt((itemsnum - 1) / 3) + 1);
              this.groupbox.height = 50 * (parseInt((itemsnum - 1) / 3) + 1);
            }
          } else if (itemsnum > 4) {
            this.content.height = 35 + 50 * (parseInt((itemsnum - 1) / 4) + 1);
            this.groupbox_four.height = 50 * (parseInt((itemsnum - 1) / 4) + 1);
          }
        }
      },
      inititem: function inititem(item, group, parentoptions) {
        this.data = group;
        this.item = item;
        this.options = parentoptions;
        this.itemname.string = item.name;
        if ("three" == group.style) {
          this.itemname.node.width = 160;
          this.itemname.node.x = 107;
        } else {
          this.itemname.node.width = 105;
          this.itemname.node.x = 77;
        }
        true == item.defaultvalue ? this.doChecked() : this.doUnChecked();
        null != group && null != group.style && "three" == group.style && (this.checkboxnode.x = -76);
      },
      doChecked: function doChecked() {
        this.checked = true;
        this.checkbox.active = true;
      },
      doUnChecked: function doUnChecked() {
        this.checked = false;
        this.checkbox.active = false;
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  Playway: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc637Rt3XZNHq0lqg8C5lYR", "Playway");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        tag: {
          default: null,
          type: cc.Node
        },
        score: {
          default: null,
          type: cc.Label
        },
        onlineusers: {
          default: null,
          type: cc.Label
        },
        scorelimit: {
          default: null,
          type: cc.Label
        },
        atlas: {
          default: null,
          type: cc.SpriteAtlas
        }
      },
      onLoad: function onLoad() {},
      init: function init(playway) {
        console.log(playway + "\u8fd4\u56de\u6570\u636e");
        if (playway) {
          var frameName = "\u521d\u7ea7";
          "2" == playway.level && (frameName = "\u9ad8\u7ea7");
          this.data = playway;
          false == playway.shuffle ? this.tag.active = false : this.tag.active = true;
          frameName += playway.skin;
          this.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame(frameName);
          this.onlineusers.string = playway.onlineusers + " \u4eba ";
          var min = parseInt(playway.mincoins / 1e3) + "\u5343";
          playway.mincoins >= 1e4 && (min = parseInt(playway.mincoins / 1e4) + "\u4e07");
          var max = parseInt(playway.maxcoins / 1e3) + "\u5343";
          playway.maxcoins >= 1e4 && (max = parseInt(playway.maxcoins / 1e4) + "\u4e07");
          this.scorelimit.string = min + "-" + max;
          this.score.string = playway.score;
        }
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  Ready: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "752c7696GJE1bnLAB2ZAIEG", "Ready");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        target: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      onClick: function onClick(event) {
        var majiang = this.target.getComponent("MajiangDataBind");
        majiang.startgame();
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  RoomClick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9e4fYjsVRIGLcQEne6Zyt1", "RoomClick");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onClick: function onClick() {
        this.node.dispatchEvent(new cc.Event.EventCustom("checkbox", true));
        console.log("\u70b9\u51fb\u7684\u4e1c\u897f");
      },
      onCreateRoom: function onCreateRoom() {
        this.node.dispatchEvent(new cc.Event.EventCustom("createroom", true));
        console.log("\u81ea\u5b9a\u4e49");
        console.log("pcd")
      }
    });
    cc._RF.pop();
  }, {} ],
  RoomOption: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69fc37PjLpDHJPum+0hWtu/", "RoomOption");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        atlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        memo: {
          default: null,
          type: cc.Label
        },
        optionsnode: {
          default: null,
          type: cc.Node
        },
        roomtitle: {
          default: null,
          type: cc.Node
        },
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
        }
      },
      onLoad: function onLoad() {
        var self = this;
        this.group = new Array();
        this.node.on("createroom", function(event) {
          var extparams = {};
          var values = new Array();
          for (var inx = 0; inx < self.group.length; inx++) {
            var groupitem = self.group[inx];
            var value = "";
            for (var j = 0; j < groupitem.groupoptions.length; j++) {
              var option = groupitem.groupoptions[j];
              if (true == option.checked) {
                "" != value && (value += ",");
                value += option.item.value;
              }
            }
            extparams[groupitem.data.code] = value;
          }
          extparams.gametype = self.data.code;
          console.log(self.data.code + "\u8fd9\u4e2a\u662fcode");
          extparams.playway = self.data.id;
          console.log(self.data.id + "\u8fd9\u4e2a\u662fid");
          extparams.gamemodel = "room";
          event.stopPropagation();
          self.preload(extparams, self);
        });
      },
      init: function init(playway) {
        this.data = playway;
        if (null != this.memo && null != playway.memo && "" != playway.memo) {
          this.memonode.active = true;
          this.memo.string = playway.memo;
        } else null != this.memonode && (this.memonode.active = false);
        if (true == playway.free) {
          this.freeopt.active = true;
          this.createroom.active = false;
        } else {
          this.freeopt.active = false;
          this.createroom.active = true;
        }
        if (null != playway.roomtitle && "" != playway.roomtitle) {
          var frame = this.atlas.getSpriteFrame(playway.roomtitle);
          null != frame && (this.roomtitle.getComponent(cc.Sprite).spriteFrame = frame);
        }
        if (null != this.optiongroup && null != playway.groups) for (var inx = 0; inx < playway.groups.length; inx++) {
          var group = cc.instantiate(this.optiongroup);
          var playWayGroup = group.getComponent("PlaywayGroup");
          playWayGroup.init(playway.groups[inx], this.optiongroupitem, playway.items);
          this.group.push(playWayGroup);
          group.parent = this.optionsnode;
        }
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  RoomPlayway: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3086d4/qp5Fs4lHZ22cK68H", "RoomPlayway");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        atlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        gametype: {
          default: null,
          type: cc.Node
        },
        roomoption: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {},
      init: function init(playway) {
        playway && (this.data = playway);
        "dizhu" == playway.code ? this.gametype.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("\u6597\u5730\u4e3b") : "majiang" == playway.code ? this.gametype.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("\u5e7f\u4e1c\u9ebb\u5c06") : "poker" == playway.code && (this.gametype.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("\u5fb7\u5dde\u6251\u514b"));
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  Room: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad979AdLn9Cd6FhwY0F5RKz", "Room");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        playway: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        this.playwaypool = new cc.NodePool();
        for (var i = 0; i < 5; i++) this.playwaypool.put(cc.instantiate(this.playway));
        this.playwayarray = new Array();
      },
      init: function init() {
        var gametype = cc.beimi.game.type(data);
        if (null != gametype) for (var inx = 0; inx < gametype.playways.length; inx++) {
          var playway = this.playwaypool.get();
          var script = playway.getComponent("Playway");
          script.init(gametype.playways[inx]);
          playway.parent = this.content;
          this.playwayarray.push(playway);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  SelectColor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8327R8gFFLi72Qcm9IEpSQ", "SelectColor");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {},
      onLoad: function onLoad() {},
      onClick: function onClick(event, data) {
        if (this.ready()) {
          var socket = this.socket();
          socket.emit("selectcolor", data);
        }
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  SelectPlayway: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0664oMnHlOK5okeYWUYZ/B", "SelectPlayway");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {
        first: {
          default: null,
          type: cc.Node
        },
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
      onLoad: function onLoad() {
        if (null != cc.beimi && null != cc.beimi.user) {
          this.disMenu("first");
          this.playwaypool = new cc.NodePool();
          for (var i = 0; i < 20; i++) this.playwaypool.put(cc.instantiate(this.playway));
          console.log(this.playwaypool + ":playwaypool\u7684\u503c");
          this.playwayarray = new Array();
          if (this.gamepoint && null != cc.beimi && null != cc.beimi.games) for (var inx = 0; inx < this.gamepoint.children.length; inx++) {
            var name = this.gamepoint.children[inx].name;
            var gameenable = false;
            for (var i = 0; i < cc.beimi.games.length; i++) {
              var gamemodel = cc.beimi.games[i];
              for (var j = 0; j < gamemodel.types.length; j++) {
                var gametype = gamemodel.types[j];
                if (gametype.code == name) {
                  gameenable = true;
                  break;
                }
              }
              if (true == gameenable) break;
            }
            this.gamepoint.children[inx].active = true == gameenable;
          }
        }
      },
      onClick: function onClick(event, data) {
        console.log(data + "data\u7684\u503c");
        console.log(this.title);
        var pc = this.disMenu("second");
        console.log(pc);
        var girlAni = this.global.getComponent("DefaultHallDataBind");
        girlAni.playToLeft();
        this._secondAnimCtrl = this.second.getComponent(cc.Animation);
        this._secondAnimCtrl.play("playway_display");
        if (this.title) for (var inx = 0; inx < this.title.children.length; inx++) this.title.children[inx].name == data ? this.title.children[inx].active = true : this.title.children[inx].active = false;
        var gametype = cc.beimi.game.type(data);
        console.log(gametype);
        if (null != gametype) {
          for (var inx = 0; inx < gametype.playways.length; inx++) {
            var playway = this.playwaypool.get();
            var script = playway.getComponent("Playway");
            null == script && (script = playway.getComponent("RoomPlayway"));
            script.init(gametype.playways[inx]);
            playway.parent = this.content;
            console.log(this.content);
          }
          this.playwayarray.push(playway);
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
        for (var inx = 0; inx < this.playwayarray.length; inx++) this.playwaypool.put(this.playwayarray[inx]);
        this.playwayarray.splice(0, this.playwayarray.length);
      },
      disMenu: function disMenu(order) {
        if ("first" == order) {
          this.first.active = true;
          this.second.active = false;
          null != this.third && (this.third.active = false);
        } else if ("second" == order) {
          this.first.active = false;
          this.second.active = true;
          null != this.third && (this.third.active = false);
        } else if ("third" == order) {
          this.first.active = false;
          this.second.active = false;
          null != this.third && (this.third.active = true);
        }
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  SettingClide: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90431f23JhC0KoTIGgpT8b7", "SettingClide");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        music: {
          default: null,
          type: cc.Sprite
        },
        musicSlider: {
          default: null,
          type: cc.Slider
        },
        sound: {
          default: null,
          type: cc.Sprite
        },
        soundSlider: {
          default: null,
          type: cc.Slider
        },
        musicon: {
          default: null,
          type: cc.Node
        },
        musicoff: {
          default: null,
          type: cc.Node
        },
        soundon: {
          default: null,
          type: cc.Node
        },
        soundoff: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.musicSlider.progress = cc.beimi.audio.bgVolume;
        this.music.fillRange = cc.beimi.audio.bgVolume;
        if (cc.beimi.audio.getState() == cc.audioEngine.AudioState.PLAYING) {
          this.musicon.active = true;
          this.musicoff.active = false;
        } else {
          this.musicon.active = false;
          this.musicoff.active = true;
        }
      },
      onMusicSlide: function onMusicSlide(slider) {
        this.music.fillRange = slider.progress;
        cc.beimi.audio.setBGMVolume(slider.progress);
        this.musicon.active = true;
        this.musicoff.active = false;
      },
      onSoundSlide: function onSoundSlide(slider) {
        this.sound.fillRange = slider.progress;
      },
      onMusiceBtnClick: function onMusiceBtnClick() {
        if (cc.beimi.audio.getState() == cc.audioEngine.AudioState.PLAYING) {
          this.musicon.active = false;
          this.musicoff.active = true;
          cc.beimi.audio.pauseAll();
        } else {
          this.musicon.active = true;
          this.musicoff.active = false;
          cc.beimi.audio.resumeAll();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  SpecCards: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92a2dUdJFBDKb8JTWhMyGZu", "SpecCards");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      init: function init(spec, inx) {
        this.spec = spec;
        this.inx = inx;
        true == this.spec && (0 == this.inx || 2 == this.inx ? this.node.height = this.node.height + 50 : this.node.width = this.node.width + 30);
      },
      reinit: function reinit() {
        true == this.spec && (0 == this.inx || 2 == this.inx ? this.node.height = this.node.height - 50 : this.node.width = this.node.width - 30);
        this.spec = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  SummaryClick: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72e3dJ9+HxO36v85+BG/64a", "SummaryClick");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onBGClick: function onBGClick(event) {
        event.stopPropagation();
      },
      onCloseClick: function onCloseClick() {
        this.node.dispatchEvent(new cc.Event.EventCustom("close", true));
      },
      onBeginClick: function onBeginClick() {
        this.node.dispatchEvent(new cc.Event.EventCustom("begin", true));
      }
    });
    cc._RF.pop();
  }, {} ],
  SummaryDetail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b94d75s1JMlLg4UokBmvtU", "SummaryDetail");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        workitem: {
          default: null,
          type: cc.Node
        },
        myscore: {
          default: null,
          type: cc.Label
        },
        myflag: {
          default: null,
          type: cc.Node
        },
        player_1: {
          default: null,
          type: cc.Node
        },
        player_1_flag: {
          default: null,
          type: cc.Node
        },
        player_1_name: {
          default: null,
          type: cc.Label
        },
        player_1_score: {
          default: null,
          type: cc.Label
        },
        player_2: {
          default: null,
          type: cc.Node
        },
        player_2_flag: {
          default: null,
          type: cc.Node
        },
        player_2_name: {
          default: null,
          type: cc.Label
        },
        player_2_score: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var self = this;
        this.workitem.on("begin", function(event) {
          if (null != self.context) {
            self.context.summarypage.destroy();
            self.context.restart("begin");
          }
          event.stopPropagation();
        });
        this.workitem.on("opendeal", function(event) {
          if (null != self.context) {
            self.context.summarypage.destroy();
            self.context.restart("opendeal");
          }
          event.stopPropagation();
        });
        this.workitem.on("close", function(event) {
          if (null != self.context) {
            self.context.onCloseClick();
            self.context.summarypage.destroy();
          }
          event.stopPropagation();
        });
      },
      create: function create(context, data) {
        this.context = context;
        var index = 0;
        for (var inx = 0; inx < data.players.length; inx++) {
          var player = data.players[inx];
          if (player.userid == cc.beimi.user.id) this.process(player, null, this.myscore, this.myflag); else {
            0 == index ? this.process(player, this.player_1_name, this.player_1_score, this.player_1_flag) : 1 == index && this.process(player, this.player_2_name, this.player_2_score, this.player_2_flag);
            index += 1;
          }
        }
      },
      process: function process(player, username, score, flag) {
        null != username && (username.string = player.username);
        true == player.win ? score.string = player.score : score.string = "-" + player.score;
        true == player.dizhu ? flag.active = true : flag.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  TakeMJCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "09db6qY1x9IrIdvV3VFAYc8", "TakeMJCard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        target: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.clickstate = false;
      },
      onClick: function onClick() {
        var handCards = this.target.getComponent("HandCards");
        var self = this;
        if (true == this.clickstate) this.node.dispatchEvent(new cc.Event.EventCustom("takecard", true)); else {
          if (true == handCards.take) {
            handCards.take = false;
            this.target.y = this.target.y - 30;
          } else {
            handCards.take = true;
            this.target.y = this.target.y + 30;
          }
          this.clickstate = true;
          setTimeout(function() {
            self.clickstate = false;
          }, 500);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  common: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c20fdJA4UpBA5zauiK5QF44", "common");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      onLoad: function onLoad() {},
      login: function login() {
        this.io = require("IOUtils");
        this.loadding();
        if (null == this.io.get("userinfo")) {
          var xhr = cc.beimi.http.httpGet("/api/guest", this.sucess, this.error, this);
          console.log(xhr);
        } else {
          var data = JSON.parse(this.io.get("userinfo"));
          if (null != data.token) var xhr = cc.beimi.http.httpGet("/api/guest?token=" + data.token.id, this.sucess, this.error, this);
        }
      },
      sucess: function sucess(result, object) {
        var data = JSON.parse(result);
        console.log(data + "\u6210\u529f\u540e\u7684\u53c2\u6570");
        console.log(object + "\u8fd9\u4e2a\u8bf4\u5b9e\u8bdd\u6211\u4e5f\u4e0d\u77e5\u9053\u662f\u4ec0\u4e48");
        if (null != data && null != data.token && null != data.data) {
          object.reset(data, result);
          cc.beimi.gamestatus = data.data.gamestatus;
          object.connect();
          null != cc.beimi.gametype && "" != cc.beimi.gametype && object.scene(cc.beimi.gametype, object);
        }
      },
      error: function error(object) {
        object.closeloadding(object.loaddingDialog);
        object.alert("\u7f51\u7edc\u5f02\u5e38\uff0c\u670d\u52a1\u8bbf\u95ee\u5931\u8d25");
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon",
    IOUtils: "IOUtils"
  } ],
  form: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c448sm7ERFGonudseXdiiB", "form");
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
        if ("" == !this.username.string && "" == !this.password.string) {
          this._prefab.destroy();
          if (cc.beimi.loadding.size() > 0) {
            var loadding = cc.beimi.loadding.get();
            var root = cc.find("Canvas");
            loadding.parent = root;
            this._animCtrl = loadding.getComponent(cc.Animation);
            var animState = this._animCtrl.play("loadding");
            animState.wrapMode = cc.WrapMode.Loop;
          }
        }
      },
      guest: function guest() {}
    });
    cc._RF.pop();
  }, {} ],
  init: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b60bxhrRtJ44oyACJf+UrI", "init");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _progress: 0,
        _splash: null,
        _isLoading: false,
        loaddingPrefab: {
          default: null,
          type: cc.Prefab
        },
        alertPrefab: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        if (!cc.sys.isNative && cc.sys.isMobile) {
          var canvas = this.node.getComponent(cc.Canvas);
          canvas.fitHeight = true;
          canvas.fitWidth = true;
        }
        "use strict";
        var win = cc.director.getWinSize();
        cc.view.setDesignResolutionSize(win.width, win.height, cc.ResolutionPolicy.EXACT_FIT);
        this.initMgr();
      },
      start: function start() {
        var self = this;
        var SHOW_TIME = 3e3;
        var FADE_TIME = 500;
      },
      initMgr: function initMgr() {
        console.log(cc.beimi + "\u8fd9\u4e2a\u662f\u8981\u6253\u5370\u7684\u503c");
        if (null == cc.beimi) {
          cc.beimi = {};
          cc.beimi.routes = {};
          cc.beimi.event = {};
          cc.beimi.http = require("HTTP");
          console.log(cc.beimi.http + "\u7b2c\u4e00\u4e2a");
          cc.beimi.seckey = "beimi";
          console.log(cc.beimi.seckey + "\u7b2c\u4e8c\u4e2a");
          cc.beimi.gamestatus = "none";
          console.log(cc.beimi.gamestatus + "\u7b2c\u4e09\u4e2a");
          cc.beimi.dialog = null;
          cc.beimi.openwin = null;
          cc.beimi.loadding = new cc.NodePool();
          cc.beimi.loadding.put(cc.instantiate(this.loaddingPrefab));
          cc.beimi.dialog = new cc.NodePool();
          cc.beimi.dialog.put(cc.instantiate(this.alertPrefab));
          cc.beimi.game = {
            model: null,
            playway: null,
            type: function type(name) {
              var temp;
              if (null != cc.beimi.games) for (var i = 0; i < cc.beimi.games.length; i++) {
                var gamemodel = cc.beimi.games[i];
                for (var inx = 0; inx < gamemodel.types.length; inx++) {
                  var type = gamemodel.types[inx];
                  type.code == name && (temp = type);
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
          cc.Button.prototype.setSoundEffect = function(on) {
            this._soundOn = on;
          };
          cc.Button.prototype._onTouchEnded = function(event) {
            this.interactable && this.enabledInHierarchy && this._pressed && true == this._soundOn && cc.beimi.audio.playSFX("select.mp3");
            this.touchEndedClone(event);
          };
        }
      }
    });
    cc._RF.pop();
  }, {
    Audio: "Audio",
    HTTP: "HTTP",
    "socket.io": "socket.io"
  } ],
  logindialog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a4c7+ASWxPzb8+X9E5tU/a", "logindialog");
    "use strict";
    var beiMiCommon = require("BeiMiCommon");
    cc.Class({
      extends: beiMiCommon,
      properties: {},
      onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
          e.stopPropagation();
        });
      },
      onCloseClick: function onCloseClick() {
        var common = this.getCommon("common");
        null != common && common.loginFormPool.put(common.dialog);
      }
    });
    cc._RF.pop();
  }, {
    BeiMiCommon: "BeiMiCommon"
  } ],
  "socket.io": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83e71BFtMFHUZ8vefL8Yxl5", "socket.io");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      connect: function connect(url, options) {
        var self = this;
        this.ws = new WebSocket(url + "?userid=" + cc.beimi.user.id);
        this.ws.onopen = function(event) {
          console.log("Send Text WS was opened.");
        };
        this.ws.onmessage = function(event) {
          var data = self.parse(event.data);
          null != data && null != data.event && cc.beimi.event[data.event](event.data);
          console.log("response text msg: " + event.data);
        };
        this.ws.onerror = function(event) {
          console.log("Send Text fired an error");
        };
        this.ws.onclose = function(event) {
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
  }, {} ]
}, {}, [ "DiZhuSummaryClick", "DizhuBegin", "DizhuButton", "DizhuDataBind", "GameMenu", "PlayPoker", "SelectColor", "SummaryDetail", "MJMenuClick", "MaJiangPlayer", "MaJiangSummary", "MajiangDataBind", "Ready", "DeskCards", "HandCards", "SpecCards", "TakeMJCard", "ActionEvent", "AnimEvent", "JoinRoomEvent", "PlayersEvent", "GangAction", "SummaryClick", "DefaultHallDataBind", "GameRoom", "PlayGame", "Playway", "PlaywayClick", "Room", "RoomPlayway", "SelectPlayway", "DialogClick", "FeedBackDialog", "JoinRoomClick", "LogoutClick", "MenuClick", "MessageDialog", "SettingClide", "PlaywayGroup", "RoomClick", "RoomOption", "common", "form", "init", "BeiMiQR", "GameTimer", "PlayerRender", "BeiMiCard", "BeiMiCommon", "BeiMiDialog", "BeiMiRoomOption", "BeiMiTimer", "EventStop", "IOUtils", "logindialog", "Audio", "Base64", "HTTP", "socket.io" ]);