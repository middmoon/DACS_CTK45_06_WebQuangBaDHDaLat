// 

(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Travel portfolio page
	
	$(".travel").on('click', function () {
		$("body").addClass("travel-on");
	});
	$(".travel-close").on('click', function () {
		$("body").removeClass("travel-on");
	});

	
	//Wildlife portfolio page
	
	$(".wildlife").on('click', function () {
		$("body").addClass("wildlife-on");
	});
	$(".wildlife-close").on('click', function () {
		$("body").removeClass("wildlife-on");
	});

	
	//Nature portfolio page
	
	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
	});

	
})(jQuery);
// 
$(document).ready(function() {

	var curPage = 1;
	var numOfPages = $(".skw-page").length;
	var animTime = 1000;
	var scrolling = false;
	var pgPrefix = ".skw-page-";
  
	function pagination() {
	  scrolling = true;
  
	  $(pgPrefix + curPage).removeClass("inactive").addClass("active");
	  $(pgPrefix + (curPage - 1)).addClass("inactive");
	  $(pgPrefix + (curPage + 1)).removeClass("active");
  
	  setTimeout(function() {
		scrolling = false;
	  }, animTime);
	};
  
	function navigateUp() {
	  if (curPage === 1) return;
	  curPage--;
	  pagination();
	};
  
	function navigateDown() {
	  if (curPage === numOfPages) return;
	  curPage++;
	  pagination();
	};
  
	$(document).on("mousewheel DOMMouseScroll", function(e) {
	  if (scrolling) return;
	  if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
		navigateUp();
	  } else { 
		navigateDown();
	  }
	});
  
	$(document).on("keydown", function(e) {
	  if (scrolling) return;
	  if (e.which === 38) {
		navigateUp();
	  } else if (e.which === 40) {
		navigateDown();
	  }
	});
  
  });
///////////////////////////////////////////////////////////////////////////////////////////////////////   

$(document).ready(function () {
	const $app = $('.app');
	const $img = $('.app__img');
	const $pageNav1 = $('.pages__item--1');
	const $pageNav2 = $('.pages__item--2');
	let animation = true;
	let curSlide = 1;
	let scrolledUp, nextSlide;
  
	let pagination = function (slide, target) {
	  animation = true;
	  if (target === undefined) {
		nextSlide = scrolledUp ? slide - 1 : slide + 1;
	  } else {
		nextSlide = target;
	  }
  
	  $('.pages__item--' + nextSlide).addClass('page__item-active');
	  $('.pages__item--' + slide).removeClass('page__item-active');
  
	  $app.toggleClass('active');
	  setTimeout(function () {
		animation = false;
	  }, 3000);
	};
  
	let navigateDown = function () {
	  if (curSlide > 1) return;
	  scrolledUp = false;
	  pagination(curSlide);
	  curSlide++;
	};
  
	let navigateUp = function () {
	  if (curSlide === 1) return;
	  scrolledUp = true;
	  pagination(curSlide);
	  curSlide--;
	};
  
	setTimeout(function () {
	  $app.addClass('initial');
	}, 1500);
  
	setTimeout(function () {
	  animation = false;
	}, 4500);
  
	$(document).on('mousewheel DOMMouseScroll', function (e) {
	  var delta = e.originalEvent.wheelDelta;
	  if (animation) return;
	  if (delta > 0 || e.originalEvent.detail < 0) {
		navigateUp();
	  } else {
		navigateDown();
	  }
	});
  
	$(document).on("click", ".pages__item:not(.page__item-active)", function () {
	  if (animation) return;
	  let target = +$(this).attr('data-target');
	  pagination(curSlide, target);
	  curSlide = target;
	});
  });
//  ////////////////////////////////////////////////////////////////////////////////////////////////// 
var initialSlide = $('.slides-container [data-order="1"]');
var initalSelected = $('.slide-navigation__txt [data-order="1"]');
var mq_medium = window.matchMedia( '(min-width: 860px)' );
var mq_big = window.matchMedia( '(min-width: 1200px)' );


function activate_slide(order){
    
  var unactiveSlide = $('.slide.active');
  var activeSlide = $('.slides-container [data-order="'+order+'"]');
  
  if( !(activeSlide.hasClass('active')) ){
      slide_in(activeSlide);
      slide_out(unactiveSlide);
  }
}

function slide_in(slide) {
  
  var _this = slide;
  
  animation_in(slide);
  _this.addClass('active');
  TweenMax.to(_this, 1, {autoAlpha:1}, '-=1');
  
}

function slide_out(slide){
  
  var _this = slide;
  
  _this.css( 'z-index', '2' );
  _this.removeClass('active');
  TweenMax.to(_this, 1, {autoAlpha:0, onComplete: removeZ});
  
  function removeZ(){
    _this.css( 'z-index', '1' );
  }  
  
  animation_out(slide);
}

function animation_in(slide){
  
  var title = slide.find('h1');
  var subtitle = $(slide).find('h2');
  var text = $(slide).find('p');
  var button = $(slide).find('button');
  var image = $(slide).find('img');
  
  TweenMax.fromTo(title, 0.6,{autoAlpha:0, x:100}, {autoAlpha:0.6, x:0, ease: Power2.easeOut});
  TweenMax.fromTo(subtitle, 0.5,{autoAlpha:0, x:-200}, {autoAlpha:1, x:0, ease: Power2.easeOut},'-0.1');
  TweenMax.fromTo(text, 0.8,{autoAlpha:0, x:50}, {autoAlpha:1, x:0, ease: Power2.easeOut});
  TweenMax.fromTo(button, 0.5,{autoAlpha:0 }, {autoAlpha:1});
  TweenMax.to(image, 0, {autoAlpha:1,scale:1});
}

function animation_out(slide){
  
  var title = slide.find('h1');
  var subtitle = $(slide).find('h2');
  var text = $(slide).find('p');
  var button = $(slide).find('button');
  var image = $(slide).find('img');
  
  TweenMax.to(title, 0.6, {autoAlpha:0, x:0});
  TweenMax.to(subtitle, 0.5, {autoAlpha:0, x:200});
  TweenMax.to(text, 0.5,{autoAlpha:0});
  TweenMax.to(button, 0.5,{autoAlpha:0});
  TweenMax.to(image, 1, {scale:1.1});
  
}

$('.slide-navigation__txt span').on('click', function(){
  
  var _this = $(this);
  var order = _this.data('order');
  var spans = $('.slide-navigation__txt span');
  var current = $('.active').data('order');
  
  spans.removeClass('active');
  _this.addClass('active');
  activate_slide(order); 
  stagger_squares(order, current);
});

function stagger_squares(order, current) {
  var mq = 0.7;
  var moveY;
  var squares = $('.slide-navigation__squares .square');
  var staggerTime = -0.12;
  
  if( order < current ) {
    staggerTime = staggerTime * -1; 
  }
  
  if( mq_medium.matches) { mq = 1 }
  if( mq_big.matches) { mq = 1.3 }
  
    
  
  moveY = (order-1) * (15 * mq );
  TweenMax.staggerTo(squares, 0.1, {y: moveY}, staggerTime);
  
}



$(document).ready(function() {
  
  initialSlide.addClass('active');
  initalSelected.addClass('active');
  TweenMax.to(initialSlide, 0.5, {autoAlpha:1});
  
});
// 
$(window).load(function() {
	$('.post-card').hover(function() {
	  $(this).find('.description').stop().animate({
		height: "toggle",
		opacity: "toggle"
	  }, 300);
	});
  });
//   
