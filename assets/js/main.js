(function ($) {
  "use strict";
  // Mobile menu control js
  $(".menu-control-btn").on("click", function () {
    $(".navbar-collapse, .mobile-menu-overlay").addClass("open");
  });
  $(".menu-close-btn, .mobile-menu-overlay").on("click", function () {
    $(".navbar-collapse, .mobile-menu-overlay").removeClass("open");
  });

  // Parallax scroll effect js
  document.querySelectorAll(".move-with-cursor").forEach((a) => {
    document.addEventListener("mousemove", function (e) {
      var t = e.clientX,
        e = e.clientY;
      (a.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"),
        (a.style.transform = `translate(${0.01 * t}px, ${0.01 * e}px) rotate(${
          0.01 * (t + e)
        }deg)`);
    });
  });

  /* Odometer Activeate js */
  $(document).ready(function () {
    $(".odometer").appear(function () {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  });

  // Testimonial slider js
  $(".client-feedback-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: true,
    nextArrow: '<i class="arrow arrow-next fas fa-arrow-left"></i>',
    prevArrow: '<i class="arrow arrow-prev fas fa-arrow-right"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
})(jQuery);
