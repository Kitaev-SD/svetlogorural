/*menu*/
$(document).ready(function(){ 
	var touch 	= $('#touch-menu');
	var menu 	= $('.menu');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});

/*slider*/
jQuery(document).ready(function() {
	$(function() {
		$('.slider-header').slick({
			arrows: true,
			infinite: true,
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 10000,
			pauseOnHover: false,
			pauseOnFocus: false,
			prevArrow: '<button type="button" class="slick-prev-carousel">‹</button>',
			nextArrow: '<button type="button" class="slick-next-carousel">›</button>'
		});
		$('.slider-header').show();
	});
	$(function() {
			$('.slider-portfolio').slick({
				arrows: true,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplaySpeed: 10000,
				prevArrow: '<button type="button" class="slick-prev-carousel">‹</button>',
				nextArrow: '<button type="button" class="slick-next-carousel">›</button>',
				dots: true,
				centerMode: true,
				centerPadding: '300px',
				slidesToShow: 2,
				responsive: [{
					breakpoint: 1400,
					settings: {
						centerMode: true,
				        centerPadding: '200px',
				        slidesToShow: 2
					}
				}, {
					breakpoint: 992,
					settings: {
						centerMode: true,
						centerPadding: '120px',
						slidesToShow: 2
					}
				}, {
					breakpoint: 768,
					settings: {
						centerMode: true,
						centerPadding: '100px',
						slidesToShow: 1
					}
				}, {
					breakpoint: 578,
					settings: {
						centerMode: true,
						centerPadding: '70px',
						slidesToShow: 1
					}
				}, {
					breakpoint: 475,
					settings: {
						centerMode: true,
						centerPadding: '30px',
						slidesToShow: 1
					}
				}]
			});
			$('.slider-portfolio').show();
		});
		//карусель писем
		$(function() {
			$('.slider-letter').slick({
				arrows: true,
				infinite: true,
				slidesToShow: 5,
				slidesToScroll: 1,
				dots: true,
				prevArrow: '<button type="button" class="slick-prev-carousel">‹</button>',
				nextArrow: '<button type="button" class="slick-next-carousel">›</button>',
				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				}, {
					breakpoint: 868,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				}, {
					breakpoint: 689,
					settings: {
						centerMode: true,
						centerPadding: '80px',
						slidesToShow: 2
					}
				}, {
					breakpoint: 581,
					settings: {
						centerMode: true,
						centerPadding: '50px',
						slidesToShow: 2
					}
				}, {
					breakpoint: 411,
					settings: {
						centerMode: true,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]
			});
			$('.slider-letter').show();
		});
	
	// карусель с логотипами
		$(function() {
			$('.slider-clients').slick({
				arrows: false,
				infinite: true,
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: true,
				dots: true,
				autoplaySpeed: 1000,
				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 6
					}
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 6
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 5
					}
				}, {
					breakpoint: 576,
					settings: {
						slidesToShow: 4
					}
				}, {
					breakpoint: 475,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 373,
					settings: {
						slidesToShow: 2
					}
				}]
			});
			$('.slider-clients').show();
		});
	
	
});
/*foot_mobil*/
var acc = document.getElementsByClassName("acc_footer");
var i;
for(i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if(panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

//scroll to top
$(window).scroll(function() {
	if($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
	} else {
		$('.scrollup').fadeOut();
	}
});
$('.scrollup').click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 1000);
	return false;
});




$(function() {
	$(document).on("submit", "#contact-form-call", function(e) {
		e.preventDefault();
		var m_method = $(this).attr('method');
		var m_action = $(this).attr('action');
		var m_data = $(this).serialize();
		
		var stop = ['Вотсап', 'вотсап', 'Директ', 'директ', 'Дирeкт', 'дирeкт', 'Гугл', 'гугл', 'база', 'реклама', 'Яндekc', 'яндekc', 'по ccылке'];
        var str = $("#myModal_form").find('[name="name"]').val();
        
        for (var word in stop) {
            if (str.includes(stop[word])) {
                alert ('Ваше сообщение похоже на спам');
                return;
            } 
        }

		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			resetForm: 'true',
			success: function(result) {
				var data = $(result).find("#myModal_form").html();
				$("#myModal_form").html(data);
				ym(28216241,'reachGoal','FORM_1');
				console.log('contact-form-call');
			}
		});
	});
});

$(function() {
	$(document).on("submit", "#contact-form-zakaz", function(e) {
		e.preventDefault();
		var m_method = $(this).attr('method');
		var m_action = $(this).attr('action');
		var m_data = $(this).serialize();
		
		var stop = ['Вотсап', 'вотсап', 'Директ', 'директ', 'Дирeкт', 'дирeкт', 'Гугл', 'гугл', 'база', 'реклама', 'Яндekc', 'яндekc', 'по ccылке'];
        var str = $("#myModal_form_2").find('[name="name"]').val();
        
        for (var word in stop) {
            if (str.includes(stop[word])) {
                alert ('Ваше сообщение похоже на спам');
                return;
            } 
        }
		
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			resetForm: 'true',
			success: function(result) {
				var data = $(result).find("#myModal_form_2").html();
				$("#myModal_form_2").html(data);
				ym(28216241,'reachGoal','zakaz_produkt');
			}
		});
	});
});
$(function() {
	$(document).on("submit", "#contact-form-zakaz", function(e) {
		e.preventDefault();
		var m_method = $(this).attr('method');
		var m_action = $(this).attr('action');
		var m_data = $(this).serialize();
		
		var stop = ['Вотсап', 'вотсап', 'Директ', 'директ', 'Дирeкт', 'дирeкт', 'Гугл', 'гугл', 'база', 'реклама', 'Яндekc', 'яндekc', 'по ccылке'];
        var str = $("#myModal_form_3").find('[name="name"]').val();
        
        for (var word in stop) {
            if (str.includes(stop[word])) {
                alert ('Ваше сообщение похоже на спам');
                return;
            } 
        }
		
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			resetForm: 'true',
			success: function(result) {
				var data = $(result).find("#myModal_form_3").html();
				$("#myModal_form_3").html(data);
				ym(28216241,'reachGoal','zakaz_produkt');
			}
		});
	});
});

$(function() {
	$(document).on("submit", "#contact-form-foot", function(e) {
		
		var m_method = $(this).attr('method');
		var m_action = $(this).attr('action');
		var m_data = $(this).serialize();
		
		var stop = ['Вотсап', 'вотсап', 'Директ', 'директ', 'Дирeкт', 'дирeкт', 'Гугл', 'гугл', 'база', 'реклама', 'Яндekc', 'яндekc', 'по ccылке'];
        var str = $("#contact-form-foot").find('[name="name"]').val();
        
        for (var word in stop) {
            if (str.includes(stop[word])) {
                alert ('Ваше сообщение похоже на спам');
                e.preventDefault();
                return;
            } 
        }
		
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			resetForm: 'true',
			success: function(result) {
				var data = $(result).find("#myModal_form_3").html();
				$("#contact-form-foot").html(data);
				ym(28216241,'reachGoal','zakaz_produkt');
			}
		});
	});
});



//animate
 new WOW().init();