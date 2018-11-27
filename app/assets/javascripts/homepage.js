document.addEventListener('DOMContentLoaded', function() {

function l(x) {
  return console.log(x)
}

bannerFirstLine = document.getElementsByClassName("main-title-text-line")[0]
bannerSecondLine = document.getElementsByClassName("main-title-text-line")[1]
bannerThirdLine = document.getElementsByClassName("main-title-text-line")[2]

navbarComponent = document.getElementsByClassName("navbar-wagon")[0]

body = document.getElementsByTagName("body")[0]

//Navbar scroll solid-tranparent
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 715) {
    navbarComponent.classList.add("solid-navbar")
  } else {
    navbarComponent.classList.remove("solid-navbar")
  }
});

//Three title lines appear
setTimeout(function(){
  bannerFirstLine.classList.add("main-title-text-line-appear")
  setTimeout(function(){
    bannerSecondLine.classList.add("main-title-text-line-appear")
    setTimeout(function(){
      bannerThirdLine.classList.add("main-title-text-line-appear")
    }, 550);
  }, 300);
}, 300);




});
