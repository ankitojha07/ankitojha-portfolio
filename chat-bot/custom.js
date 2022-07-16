$(document).ready(function () {
  $(".chat-icon").click(function (event) {
    $("chat-box").toggleClass("active");
  });
  $(".conv-form-wrapper").convform({ selectInputStyle: "disable" });
});
