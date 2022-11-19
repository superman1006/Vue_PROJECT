/*
 * @Author: superman1006 1402788264@qq.com
 * @Date: 2022-11-19 11:16:43
 * @LastEditors: superman1006 1402788264@qq.com
 * @LastEditTime: 2022-11-19 12:44:18
 * @FilePath: \Vue_PROJECT\Vue3\Vue学习\26_单文件组件\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import App from './App.vue'
const vm = new Vue({
  el: '#root',
  template: `<App></App>`,
  components: {
    App
  }
});