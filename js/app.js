$(document).ready(function() {
  smoothScroll();
  stickyNav();
});

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

//animation on scroll

function animateOnScroll() {
  var windowPos = $(window).scrollTop();
  $('.animate:not(.animated)').each(function () {
    var $this = $this,
    offsetTop = $this.offset().top;
    if(windowPos >offsetTop) {
      if($this.data("timeout")) {
        window.setTimeout(function() {
          $this.addClass("animated " + $this.data("animation"));
        }, parseInt($this.data("timeout"), 10));
      } else {
        $this.addClass("animated " + $this.data("animation"));
      }
    }
  })
}