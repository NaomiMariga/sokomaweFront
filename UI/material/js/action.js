
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
// display electronics submenu
$("#electronics").on("shown.bs.collapse", function(){
  $("#living_room").collapse("hide");
  $("#kitchen_ware").collapse("hide");
});
// display living room submenu
$("#living_room").on("shown.bs.collapse", function(){
  $("#electronics").collapse("hide");
  $("#kitchen_ware").collapse("hide");
});
// display kithen ware submenu
$("#kitchen_ware").on("shown.bs.collapse", function(){
  $("#electronics").collapse("hide");
  $("#living_room").collapse("hide");
});
let home_page = document.querySelector("#home_page");
let main_page = document.querySelector("#main_page");
let site_news = document.querySelector("#site_news");
let home_header = document.querySelector("#home_header");
let main_header = document.querySelector("#main_header");

function registration(){
  let fname = document.querySelector('#fname').value;
  let surname = document.querySelector('#surname').value;
  let id = document.querySelector('#id').value;
  let phone = document.querySelector('#phone').value;
  let email = document.querySelector('#email').value;
  let username = document.querySelector('#username').value;
  let password = document.querySelector('#password').value;
  let elem = document.querySelector('#element');
  console.log(password);
  $.ajax({
    type:"POST",
    url:"https://sokopoa.herokuapp.com/registration",
    data:{
      fname:fname,
      surname:surname,
      id:id,
      phone:phone,
      email:email,
      username:username,
      password:password
    },
    datatype:"json",
    success:function(response){
      if (response.success === true){
        window.alert(response.message);
        console.log(response.message);
        $('#form_login').collapse("show");
      } else{
        console.log(response.message);
        fname = " ";
        surname = "";
        id = "";
        phone = "";
        email = "";
        username = "";
        password = " ";
      }
    },
    error: function (error) {
      window.alert("An error occurred" + error);
      console.log(error);
  }
  });
};
// login
function login() {
  let email = document.querySelector('#loginEmail');
  let password = document.querySelector('#loginPass');
  $.ajax({
    type: "POST",
    url: "https://sokopoa.herokuapp.com/login",
    data: {
      email:email.value,
      password:password.value
    },
    datatype: "json",
    success: function (response) {
      if (response.success === true) {
        console.log(response.message.message);
        home_header.classList.add("d-none");
        home_page.classList.add("d-none");
        site_news.classList.add("d-none");
        main_header.classList.remove("d-none");
        main_page.classList.remove("d-none");
       
        userid = response.message.userid;
        usertoken = response.message.token;

        storeUserid = sessionStorage.setItem("userid", userid);
        storeToken = sessionStorage.setItem("usertoken", usertoken);
      } else {
        console.log(response.message);
        email.value = "";
        password.value = "";
      }
    },
    error: function (error) {
      console.log("an error ocured" + error);
    }
  });
}
// logout
function Logout() {
  main_page.classList.add("d-none");
  main_header.classList.add("d-none");
  home_page.classList.remove("d-none");
  site_news.classList.remove("d-none");
  home_header.classList.remove("d-none");
 
  
}
