$(document).ready(function() {
  $(".click-first").click(function(e) {
    $(".click-first").addClass("hidden");
    $(".inner-box").removeClass("hidden");
    $(".top").addClass("off-first");
  });
  $(".click-second").click(function(e) {
    $(".click-second").addClass("hidden");
    $(".inner-box-second").removeClass("hidden");
    $(".bottom").addClass("off-second");
  });
});
