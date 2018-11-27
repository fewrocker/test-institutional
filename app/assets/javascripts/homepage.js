document.addEventListener('DOMContentLoaded', function() {

function l(x) {
  return console.log(x)
}

bannerFirstLine = document.getElementsByClassName("main-title-text-line")[0]
bannerSecondLine = document.getElementsByClassName("main-title-text-line")[1]
bannerThirdLine = document.getElementsByClassName("main-title-text-line")[2]

solutionCards = document.getElementsByClassName("solutions-card")

teamMembersAll = document.getElementsByClassName("team-description-flex")
teamMembersFirstRow = []
teamMembersFirstRow.push(teamMembersAll[0])
teamMembersFirstRow.push(teamMembersAll[1])
teamMembersSecondRow = []
teamMembersSecondRow.push(teamMembersAll[2])
teamMembersSecondRow.push(teamMembersAll[3])

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

//Scroll solutions scroll-in
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 260) {
    Array.prototype.forEach.call(solutionCards, card => {
      card.classList.add("come-in");
    });
  }
});

//Scroll team scroll-in first row
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 780) {
    Array.prototype.forEach.call(teamMembersFirstRow, card => {
      card.classList.add("come-in");
    });
  }
});

//Scroll team scroll-in second row
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 1080) {
    Array.prototype.forEach.call(teamMembersSecondRow, card => {
      card.classList.add("come-in");
    });
  }
});


});
