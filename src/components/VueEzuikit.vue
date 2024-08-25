<template>
  <div class="vue-ezuikit" :id="playerId"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import EZUIKit from 'ezuikit-js'
import { createUUID } from '../utils/roc'

interface IProps {
  playerId?: string
  // ezopen://open.ys7.com/${设备序列号}/${通道号}.live
  // ezopen://open.ys7.com/${设备序列号}/${通道号}.hd.live
  // ezopen://open.ys7.com/${设备序列号}/${通道号}.rec?begin=yyyyMMddhhmmss
  url: string
  accessToken: string
  width?: number
  height?: number
  // simple: 极简版; pcLive: pc直播; pcRec: pc回放; mobileLive: 移动端直播; mobileRec: 移动端回放;security: 安防版; voice: 语音版;
  template?: 'simple' | 'pcLive' | 'pcRec' | 'mobileLive' | 'mobileRec' | 'security' | 'voice'
  // // 加载插件，talk-对讲
  plugin?: ['talk']
  autoPlay?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  playerId: '',
  width: 600,
  height: 400,
  template: 'simple',
  plugin: () => ['talk'],
  autoPlay: true,
})

const playerId = ref('')
onMounted(() => {
  playerId.value = props.playerId || createUUID()
  if (props.autoPlay) {
    init()
  }
})

const player: Ref<EZUIKit.EZUIKitPlayer | null> = ref(null)

/**
 * 初始化萤石云播放器
 */
function init() {
  if (player.value) destroy()
  player.value = new EZUIKit.EZUIKitPlayer({
    id: playerId.value,
    accessToken: props.accessToken,
    url: props.url,
    template: props.template,
    plugin: props.plugin,
    width: props.width,
    height: props.height,
  })
}

/**
 * 播放
 */
function play() {
  const playPromise = player.value.play()
  playPromise.then((data) => {
    console.log('promise 获取 数据', data)
  })
}

/**
 * 停止
 */
function stop() {
  const stopPromise = player.value.stop()
  stopPromise.then((data) => {
    console.log('promise 获取 数据', data)
  })
}

/**
 * 获取基准时间
 */
function getOSDTime() {
  const getOSDTimePromise = player.value.getOSDTime()
  getOSDTimePromise.then((data) => {
    console.log('promise 获取 数据', data)
  })
}

/**
 * 截图
 */
function capturePicture() {
  player.value.capturePicture(`${new Date().getTime()}`, (data) => {
    console.log('截图数据', data)
  })
}

/**
 * 开启声音
 */
function openSound() {
  const openSoundPromise = player.value.openSound()
  openSoundPromise.then((data) => {
    console.log('promise 获取 数据', data)
  })
}

/**
 * 关闭声音
 */
function closeSound() {
  const openSoundPromise = player.value.closeSound()
  openSoundPromise.then((data) => {
    console.log('promise 获取 数据', data)
  })
}

/**
 * 开始录制
 */
function startSave() {
  const startSavePromise = player.value.startSave(`${new Date().getTime()}`)
  startSavePromise.then((data) => {
    console.log('promise 获取 数据', data)
  })
}

/**
 * 结束录制
 */
function stopSave() {
  const stopSavePromise = player.value.stopSave()
  stopSavePromise.then((data) => {
    console.log('promise 获取 数据', data)
  })
}

/**
 * 开启对讲
 */
function ezopenStartTalk() {
  player.value.startTalk()
}

/**
 * 关闭对讲
 */
function ezopenStopTalk() {
  player.value.stopTalk()
}

/**
 * 全屏
 */
function fullScreen() {
  player.value.fullScreen()
}

/**
 * 退出全屏
 */
function cancelFullScreen() {
  player.value.cancelFullScreen()
}

/**
 * 销毁
 */
function destroy() {
  player.value = null
  document.getElementById(playerId.value)?.remove()
}

defineExpose({
  player,
  init,
  play,
  stop,
  getOSDTime,
  capturePicture,
  openSound,
  closeSound,
  startSave,
  stopSave,
  ezopenStartTalk,
  ezopenStopTalk,
  fullScreen,
  cancelFullScreen,
  destroy,
})
</script>

<style lang="scss"></style>
