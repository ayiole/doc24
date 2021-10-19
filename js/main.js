$(function(){
    $('.header__slider').slick({
        autoplay: true,
        arrows: false,
        dots: true, 
        responsive: [
            {
              breakpoint: 551,
              settings: {
                dots: false, 
              }
            }
          ],
    });

    $('.spec__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 731,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ],
    })

    
});