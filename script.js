var header = $('header')

$(window).scroll(function() {
  if($(this).scrollTop() > 50) {
    header.slideUp('fast')
  } else {
    header.slideDown('fast')
  }
})