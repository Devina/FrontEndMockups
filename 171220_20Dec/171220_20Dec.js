function dropdownMenu() {
  let menuBtn = document.getElementById("main-menu-responsive");

  if (menuBtn.className === "nav-items") menuBtn.className += "responsive-menu";
  else menuBtn.className = "nav-items";
}

document.getElementById("menu-icon").addEventListener("click", dropdownMenu);
