<!--
 * @Author: superman1006 1402788264@qq.com
 * @Date: 2022-11-10 17:09:50
 * @LastEditors: superman1006 1402788264@qq.com
 * @LastEditTime: 2022-11-11 09:49:55
 * @FilePath: \Vue_PROJECT\Vue3\vue3_study\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>setup和ref语法</div>
  <h1>{{ count }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      count: 0, //属性
    };
  },
});
</script>

