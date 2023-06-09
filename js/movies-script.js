$(document).ready(function () {
  $(".carousel-right-slide-btn").click(function () {

    const carousel=$(this).siblings(".carousel-container");


    if (screen.width >= 1200) {
      if ($(carousel).scrollLeft() === 0) {
        carousel.animate({ scrollLeft: "+=" + (1200 + 30) }); //1200 - with of 4 carousel item &&  30 - gap between 3 carousel items
        $(carousel).siblings(".carousel-left-slide-btn").css("display", "flex").animate({opacity: 1}, 400);

      } else {
        carousel.animate({ scrollLeft: "+=" + (1200 + 40) });  //1200 - with of 4 carousel item &&  40 - gap between 4 carousel items
      }
    } else if (screen.width >= 700) {
      if ($(carousel).scrollLeft() === 0) {
        carousel.animate({ scrollLeft: "+=" + (600 + 10) }); 
        $(carousel).siblings(".carousel-left-slide-btn").css("display", "flex").animate({opacity: 1}, 400);
      } else {
        carousel.animate({ scrollLeft: "+=" + (600 + 20) }); 
      }
    } else if (screen.width >= 300) {
      if ($(carousel).scrollLeft() === 0) {
        carousel.animate({ scrollLeft: "+=" + (300 + 0) }); 
        $(carousel).siblings(".carousel-left-slide-btn").css("display", "flex").animate({opacity: 1}, 400);
      } else {
        carousel.animate({ scrollLeft: "+=" + (300 + 10) }); 
      }
    }
  });



  $(".carousel-left-slide-btn").click(function (){

    const carousel=$(this).siblings(".carousel-container");
    let leftSlideBtn=$(this);

    if (window.innerWidth >= 1200) {
       
      carousel.animate({ scrollLeft: "-=" + 1240 }).promise().done(function () {
        setTimeout(function () {
          if(carousel.scrollLeft()<1){
           
            $(leftSlideBtn).animate({ opacity: 0 }, 350, function () {
              $(leftSlideBtn).css("display", "none");
            });

          }
        }, 500)});
    } else if (window.innerWidth >= 700) {
      carousel.animate({ scrollLeft: "-=" + 620 }).promise().done(function () {
        setTimeout(function () {
          if(carousel.scrollLeft()<1){
           
            $(leftSlideBtn).animate({ opacity: 0 }, 350, function () {
              $(leftSlideBtn).css("display", "none");
            });

          }
        }, 500)});
    } else if (window.innerWidth >= 300) {
      carousel.animate({ scrollLeft: "-=" + 310 }).promise().done(function () {
        setTimeout(function () {
          if(carousel.scrollLeft()<1){
           
            $(leftSlideBtn).animate({ opacity: 0 }, 350, function () {
              $(leftSlideBtn).css("display", "none");
            });

          }
        }, 500)});
    }

  });


  $(".join-now-btn").click(function()
  {
    window.location.href="index.html";
  });

  $(".red-btn").click(function()
  {
    window.location.href="index.html";
  });

  $(".black-btn").click(function()
  {
    window.location.href="index.html";
  });



  $(document).ready(function() {
    setTimeout(function(){
      $("#container").css("display","none");

      $(".header").css('display', 'flex').animate({ opacity: 1 }, 1500);
      $(".main").css('display', 'block').animate({ opacity: 1 }, 1500);
      $(".footer").css('display', 'block').animate({ opacity: 1 }, 1500);
      $('body').fadeIn(1500, function() {$(this).css('backgroundColor', '#181818');});

    }, 4800);
  });


});
