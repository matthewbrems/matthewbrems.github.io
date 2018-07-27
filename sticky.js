// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


//When I scroll down the page the, the page must

//2)The words in the middle must fade away and then disappear
//3)The nav options may need to lower 
//4 The logo in the middle gets smaller and drop down the page
//5 Once we reach desired thickness, nav must lock and everything scrolls under

//1.)

// let nav = document.getElementById('nav')
// let logo = document.getElementById('logo')
// let navText = document.getElementById('navText')
// let navList = document.getElementById('navList')


window.onscroll = parallax;


function navFormation() {
let nav = document.getElementById('nav')
let logo = document.getElementById('logo')
let navText = document.getElementById('navText')
let navList = document.getElementById('navList')
let page = window.pageYOffset;

//If the scroll is below 1 pixel then 
//the logo should drop by a pixel  

if(page > 0){
  logo.style.transform(translate)
}
}




function parallax(){
  var wScroll = $(window).scrollTop();
  console.log(wScroll)
  //Opacity of the center text
  $('#navText').css('opacity',1-(wScroll*0.009))
  
  
  
  //NEXT STEP: Lock postion of logo once down 
  // $('#logo').css('position',)

  if(wScroll >= 480) {
    // $('#navList').css('position', '')
    // $('.nav-container').css('position', 'fixed')
    $('.nav-container').addClass('fixed-nav')
  }
  else{
    // $('#navList').css('position', '')
    $('.nav-container').removeClass('fixed-nav')

  }
}

// $('.parallax--bg').css('background-position', 'center '+(wScroll*0.75) + 'px');
//   $('#showSynopsis').css('opacity',1-(wScroll*0.002));
//   $('.nav-elements').css('opacity',1-(wScroll*0.004));