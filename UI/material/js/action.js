//Display a slide show
function reload() {
  var slides = document.getElementById("image-slides");
  var target = Math.round(Math.random(slides) * 4) + 1;
  slides.src = `material/images/${target}.png`;
}
// Display registration form and hide the rest
$("#form_register").on("shown.bs.collapse", function() {
  // do something…
  $("#form_login").collapse("hide");
  $("#form_reset").collapse("hide");
});
//Display login form and hide the rest
$("#form_login").on("shown.bs.collapse", function() {
  // do something…
  $("#form_register").collapse("hide");
  $("#form_reset").collapse("hide");
});
//Display the reset password form and hide the rest
$("#form_reset").on("shown.bs.collapse", function() {
  $("#form_login").collapse("hide");
  $("#form_register").collapse("hide");
});

let home_page = document.querySelector("#home_page");
let main_page = document.querySelector("#main_page");
let site_news = document.querySelector("#site_news");

// login
function login() {
  home_page.classList.add("d-none");
  if (main_page.classList.contains("d-none")) {
    main_page.classList.remove("d-none");
    site_news.classList.add("d-none");
  }
}
// logout
function Logout() {
  main_page.classList.add("d-none");
  if (home_page.classList.contains("d-none")) {
    home_page.classList.remove("d-none");
  }
}
