

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



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


