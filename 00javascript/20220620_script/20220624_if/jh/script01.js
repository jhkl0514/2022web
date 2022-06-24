// window.prompt("연결완료")
// var userInput = prompt("가위,바위,보를 입력하세요");
// console.log(userInput)
// if(userInput != "가위" && userInput != "바위" && userInput != "보"){
//     alert("가위,바위,보 중 하나를 입력하시오")
// }else{
//     var comInput = "가위";
    
//     if(userInput == "가위"){
//         alert("비겼네요. 다음기회에")
//     }
//     if(userInput == "바위"){
//         alert("당신이 이겼네요. ^^")
//     }
//     if(userInput == "보"){
//         alert("컴퓨터가 이겼습니다. ^^")
//     }


// var num = Math.floor(Math.random()*10); // 0 ~ 9사이값을 구함
// console.log(num)

// var comInput=""
// if(num < 3){
//     comInput = "가위";
// }else if(num < 6){
//     comInput = "바위";
// }else{
//     comInput = "보"
// }
// console.log(comInput)

// Math.random() 난수(0~1값)
// Math.floor() 소수점 버림



var userInput = prompt("가위,바위,보를 입력하세요");

if(userInput != "가위" && userInput != "바위" && userInput != "보"){
    alert("가위,바위,보 중 하나를 입력하시오")
}else{
    //가위,바위, 보를 넣으면 실행
    var num = Math.floor(Math.random()*10); // 0 - 9 사이값을 구함
    //Math.random() 난수(0~1값)
    //Math.floor()  소수점 버림
    console.log(num)

    var comInput="";
    var result="";

    //comInput
    if(num < 3){
        comInput = "가위";
    }else if(num < 6){
        comInput = "바위";
    }else{
        comInput = "보";
    }

    //result
    if(userInput == "가위"){
        if(comInput == "가위"){
            result = "비김";
        }else if(comInput == "바위"){
            result = "컴이 이겼습니다."
        }else{
            result = "내가 이겼습니다."
        }
    }else if(userInput == "바위"){
        if(comInput == "가위"){
            result = "내가 이겼습니다.";
        }else if(comInput == "바위"){
            result = "비김"
        }else{
            result = "컴이 이겼습니다."
        }
    }else{ // 여긴 보입니다.
        if(comInput == "가위"){
            result = "컴이 이겼습니다.";
        }else if(comInput == "바위"){
            result = "내가 이겼습니다."
        }else{
            result = "비김"
        }

    }


    console.log("내꺼 : " + userInput)
    console.log("컴 : " + comInput)
    console.log("결과 : " + result)
 

}

 
    

    







// var num = Math.floor(Math.random()*10); // 0 ~ 9사이값을 구함
// console.log(num)

// var comInput=""
// if(num < 3){
//     comInput = "가위";
// }else if(num < 6){
//     comInput = "바위";
// }else{
//     comInput = "보"
// }
// console.log(comInput)

