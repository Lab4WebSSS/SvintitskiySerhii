$(function(){
	// плавное перемещение страницы к нужному блоку
	$(".go").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

	$(window).scroll(function() {
        $('.purpose').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass("fadeInLeftBig");
            }
        });
	});

		$('#slider').slick(
		{
		  dots: true,
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 4,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		}
	  );	
})
