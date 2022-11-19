<!--
 * @Author: superman1006 1402788264@qq.com
 * @Date: 2022-11-19 10:45:44
 * @LastEditors: superman1006 1402788264@qq.com
 * @LastEditTime: 2022-11-19 10:59:55
 * @FilePath: \Vue_PROJECT\Vue3\Vue学习\26_单文件组件\Student.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 组件的结构 -->
  <div>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data () {
    return {
      name: "chen-lv",
      age: 19,
    };
  },
};
</script>
