// console.log("ok");

$(".itemWrap>li").click(function(){
    console.log($(this).index());
    let i = $(this).index();
    $("#images>p").hide();
    $("#images>p").eq(i).show();
})

let current = 0;
$(".right").click(function(){
    current++;    
    if(current == 3) {current = 2}
    console.log(current);
    // let value = current * -760;
    // // $(".itemWrap").css(".left",value);
    // $(".itemWrap").stop().animate({"left":value},300)
    view(current);

})

$(".left").click(function(){
    current--;
    if(current < 0) {current = 0}
    // let value = current * -760; 
    // $(".itemWrap").stop().animate({"left":value},300)

    view(current);
})

function view(current){
    let value = current * -760;
    $(".itemWrap").css(".left",value);
    $(".itemWrap").stop().animate({"left":value},300)
}

// // 여기서 시작해서 해봐라
// let current = 0;

// $(".right").click(function(){
//     current++;
//     viewCurrent(current)

// })

// $(".left").click(function(){
//     current--;
//     viewCurrent(current)
    
// })

// function viewCurrent(count){
//     console.log(count) //콘솔로그 변수선언
// }