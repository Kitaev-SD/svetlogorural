jQuery(document).ready(function($){
	var mainHeader = $('.cd-auto-hide-header'),
		secondaryNavigation = $('.cd-secondary-nav'),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();
	
	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
	});

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 ) 
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
	    if (previousTop - currentTop > scrollDelta) {
	    	//if scrolling up...
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	//if scrolling down...
	    	mainHeader.addClass('is-hidden');
	    }
	}

	function checkStickyNavigation(currentTop) {
		//secondary nav below intro section - sticky secondary nav
		var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
		
		if (previousTop >= currentTop ) {
	    	//if scrolling up... 
	    	if( currentTop < secondaryNavOffsetTop ) {
	    		//secondary nav is not fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('fixed slide-up');
	    		belowNavHeroContent.removeClass('secondary-nav-fixed');
	    	} else if( previousTop - currentTop > scrollDelta ) {
	    		//secondary nav is fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('slide-up').addClass('fixed'); 
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}
	    	
	    } else {
	    	//if scrolling down...	
	 	  	if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
	 	  		//hide primary nav
	    		mainHeader.addClass('is-hidden');
	    		secondaryNavigation.addClass('fixed slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	} else if( currentTop > secondaryNavOffsetTop ) {
	    		//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.addClass('fixed').removeClass('slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    }
	}

	$('#Phone').inputmask("+7 (999) 999-99-99");
	$('#Phone2').inputmask("+7 (999) 999-99-99");
	$('#foot-phone').inputmask("+7 (999) 999-99-99");
	$('#foot-phone-karier').inputmask("+7 (999) 999-99-99");
	
	let im_name = new Inputmask('a{1,20}[ a{1,20}][ a{1,20}]', {
		clearIncomplete: true,
		jitMasking: true,
    });
    im_name.mask($('#Name'));
    im_name.mask($('#Name2'));
    im_name.mask($('#foot-name'));
    im_name.mask($('#foot-name-karier'));
	
});

function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.body.appendChild(script);
}

setTimeout(addScript, 5000, '//code-ya.jivosite.com/widget/PThynoefnI');
setTimeout(addScript, 900, 'https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.5/jquery.inputmask.min.js');
setTimeout(addScript, 500, 'site/js/jquery.fancybox.min.js');
setTimeout(addScript, 500, 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js');
setTimeout(addScript, 500, 'site/js/popper.min.js');
setTimeout(addScript, 500, 'site/js/slick.js');
setTimeout(addScript, 700, 'site/js/wow.min.js');
setTimeout(addScript, 800, 'site/js/custom.js');