var userInput = window.prompt("가위, 바위, 보를 입력하세요")

if(userInput !="가위" && userInput !="바위" && userInput !="보"){
    alert("가위, 바위, 보 중 하나를 입력하세요")
}else{
    var num = Math.floor(Math.random()*10);
    console.log(num)

    var comInput=""
    var result=""
}

if(num < 3){
    comInput = "가위"
}else if(num < 6){
    comInput = "바위"
}else{
    comInput = "보"
}

if(userInput == "가위"){
    if(comInput == "가위"){
        result="비김";
    }else if(comInput =="바위"){
        result="컴이 이겼음";
    }else{
        result="내가 이겼음"
    }
}else if(userInput == "바위"){
    if(comInput == "가위"){
        result="내가 이겼음"
    }else if(comInput == "바위"){
        result="비김"
    }else{
        result = "컴이 이겼습니다."
    }

}else {

}

console.log("내꺼 : " + userInput)
console.log("컴 : " + comInput)
console.log("결과 : " + result)