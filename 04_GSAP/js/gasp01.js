document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)


    //1.기본 to/from/fromto
    //1)to:지금 상태-> 목표상태
    gsap.to('.box_to', {
        x: 200, //x축으로 200px 이동
        duration: 2, //2초동안 실행
        ease: "power2.out",
    })
    //2) from: 어디서 등장할래? (처음에 x:->)
    gsap.from('.box_from', {
        x: -200,
        opacity: 0.2,
        duration: 1.5,
    })

    gsap.fromTo('.box_from_to', {
        scale: 0,
    }, {
        scale: 1.2,
        rotate: 360,
        duration: 1.5,
    })

    //2) 옵션 6총사 : 버튼 클릭 이벤트
    document.getElementById('btn_run').addEventListener('click', () => {
        gsap.to('.dot', {
            x: 400,
            duration: 2,
            delay: 0.2, //0.2초 쉬고 출발
            repeat: 1, //1번 반복 (총2번 실행) , 무한반복(-1), 반복없음(0) :기본값
            yoyo: true, //animation-direction:alternate 처럼 되돌아오기
            ease: "bounce.out",//속도 곡선
        });
    });

    /* 3. stagger + ScrollTrigger */
    //같은 셀렉터로 여러 요소가 선택될때 (NodeList, HTMLCollection,배열형태)
    //stagger : 단일 요소에는 의미없음
    gsap.from('.chips li', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15, //요소들이 0.15초 간격으로 순서대로 실행
    })

});//end