$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    }
  });
  const box = document.querySelector('section').getBoundingClientRect().top;
  window.onscroll = () => {
      if (window.scrollY >= (box -1)){
          $('#up-btn').css('display','block');
      }
      else{
        $('#up-btn').css('display','none');
      }
  }
  $( "#section-toggle-btn" ).click(function() {
    $( ".top-rated-img-container" ).slideToggle( "slow" );
  });