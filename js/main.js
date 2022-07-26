

// 검색창 요소에서 search 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클맄하면 실행
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});


// 검색창 요소 내부 실제 input 요소에 Focus 되면 실행
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});


// 검색창 요소 내부 실제 input 요소에 Focus 해제되면 실행
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute('placeholder', '');
});

//--------------------------------------------------------------------------//
// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
console.log( badgeEl);
window.addEventListener('scroll', function()
{
  console.log( window.scrollY);
  if( this.window.scrollY > 500)
  {
    // 배지 요소 숨기기!!
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });

    // 상단으로 이동 버튼 보이기
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });
  }
  else
  {
    // 배지 요소 보이기!!
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });

    // 상단으로 이동 버튼 숨기기
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});
//--------------------------------------------------------------------------//

//--------------------------------------------------------------------------//
const fadeEls = document.querySelectorAll('.visual .fade-in');

// 반복해서 애니메이션 처리
fadeEls.forEach( function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay : (index + 1 ) * .7,
    opacity : 1
  });
});


//--------------------------------------------------------------------------//
//    하단 공지사항 슬라이드(Swiper)
//--------------------------------------------------------------------------//

new Swiper('.notice .swiper', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});

//--------------------------------------------------------------------------//
//    프로모션 슬라이드(Swiper)
//--------------------------------------------------------------------------//

new Swiper('.promotion .swiper', {
  autoplay      : true,
  loop          : true,
  slidesPerView : 3,    // 한번에 보여줄 슬라이드 갯수
  spaceBetween  : 10,   // 슬라이드 사이 여백
  centeredSlides: true, //  1번 슬라이드 가운데 보이기

  // 페이지 번호 사용
  pagination : {
    el : '.promotion .swiper-pagination',
    clickable : true
  },

  // 슬라이드 이전/다음 버튼 사용
  navigation : {
    prevEl : '.promotion .swiper-button-prev',
    nextEl : '.promotion .swiper-button-next'
  }
});

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
promotionToggleBtn.addEventListener('click', function(){
  if(promotionEl.classList.contains('hide')){
    promotionEl.classList.remove('hide');
  }  else{
    promotionEl.classList.add('hide');
  }
});

gsap.to( '.floating1', 1.5, {
  delay : 1,    // 지연 시간 설정
  y : 27,       // transform: translateY(수치);와 같음,  수직으로 얼마나 움직일지 결정.
  repeat : -1,  // 반복,  -1은 무한반복
  yoyo : true,  // 한번 재생된 애니메이션을 다시 뒤로 재생.
  ease : Power1.easeInOut // Easing 함수 적용, Power1은 함수 종류 중 하나이다.
});

gsap.to( '.floating2', 2 ,{
  delay : .5,
  y : 30,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

gsap.to( '.floating3', 2.5 ,{
  delay : 1.5,
  y : 200,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});


// 스크롤 매직으로...
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({                  // 감시할 장면(Scene)을 추가
      triggerElement: spyEl,  // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8         // 화면에 80%가 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo( new ScrollMagic.Controller());
});


/*  AWARDS  슬라이드  */
new Swiper('.awards .swiper', {
  autoplay : true,
  loop: true,
  spaceBetween : 30,
  slidesPerView: 5,
  navigation : {
    prevEl:'.awards .swiper-button-prev',
    nextEl:'.awards .swiper-button-next'
  }
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


toTopEl.addEventListener('click', function() {
  gsap.to(window, .6, {
    scrollTo:0
  });
});
