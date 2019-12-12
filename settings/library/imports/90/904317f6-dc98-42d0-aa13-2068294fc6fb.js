"use strict";
cc._RF.push(module, '90431f23JhC0KoTIGgpT8b7', 'SettingClide');
// module/hall/script/menu/SettingClide.js

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

    // use this for initialization
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
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();