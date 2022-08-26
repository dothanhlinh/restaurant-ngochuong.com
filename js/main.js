//slider-address
$('.items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:480,
        settings: {
          slidesToShow: 1,
          arrows:false,
        }
      }
    ]
  });


  //slider-address
$('.items_news_about').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:480,
      settings: {
        slidesToShow: 1,
        arrows:false,
      }
    }
  ]
});