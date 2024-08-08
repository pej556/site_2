
//ScrollGiveClass 호출
var sgc1 = new ScrollGiveClass("header",{
    baseline :100 //화면을 100px 내려가면 클래스가 부여되게함
});





//Swiper 플러그인 호출
const swiper1 = new Swiper('#main_view', {
    // Optional parameters
    wrapperClass:'slider', //wrapperClass를 slider로 바꿤
    slideClass:'view',

    

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });


