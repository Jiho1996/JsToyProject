const number = parseInt(prompt('몇 명이 참가하나요?'))
const $order = document.querySelector('#order');
const $word = document.querySelector('#word');
const $input = document.querySelector('input');
const $btn = document.querySelector('button');
const $wrong = document.querySelector('#wrong');

let newWord;
let word;
let order = 1
let defeatCount = new Array(number)

if (number){
    for (let i = 0; i < number; i++){
        defeatCount[i] = 3
    }
    console.log(defeatCount)

    function next(){
        word = newWord;
        $word.textContent = word
        $input.value = ''
        order++;
        if (order > number){order = 1}
        $order.textContent = order;
    }

    /*function enterKey(){
        if (window.event.keyCode == 13){
            $btn.addEventListener('click',onClickBtn)
        }
    }*/

    const onClickBtn = function(){
        console.log(newWord);
        $input.focus()
        if (newWord.length == 3){
            next()
            $wrong.textContent = '';
        }
        else {
            defeatCount[order-1]--;
            $wrong.textContent = "세글자만 입력해주세요. 남은 기회 :"+defeatCount[order-1]
            if (defeatCount[order-1] < 0){
                alert(order+'번째 사용자님이 패배하셨습니다.')
            }
        }
    
    }

    
    $btn.addEventListener('click',onClickBtn)
    $input.addEventListener('input',function(event){
        newWord = event.target.value
    });
}




