// ===== Scroll to Top ==== 

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

     

function returnTop() {
 
$('#topnav').animate({ scrollTop: "300px" });

}