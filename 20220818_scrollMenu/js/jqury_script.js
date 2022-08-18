
let oneTop = $("#v01").offset().top; //절대좌표
let twoTop = $("#v02").offset().top;
let threeTop = $("#v03").offset().top;

// $(".menuWrap >a").eq(0).click(function(e){
//     e.preventDefault();
//     $(".menuWrap > a").removeClass("active");
//     $(this).addClass("active");
//     $("html,body").stop().animate({scrollTop:oneTop})
// })
// $(".menuWrap >a").eq(1).click(function(e){
//     e.preventDefault();
//     $(".menuWrap > a").removeClass("active");
//     $(this).addClass("active");
//     $("html,body").stop().animate({scrollTop:twoTop})
// })
// $(".menuWrap >a").eq(2).click(function(e){
//     e.preventDefault();
//     $(".menuWrap > a").removeClass("active");
//     $(this).addClass("active");
//     $("html,body").stop().animate({scrollTop:threeTop})
// })

$(".menuWrap > a").click(function(e){
    e.preventDefault();
    // $(".menuWrap>a").removeClass("active");
    // $(this).addClass("active");
    let i = $(this).index();
    let st = $(".scene").eq(i).offset().top;
    $("html,body").stop().animate({scrollTop:st});

})

$(window).scroll(function(){
    // let scrollY = $(window).scrollTop();
    let scrollY = pageYOffset;
    console.log(scrollY);
})

if(oneTop <= scrollY){
    $(".menuWrap a").removeClass("active").eq(0).addClass("acive");    
}
if(twoTop <= scrollY){
    $(".menuWrap a").removeClass("active").eq(1).addClass("acive");    
}
if(threeTop <= scrollY){
    $(".menuWrap a").removeClass("active").eq(2).addClass("acive");    
}