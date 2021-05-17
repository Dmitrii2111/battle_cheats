$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.main_slide',
    centerMode: true
  });
  $(".slider .img").on("click", function() {
    const index = $(this).attr("data-slick-index");
    $(".slider").slick("slickGoTo", index);
  });
  $('.main_slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.previos',
    nextArrow: $('.next'),
    arrows: true,
    asNavFor: '.slider',
  })
});

$(document).ready(function() {
  var $toggleButton = $('.toggle-button'),
      $menuWrap = $('.menu-wrap');
      $menuLink = $('.menu-mobile-link')
  $toggleButton.on('click', function() {
      $(this).toggleClass('button-open');
      $menuWrap.toggleClass('menu-show');
  });
  $menuLink.on('click', function() {
    $toggleButton.toggleClass('button-open');
    $menuWrap.toggleClass('menu-show');
  })
});

$(document).ready(function($) {       
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
      var classArr = $('.popup').attr('class').split(' ')
      $('.popup').removeClass(classArr[1]);
			$('.popup-fade').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
      var classArr = $('.popup').attr('class').split(' ')
      $('.popup').removeClass(classArr[1]);
			$(this).fadeOut();					
		}
	});	

  // Открытие по клику
  $('.img_main').click(function() {
    var classArr = $(this).attr('class').split(' ')
    $('.popup').addClass(classArr[1]);
    $('.popup-fade').fadeIn();
    return false;
  });
});


$(document).ready(function() {
  $('#toggle').on('click', '.btn',function() {
    $(this).addClass('primary').siblings().removeClass('primary')
    if($(this).attr('id') === 'localWebSite') {
      $('.payment-link').prop('href', 'confirm.html')
    } else {
      $('.payment-link').prop('href', 'https://webref.ru')
    }
    if($(this).attr('href') != undefined && $(this).attr('href') != '') {
      console.log('work')
      var el = $(this)
      var dest = el.attr('href')
      console.log(dest)
      $('html').animate({
        scrollTop:
        $(dest).offset().top
      }, 500);
    }
    return false
  })
})

