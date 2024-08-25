/**
 * vue-ezuikit v1.0.0
 * (c) 2024-2024 rocyuan
 * Email: rocyuan666@163.com
 * Released under the MIT License.
 */
(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f(require('vue'),require('ezuikit-js')):typeof define==='function'&&define.amd?define(['vue','ezuikit-js'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,g.vueEzuikit=f(g.Vue,g.EZUIKit));})(this,(function(vue,EZUIKit){'use strict';/**
 * 创建UUID
 * @param {Number} len - uuid的长度
 * @param {Boolean} firstU - 将返回的首字母置为"u"
 * @param {Nubmer} radix - 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 * @returns {string} -  uuid
 */
function createUUID(len, firstU, radix) {
    if (len === void 0) { len = 32; }
    if (firstU === void 0) { firstU = true; }
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [];
    radix = radix || chars.length;
    if (len) {
        for (var i = 0; i < len; i++)
            uuid[i] = chars[0 | (Math.random() * radix)];
    }
    else {
        var r = void 0;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (var i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | (Math.random() * 16);
                uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    if (firstU) {
        uuid.shift();
        return 'u' + uuid.join('');
    }
    else {
        return uuid.join('');
    }
}var _hoisted_1 = ["id"];
var script = /*#__PURE__*/ vue.defineComponent({
    __name: 'VueEzuikit',
    props: {
        playerId: { type: String, required: false, default: '' },
        url: { type: String, required: true },
        accessToken: { type: String, required: true },
        width: { type: Number, required: false, default: 600 },
        height: { type: Number, required: false, default: 400 },
        template: { type: String, required: false, default: 'simple' },
        plugin: { type: Array, required: false, default: function () { return ['talk']; } },
        autoPlay: { type: Boolean, required: false, default: true }
    },
    setup: function (__props, _a) {
        var __expose = _a.expose;
        var props = __props;
        var playerId = vue.ref('');
        vue.onMounted(function () {
            playerId.value = props.playerId || createUUID();
            if (props.autoPlay) {
                init();
            }
        });
        var player = vue.ref(null);
        /**
         * 初始化萤石云播放器
         */
        function init() {
            if (player.value)
                destroy();
            player.value = new EZUIKit.EZUIKitPlayer({
                id: playerId.value,
                accessToken: props.accessToken,
                url: props.url,
                template: props.template,
                plugin: props.plugin,
                width: props.width,
                height: props.height,
            });
        }
        /**
         * 播放
         */
        function play() {
            var playPromise = player.value.play();
            playPromise.then(function (data) {
                console.log('promise 获取 数据', data);
            });
        }
        /**
         * 停止
         */
        function stop() {
            var stopPromise = player.value.stop();
            stopPromise.then(function (data) {
                console.log('promise 获取 数据', data);
            });
        }
        /**
         * 获取基准时间
         */
        function getOSDTime() {
            var getOSDTimePromise = player.value.getOSDTime();
            getOSDTimePromise.then(function (data) {
                console.log('promise 获取 数据', data);
            });
        }
        /**
         * 截图
         */
        function capturePicture() {
            player.value.capturePicture("".concat(new Date().getTime()), function (data) {
                console.log('截图数据', data);
            });
        }
        /**
         * 开启声音
         */
        function openSound() {
            var openSoundPromise = player.value.openSound();
            openSoundPromise.then(function (data) {
                console.log('promise 获取 数据', data);
            });
        }
        /**
         * 关闭声音
         */
        function closeSound() {
            var openSoundPromise = player.value.closeSound();
            openSoundPromise.then(function (data) {
                console.log('promise 获取 数据', data);
            });
        }
        /**
         * 开始录制
         */
        function startSave() {
            var startSavePromise = player.value.startSave("".concat(new Date().getTime()));
            startSavePromise.then(function (data) {
                console.log('promise 获取 数据', data);
            });
        }
        /**
         * 结束录制
         */
        function stopSave() {
            var stopSavePromise = player.value.stopSave();
            stopSavePromise.then(function (data) {
                console.log('promise 获取 数据', data);
            });
        }
        /**
         * 开启对讲
         */
        function ezopenStartTalk() {
            player.value.startTalk();
        }
        /**
         * 关闭对讲
         */
        function ezopenStopTalk() {
            player.value.stopTalk();
        }
        /**
         * 全屏
         */
        function fullScreen() {
            player.value.fullScreen();
        }
        /**
         * 退出全屏
         */
        function cancelFullScreen() {
            player.value.cancelFullScreen();
        }
        /**
         * 销毁
         */
        function destroy() {
            var _a;
            player.value = null;
            (_a = document.getElementById(playerId.value)) === null || _a === void 0 ? void 0 : _a.remove();
        }
        __expose({
            player: player,
            init: init,
            play: play,
            stop: stop,
            getOSDTime: getOSDTime,
            capturePicture: capturePicture,
            openSound: openSound,
            closeSound: closeSound,
            startSave: startSave,
            stopSave: stopSave,
            ezopenStartTalk: ezopenStartTalk,
            ezopenStopTalk: ezopenStopTalk,
            fullScreen: fullScreen,
            cancelFullScreen: cancelFullScreen,
            destroy: destroy,
        });
        return function (_ctx, _cache) {
            return (vue.openBlock(), vue.createElementBlock("div", {
                class: "vue-ezuikit",
                id: playerId.value
            }, null, 8 /* PROPS */, _hoisted_1));
        };
    }
});script.__file = "src/components/VueEzuikit.vue";return script;}));