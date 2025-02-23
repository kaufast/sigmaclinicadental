var templateDoc;
(function($) {
    'use strict';

    // Preloader
    $(window).on('load', function() {
        $('.preloader').addClass('hidden');
        $('[data-popup="tooltip"]').tooltip();
    });
    $(".hamburger>.hamburger_btn").on('click', function() {
        $(".header .navigation").toggleClass('open');
        $(this).toggleClass('active');
    });
    // Mobile Menu
    $(".header .menu-item-has-children > a").on('click', function(e) {
        var submenu = $(this).next(".sub-menu");
        e.preventDefault();
        submenu.slideToggle(200);
    });
    // Team Social
    $(".team_share").on('click', function(e) {
        var teamsocial = $(this).next(".team_share + .social");
        e.preventDefault();
        teamsocial.slideToggle(200);
    });


       // Navigation
    $(document).ready(function () {
        $('.navigation .main-menu li.menu-item-has-children>a, .navigation .main-menu li.menu-item-has>a').on('click', function () {
          $(this).removeAttr('href');
          var element = $(this).parent('li');
          if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul.sub-menu').slideUp();
          } else {
            element.addClass('open');
            element.children('ul.sub-menu').slideDown();
            element.siblings('li').children('ul.sub-menu').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul.sub-menu').slideUp();
          }
        });
        $('.menu-item-has-children>a').append('<span class="arrow"></span>');
        $('.menu-item-has>a').append('<span class="arrow"></span>');
    });
    // 
    


    // Sticky Header
    var header = $(".can-sticky");
    var footer = $(".ft-sticky");
    var headerHeight = header.innerHeight();
    var FooterHeight = footer.innerHeight();

    function doSticky() {
        if (window.pageYOffset > headerHeight) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
        if (window.pageYOffset > FooterHeight) {
            footer.addClass("d-flex");
        } else {
            footer.removeClass("d-flex");
        }
    }
    doSticky();
    //On scroll events
    $(window).on('scroll', function() {
        doSticky();
    });
    if ($(".back-to-top").length) {
        $(".back-to-top").on("click", function() {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top,
                },
                1000
            );

            return false;
        });
    };
    $('.thm-btn .button_title').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='btn_letters'>$&</span>"));
    });
    var btnHover = document.querySelectorAll('.thm-btn');
    btnHover.forEach(function(btnHover) {
        btnHover.addEventListener('mouseenter', function() {
            var letter = btnHover.querySelectorAll('.btn_letters');
            anime.timeline({}).add({
                targets: letter,
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 750,
                delay: (el, i) => 50 * i
            });
        });
    });

// Progress-bar


    // Progress bars
     $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });



// FAQ

    $(document).ready(function(){
       $(".accordion").on("click", ".heading", function() {

       $(this).toggleClass("active").next().slideToggle();

       $(".contents").not($(this).next()).slideUp(300);
                    
       $(this).siblings().removeClass("active");
       });
      });
           
// Tab Gallery
 $(document).ready(function () {
            $(".list").click(function () {

                let value = $(this).attr("data-filter");

                if (value == "all") {
                    $(".items").show(1000);
                }
                else {
                    $(".items").not("." + value).hide(1000);
                    $(".items").filter("." + value).show(1000);
                }

                $(".list").removeClass("active");
                $(this).addClass("active");
            });
            $('.items-container').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,

                    preload: [0, 2],

                    navigateByImgClick: true,

                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

                    tPrev: 'Previous (Left arrow key)', 
                    tNext: 'Next (Right arrow key)', 
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
                },
                mainClass: 'mfp-with-zoom',
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        });


// Modal 
$(document).ready(function() {
// get video source from data-src button
var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);
// autoplay video on modal load  
$('#myModal').on('shown.bs.modal', function (e) {
// youtube iframe configuration and settings
$("#video").attr('src',$videoSrc + "?autoplay=0&rel=0&controls=1&loop=1&modestbranding=0"); 
})
// stop playing the youtube video when modal closed
$('#myModal').on('hide.bs.modal', function (e) {
    // stop video
    $("#video").attr('src',$videoSrc); 
}) 
});
    // Current year
    var d = new Date();
    document.getElementById("year").innerHTML = d.getFullYear();


    
    // testimonial_slider
    $('.testimonial-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        dotsClass: "slick-dots d-flex",
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // Partner Slider

$('.partner-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows:false,
  dots:false,
  slidesToShow: 6,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

// service detail slider
    $('.services-details-image-slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }]
    });
    // team slider 
    $('.team-slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        dotsClass: "slick-dots d-flex",
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});
// Why Choose
    $('.why_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        dotsClass: "slick-dots d-flex",
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // service_slider
    $('.service_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        dotsClass: "slick-dots d-flex",
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    templateDoc = {
        init: function() {
            this.mainBanner();
        },
        // Main Banner
        mainBanner() {
            var sliderContent = $('.banner_slider'),
                countStatus = $('.slider-count');

            sliderContent.slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                speed: 1000,
                dots: true,
                dotsClass: "slick-dots container",
                appendDots: $('.slick-slider-dots'),
                arrows: true
            });

            sliderContent.on('init reInit afterChange', function(
                event,
                slick,
                currentSlide,
                nextSlide
            ) {
                if (!slick.$dots) {
                    return;
                }
                var i = (currentSlide ? currentSlide : 0) + 1;
                var statusText = i > 10 ? i : '0' + i;
                countStatus.html(
                    '<span class="current">' +
                    statusText +
                    '</span>' +
                    '<small>/' + slick.$dots[0].children.length + '</small>'
                );
            });
        },
    };
    $(document).ready(function() {
        templateDoc.init();
    });
})(jQuery);