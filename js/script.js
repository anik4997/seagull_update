$('.center_slick').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    // dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3,
          variableWidth: true
        }
      },
      {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 3,
        variableWidth: true
      }
    },
      {
        // breakpoint: 768,
        // settings: {
        //   arrows: false,
        //   centerMode: true,
        //   centerPadding: '40px',
        //   slidesToShow: 3
        // }
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1,
          // variableWidth: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1,
          variableWidth: true
        }
      }
    ]
  });
