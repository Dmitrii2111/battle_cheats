$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});        
 
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
  
  $('.popup-open').click(function() {
    var classArr = $(this).attr('class').split(' ')
    $('.popup').addClass(classArr[1]);
    $('.popup-fade').fadeIn();
    return false;
  });
});