let sections = document.getElementsByClassName("section");
let progressBar = document.getElementById("nav-progress-bar");

for (let section of sections) {
  progressBar.innerHTML += `<span class="nav-progress-item"></span>`;
}

let progressDots = document.getElementsByClassName("nav-progress-item");

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.bottom >= (window.innerHeight - 30 || html.clientHeight - 30) &&
    rect.top < (window.innerHeight || html.clientHeight)
  );
}

window.addEventListener("scroll", function() {
  for (let progressDot of progressDots) {
    progressDot.className = "nav-progress-item";
  }
  for (let i = 0; i < sections.length; i++) {
    if (isInViewport(sections[i])) {
      progressDots[i].className = "nav-progress-item in-view";
    }
  }
});
