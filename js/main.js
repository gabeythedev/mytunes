// Responsive Nav
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scolling 
$('.cf a').on('click', function(event) {
  if (this.has !== '') {
    event.preventDefault();
    
    const has = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().scrollTop
      },
      800,
      function() {
        window.location.hash = hash;
      }
    )
})