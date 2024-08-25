# vue-ezuikit

萤石云 ezuikit JS SDK vue 组件

## 安装

`npm install vue-ezuikit ezuikit-js@7.6.8`

## 使用

```html
<template>
  <VueEzuikit ref="ezuikitRef" :url="url" :access-token="accessToken"></VueEzuikit>
</template>

<script setup>
import { ref } from 'vue'
import VueEzuikit from 'vue-ezuikit'

const ezuikitRef = ref(null)
// 播放器实例,可调用萤石云提供的实例方法
// ezuikitRef.value.player

// 以下参数需对接请求接口获取
const deviceSerial = '427734222'
const channelNo = '0'
const url = ref(`ezopen://open.ys7.com/${deviceSerial}/${channelNo}.live`)
const accessToken = ref('at.7jrcjmna8qnqg8d3dgnzs87m4v2dme3l-32enpqgusd-1jvdfe4-uxo15ik0s')
</script>
```

## 属性
| 属性 | 类型 | 是否必传 | 说明 |
| --- | --- | -- | -- |
| url | string | 是 |  ezopen://open.ys7.com/${设备序列号}/${通道号}.live。萤石云视频url地址 |
| accessToken | string | 是 |  访问token |
| playerId | string | 否 | 播放器id 默认：随机字符串 |
| width | number | 否 |  播放器宽度 默认：600 |
| height | number | 否 |  播放器高度 默认：400 |
| template | 'simple'、'pcLive'、'pcRec'、'mobileLive'、'mobileRec'、'security'、'voice' | 否 |  simple: 极简版; pcLive: pc直播; pcRec: pc回放; mobileLive: 移动端直播; mobileRec: 移动端回放;security: 安防版; voice: 语音版 默认：simple |
| plugin | ['talk'] | 否 |  talk-对讲 |
| autoPlay | boolean | 否 |  是否自动播放 默认：true |

## 外部属性&方法

| 方法名 | 说明 |
| --- | --- |
| player | 播放器实例属性 |
| init | 初始化 |
| play | 播放 |
| stop | 停止 |
| getOSDTime | 获取基准时间 |
| capturePicture | 截图 |
| openSound | 开启声音 |
| closeSound | 关闭声音 |
| startSave | 开始录制 |
| stopSave | 结束录制 |
| ezopenStartTalk | 开启对讲 |
| ezopenStopTalk | 关闭对讲 |
| fullScreen | 全屏 |
| cancelFullScreen | 退出全屏 |
| destroy | 销毁 |