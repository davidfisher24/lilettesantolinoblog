window.onload = function(){

  // CAROUSEL MODIFICATIONS

  $('#myCarousel').carousel({
    interval: 10000
  });

  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });

  // GALLERY IMAGE MODIFICATIONS

  $('.project-title').each(function(index,el){
    var fontSize = parseInt($(el).css('font-size'))/2;
    $(el).css({'margin-top' : '-' + fontSize + "px", 'opacity' : 1});
  });
}