$(document).ready(function () {
  $(".nav-item").hover(function () {
    $(this).addClass("active-nav-item").siblings().removeClass("active-nav-item");
  });
});
