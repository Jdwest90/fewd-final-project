$(document).ready(function() {

  $('.navlink').on('click', function(e){
    
    var hash = $(this).attr('href');
     $('html,body').animate({
       scrollTop: $(hash).offset().top
     }, 600);
    
    return false;
  });

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
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











// $(document).ready(function(){

// 	event.preventDefault();

// 	$("#portfolio").hide();
// 	$("#aboutus").hide();
// 	$("#contactme").hide();


// 	$(".work").click(function(){

// 		$(".about").hide();
// 		$(".contact").hide();
// 		$(".home").hide();
// 		$("#portfolio").show();

// 		$(".mainmenu").removeClass();
// 		$(".sectionheader").addClass();

// 	})

// 	$(".about").click(function(){

// 		$(".work").hide();
// 		$(".contact").hide();
// 		$(".home").hide();
// 		$("#aboutus").show();

// 		$(".mainmenu").removeClass();
// 		$(".sectionheader").addClass();
// 	})

// 	$(".contact").click(function(){

// 		$(".about").hide();
// 		$(".work").hide();
// 		$(".home").hide()
// 		$("#contactme").show();

// 		$(".mainmenu").removeClass();
// 		$(".sectionheader").addClass()
// 	})

// 	$(".home").click(function(){

// 		$(".work").show();
// 		$(".about").show();
// 		$(".contact").show();


// 	})

// });