/*
 * @Author: superman1006 1402788264@qq.com
 * @Date: 2023-04-18 00:00:32
 * @LastEditors: superman1006 1402788264@qq.com
 * @LastEditTime: 2023-04-18 00:00:53
 * @FilePath: \Vue_PROJECT\JavaScript\Web大作业\introduction.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
window.addEventListener("scroll", function () {
  var introSection = document.querySelector(".intro-section");
  var introInfo = document.querySelector(".intro-info");
  var introInfoPosition = introInfo.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if (introInfoPosition < screenPosition) {
    introInfo.style.opacity = "1";
  } else {
    introInfo.style.opacity = "0";
  }
});
