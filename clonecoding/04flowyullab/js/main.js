//햄버거 메뉴
const header = document.querySelector('header');

document.getElementById('ham_menu').addEventListener('click', function () {
    header.classList.toggle('on');
});

//메인 히어로
const mainSlide = new Swiper('.main_visual .swiper', {
    loop: true,
    autoplay: {
        display: 5500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.main_visual .right',
        prevEl: '.main_visual .left'
    }
});
const toggleBtn = document.querySelector('.btn_box span');
toggleBtn.addEventListener('click', function () {
    if (mainSlide.autoplay.running) {
        mainSlide.autoplay.stop();
        this.innerText = 'play_arrow';
    } else {
        //멈춘 상태면 다시 재생하고 아이콘을 일시정지 모양으로 바꿈니다
        mainSlide.autoplay.start();
        this.innerText = 'pause';
    }
});
const numEl = document.querySelector('.main_visual .pager .txt_box .num');
const totalEl = document.querySelector('.main_visual .pager .txt_box span:last-of-type');

//swiper는 loop를 쓰면 복제 슬라이드를 만듭니다.
//그래서 복제본을 빼고 진자 슬라이드만 세어야 전체 개수가 맞습니다.

const getTotal = () => mainSlide.slidesEl.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;

//화면에 현재 번호와 전체 개수를 적어주는 함수
const setPager = () => {
    //realIndex 0부터 시작하므로 화면에서는 1을 더해서 보여줍니다
    const current = mainSlide.realIndex + 1;
    numEl.textContent = String(current);
    totalEl.textContent - String(getTotal());
}
//처음 페이지가 열렸을때 번호를 한번 적어줍니다
setPager();

//슬라이드가 바뀔때마다 번호도 다시 바꿉니다
mainSlide.on('slideChange', setPager);


//공지 영역의 세로 슬라이드
const infoSlide = new Swiper('.article_top .slide .swiper',{
    direction: 'vartical',
    loop:true,
    autoplay: {
        display: 2500,
        disableOnInteraction: false,
    }
});