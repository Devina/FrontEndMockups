$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $(".navigation").toggleClass("nav-on");
  });

  function smoothScroll(element) {
    $("html, body").delay(200).animate({ scrollTop: $(element).offset().top }, 1000);
  }

  $("#scroll").on("click", function() {
    smoothScroll("#about");
  });

  $("#nav-first").on("click", function() {
    smoothScroll("#about");
  });

  $("#nav-second").on("click", function() {
    smoothScroll("#experience");
  });

  $("#nav-third").on("click", function() {
    smoothScroll("#portfolio");
  });

  $("#nav-fourth").on("click", function() {
    smoothScroll("#contact");
  });

  $("#up").on("click", function() {
    smoothScroll("#top_page");
  });
});
