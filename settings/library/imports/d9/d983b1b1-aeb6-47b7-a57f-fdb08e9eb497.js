"use strict";
cc._RF.push(module, 'd983bGxrrZHt6V//bCOnrSX', 'Audio');
// resources/script/lib/Audio.js

"use strict";

cc.Class({
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
        bgVolume: 1.0, // 背景音量

        deskVolume: 1.0, //   房间 房间音量

        bgAudioID: -1 //   背景 音乐  id
    },

    // use this for initialization
    init: function init() {
        var t = cc.sys.localStorage.getItem("bgVolume");
        if (t != null) {
            this.bgVolume = parseFloat(t);
        }

        var t = cc.sys.localStorage.getItem("deskVolume");

        if (t != null) {
            this.deskVolume = parseFloat(t);
        }

        cc.game.on(cc.game.EVENT_HIDE, function () {
            cc.audioEngine.pauseAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            cc.audioEngine.resumeAll();
        });
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    getUrl: function getUrl(url) {
        return cc.url.raw("resources/sounds/" + url);
    },
    //游戏音乐
    playBGM: function playBGM(url) {
        var audioUrl = this.getUrl(url);
        if (this.bgAudioID >= 0) {
            cc.audioEngine.stop(this.bgAudioID);
        }
        //播放音频(音频剪辑,音乐是否循环,音乐体积)
        this.bgAudioID = cc.audioEngine.play(audioUrl, true, this.bgVolume);
    },
    //游戏特效
    playSFX: function playSFX(url) {
        var audioUrl = this.getUrl(url);
        if (this.sfxVolume > 0) {
            var audioId = cc.audioEngine.play(audioUrl, false, this.deskVolume);
        }
    },
    //设置特效体积
    setSFXVolume: function setSFXVolume(v) {
        if (this.sfxVolume != v) {
            cc.sys.localStorage.setItem("deskVolume", v);
            this.deskVolume = v;
        }
    },

    getState: function getState() {
        return cc.audioEngine.getState(this.bgAudioID);
    },
    //设置游戏音乐
    setBGMVolume: function setBGMVolume(v, force) {
        if (this.bgAudioID >= 0) {
            if (v > 0 && cc.audioEngine.getState(this.bgAudioID) === cc.audioEngine.AudioState.PAUSED) {
                cc.audioEngine.resume(this.bgAudioID);
            } else if (v == 0) {
                cc.audioEngine.pause(this.bgAudioID);
            }
        }
        if (this.bgVolume != v || force) {
            cc.sys.localStorage.setItem("bgVolume", v);
            this.bgmVolume = v;
            cc.audioEngine.setVolume(this.bgAudioID, v);
        }
    },
    //暂停所有
    pauseAll: function pauseAll() {
        cc.audioEngine.pauseAll();
    },
    //继续所有
    resumeAll: function resumeAll() {
        cc.audioEngine.resumeAll();
    }
});

cc._RF.pop();