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

$(".view .vPopup").magnificPopup({
    type:"image",
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
})

console.log(window.innerHeight); //this = window (this.scrollY) innerHeight: 보이는 화면길이를 만나면 올라온다 )
const lazyLoad = document.querySelectorAll(".lazy-load"); //배열로 객체로 사용.
window.addEventListener("scroll",function(){
    lazyLoad.forEach(function(item){ //item lazLoadu = []
        // console.log(item);
        const rect = item.getBoundingClientRect().top;
        console.log(rect);
        if(rect <= window.innerHeight){
            item.classList.add("fade")
        }
    })
   
})

