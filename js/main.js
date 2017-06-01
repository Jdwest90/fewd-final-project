$(document).ready(function() {

  $('.navlink').on('click', function(e){  //when you click on nav links
    
    var hash = $(this).attr('href');      //it will scroll to the section
     $('html,body').animate({
       scrollTop: $(hash).offset().top
     }, 600);
    
    return false;
  });

$(window).scroll(function() {

  event.preventDefault();

  var scrollFade = $(window).scrollTop();

  $('.mainmenu').css({'opacity':(400-scrollFade) /400}); // when page is scrolled down to each 

  $('#work').css({'opacity':(1500-scrollFade) /400});   // section the opacity will change to   

  $('#about').css({'opacity':(2400-scrollFade) /400}); // to 1


    if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 500px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }

});


$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});



});

 












