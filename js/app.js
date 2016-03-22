$(document).ready(function() {
  smoothScroll();
  stickyNav();
  $(window).scroll(animateOnScroll);
});

//sticky nav bar on scroll
function stickyNav() {
  var nav = $("nav ul");
  var pos = nav.position();
  var secondPageHeight = $("#portfolioSection").offset().top;
  $(window).scroll(function() {
    var windowPos = $(window).scrollTop();
    if(windowPos >=secondPageHeight) {
      nav.addClass("fixedTop");
    } else {
      nav.removeClass("fixedTop");
    }
  })
}

//smooth scrolling 
function smoothScroll() {
  $("nav a").click(function(event) {
    event.preventDefault();
    var sectionId = event.currentTarget.id + "Section";
    $("html body").animate({

      scrollTop: $("#" + sectionId).offset().top
    }, 1500);
  });
}



//animation on scroll

function animateOnScroll() {
  var windowTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var windowBottom = windowTop + windowHeight;
  $('.animate:not(.animated)').each(function() {
    var $this = $(this),
    $thisTop = $this.offset().top,
    $thisHeight = $this.outerHeight(),
    $thisBottom = $thisTop + $thisHeight;
    // if(windowPos >=offsetTop) {
    //   if($this.data("timeout")) {
    //     window.setTimeout(function() {
    //      $this.addClass("animated " + $this.data("animation")); 
    //     }, parseInt($this.data("timeout"), 10));
    //   } else {
    //     $this.removeClass("animated " + $this.data("animation"));
    //   }
    // }
    if(($thisBottom >= windowTop) && ($thisTop <=windowBottom)) {
      $this.addClass("animated " + $this.data("animation"));
    } else {
      $this.removeClass("animated " + $this.data("animation"));
    }
  })
}




