<template>
  <div style="margin-bottom: 10px">
    <button @click="ezuikitRef.init">初始化</button>
    <button @click="ezuikitRef.play">播放</button>
    <button @click="ezuikitRef.stop">停止</button>
    <button @click="ezuikitRef.openSound">开启声音</button>
    <button @click="ezuikitRef.closeSound">关闭声音</button>
    <button @click="ezuikitRef.startSave">开始录制</button>
    <button @click="ezuikitRef.stopSave">结束录制</button>
    <button @click="ezuikitRef.capturePicture">截图</button>
    <button @click="ezuikitRef.fullScreen">全屏</button>
    <button @click="ezuikitRef.cancelFullScreen">退出全屏</button>
    <button @click="ezuikitRef.getOSDTime">获取基准时间</button>
    <button @click="ezuikitRef.ezopenStartTalk">开始对讲</button>
    <button @click="ezuikitRef.ezopenStopTalk">结束对讲</button>
    <button @click="ezuikitRef.destroy">销毁</button>
  </div>
  <VueEzuikit ref="ezuikitRef" :url="url" :access-token="accessToken"></VueEzuikit>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// 打包前
import VueEzuikit from '../src/main'

// 打包后
// import VueEzuikit from '../dist/vue-ezuikit.es'

const ezuikitRef = ref(null)

const deviceSerial = '427734222'
const channelNo = '0'
const url = ref(`ezopen://open.ys7.com/${deviceSerial}/${channelNo}.live`)
const accessToken = ref('at.7jrcjmna8qnqg8d3dgnzs87m4v2dme3l-32enpqgusd-1jvdfe4-uxo15ik0s')
</script>
