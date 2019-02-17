

// CODE POUR gerer disparition/apparation du menu navigation smartphone

var navHide = document.getElementById("navigation");

function navFunction() {

	var x = window.matchMedia("(max-width: 767px)");

	if (x.matches) {
	 
		  if (navHide.style.display === "flex") {
		    navHide.style.display = "none";

		  } else {
		    navHide.style.display = "flex";
		  }
	};
};


// CODE POUR gerer apparation des menus déroulants smartphone
var mobMenus = document.getElementById("mobileLinks");

function mobileFunction() {

  if (mobMenus.style.display === "block") {
    mobMenus.style.display = "none";

  } else {
    mobMenus.style.display = "block";
    navHide.style.display = "none";
  }
};

function hideFunction() {
 	
    mobMenus.style.display = "none";

 }

// CODE POUR LA FLECHE QUI REMONTE EN HAUT DE PAGE

ScrollToTop=function() {
  var s = $(window).scrollTop();
  if (s > 250) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
 
  $('.scrollup').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 0);
      return false;
  });
}
 
StopAnimation=function() {
  $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
    $('html, body').stop();
  });
}
 
 // Permet de créer l'animation pour remonter en haut de page 
$(window).scroll(function() {
  ScrollToTop();
  StopAnimation();

});