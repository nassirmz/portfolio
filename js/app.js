$(document).ready(function() {
  smoothScroll();
});

function smoothScroll() {
  $("nav a").click(function(event) {
    event.preventDefault();
    var sectionId = event.currentTarget.id + "Section";
    $("html body").animate({
      scrollTop: $("#" + sectionId).offset().top
    }, 1500);
  });
}