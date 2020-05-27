//偵測在ul裡的li                on("click")才能偵測後來輸入的li，click() 只能目前
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
  // gray=rgb(128, 128, 128) rgb要空白
  // if ($(this).css("color") === "rgb(128, 128, 128)") {
  //   $(this).css({
  //     color: "black",
  //     textDecoration: "none",
  //   });
  // } else {
  //   $(this).css({
  //     color: "gray",
  //     textDecoration: "line-through",
  //   });
  // }
});
$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      //淡出並移除父元素
      $(this).remove();
    });
  e.stopPropagation(); //停止其他父元素冒泡(li ul body)
});
$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    //輸入Enter時

    var todoText = $(this).val(); //input值
    $(this).val(""); //清除input
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"
    ); //新增新的li   class的雙引號要改單引號
  }
});
$("#formToggle").click(function () {
  $("input[type='text']").fadeToggle();
});
