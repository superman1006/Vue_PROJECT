<!--
 * @Author: superman1006 1402788264@qq.com
 * @Date: 2022-11-19 11:01:30
 * @LastEditors: superman1006 1402788264@qq.com
 * @LastEditTime: 2022-11-19 12:46:38
 * @FilePath: \Vue_PROJECT\Vue3\Vue学习\26_单文件组件\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- <v 快捷键 -->
<template>
  <div>
    <MySchool></MySchool>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
// 引入组件
// import语句只能放在脚手架环境才可以使用，所以心啊在不可以直接显示页面
import MySchool from './MySchool.vue';
import MyStudent from './MyStudent.vue';
export default {
  name: 'App',
  components: {
    MySchool,
    MyStudent
  }
}
</script>