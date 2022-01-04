$(document).ready(function(){

  // kv
  $('.kv-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
   });

  //  promotion
   $('.pro-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
          settings: 'unslick',
        }
    ]
   });
   
  //  product
   $('.product-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          variableWidth: true
        }
      }
    ]
   });

  
  //평소에 모바일 메뉴가 안보이게 닫아줘 
  $('.select-list').hide();
  console.log('--hide');

  // 라벨 클릭 시 리스트가 빠르게 나타나게 해줘
  $('.select-label').on('click',function(){
  $('.select-list').slideToggle('fast');
  });

  $('.hamburger-menu').click(function(){
    $('.mob-gnb').toggleClass('active')
  });
  $(".hamburger-menu").click(function(){
    $(this).toggleClass("active");
  });

  $('.gnb .dep1 >a').click(function(e){
    if(this.hash) {
      e.preventDefault();
      
      var targetPos = $(this.hash).offset().top - 80;
      $('body,html').animate({'scrollTop' : targetPos});

      $('.hamburger-menu').toggleClass("active");
      $('.mob-gnb').toggleClass('active');
    } else {
      // href 값이 없는 부분도 toggleClass를 주고싶을 경우
      $('.hamburger-menu').toggleClass("active");
      $('.mob-gnb').toggleClass('active');
    }
    
  });

  $(window) .resize(function(){
    // 창 크기 변화 감지
    var windowidth = $( window ) .width();
    console.log('windowidth =' + windowidth + '입니다.');

    $('.pro-list').slick('resize');
  
  });

  // 리스트의 화살표가 이미지 정중앙으로 오게 높이값 계산 / 2 해주기
  $('.pro-list').on('setPosition',function(){
    var pmSlideHeight = $('.promotion .img-area').height();
    $('.promotion .slider .slick-arrow').css({'top' : pmSlideHeight / 2});
  });

  $('.product-list').on('setPosition',function(){
    var pdSlideHeight = $('.products .img-area').height();
    $('.products .slider .slick-arrow').css({'top' : pdSlideHeight / 2});
  });

});
