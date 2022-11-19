<!--
 * @Author: superman1006 1402788264@qq.com
 * @Date: 2022-11-19 10:26:07
 * @LastEditors: superman1006 1402788264@qq.com
 * @LastEditTime: 2022-11-19 10:35:21
 * @FilePath: \Vue_PROJECT\Vue3\Vue学习\26_单文件组件\school.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>{{schoolName}}</h2>
    <h2>{{address}}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码
const school = Vue.extend({
  data () {
    return {
      schoolName: '华南师范大学',
      address: '佛山南海'
    }
  }
})
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: aquamarine;
}
</style>

