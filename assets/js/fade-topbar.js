$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('#topnav').css({
    opacity: function() {
      var elementHeight = $(this).height();
                console.log(scrollTop/1000);
        return scrollTop/1000
     //return (1 - (elementHeight - scrollTop) / scrollTop);
    }
  });
});
