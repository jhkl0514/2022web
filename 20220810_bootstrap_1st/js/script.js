$(".cont-2st .btn-group div").click(function(){
    let i = $(this).index();
    $(".cont-2st .btn-group div").removeClass("active");
    $(this).addClass("active");

    let $selector = $(this).attr("data-filter"); //필더값을 가져온다
    console.log($selector)

    $(".cont-2st .view").isotope({ //자동소트
        filter: $selector 
    })
})

window.onload = function(){ //window.onload = 똑같다 window.addEventlistener("load",function(){})  문서라 로드 될때.
    $(".cont-2st .btn-group div").eq(0).trigger("click") // trigger:앞에 선택자를 이벤트를 억지로 누를때 사용
}


$("#oslide1").owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    responsive:{
        0:{items:1},
        760:{items:4}
    }
})

$("#oslide2").owlCarousel({
    // loop:true,
    center:true,
    dots:true,
    nav:true,
    autoplay:true,
    margin:30,
    navText:['<i class="fa-solid fa-circle-chevron-left dots prve"></i>','<i class="fa-solid fa-circle-chevron-right dots next"></i>'],
    responsive:{
        0:{items:1},
        760:{items:2},
        990:{items:4}
    }
})

