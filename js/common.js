// toggle

$(function(){
    $('.hd_inner .toggle').click(function(){
        $('.toggle i').css("opacity", "0")
        $('.toggle_menu').fadeToggle()
        $('.logo_img').attr("src", "./IMG/img/logo/logo_color.png")
        $('.toggle>span').css("color", "#19459d")
    })

    $('.tog_hd i').click(function(){
        $('.toggle_menu').fadeToggle()
        $('.logo_img').attr("src", "./IMG/img/logo/logo_white.png")
        $('.toggle i').css("opacity", "1")
    })
})

// scroll block

$(function(){
    $('.hd_inner .toggle').click(function(){
      $('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
      $('.toggle_menu').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지
      event.preventDefault();
      event.stopPropagation();
  
      return false;
      });
    })
  
    $('.tog_hd i').click(function(){
      $('html, body').css({'overflow': 'visible', 'height': '100%'});
      $('.toggle_menu').off('scroll touchmove mousewheel');
    })
  })

//   swiper

  var swiper = new Swiper(".mySwiper1", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });

  var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
