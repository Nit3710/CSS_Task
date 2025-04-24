$(document).ready(function () {
    $("#hamburger").click(function () {
      $(".menu").toggleClass("active");
      $(".open, .close").toggle();
    });
  });
  