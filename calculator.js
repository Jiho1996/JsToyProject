let numOne = '';
let operator = '';
let numTwo = '';
const $result = document.querySelector('#result')
const $operator = document.querySelector('#operator')
document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
document.querySelector('#plus').addEventListener('click', onClickOperator);
// 함수자리인데 함수()이므로 함수 호출 결과가 저장. 함수 <-- 이 형태가 함수 그자체
document.querySelector('#minus').addEventListener('click', onClickOperator);
document.querySelector('#divide').addEventListener('click', onClickOperator);
document.querySelector('#multiply').addEventListener('click', onClickOperator);
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    numTwo = '';
    operator = '';
    $operator.value = '';
    $result.value = '';

})
document.querySelector('#calculate').addEventListener('click',calculate)

function onClickNumber(event){
    if (operator){
        numTwo += event.target.textContent;
        
        $result.value = numTwo
    }else{
        numOne += event.target.textContent;
        
        $result.value = numOne
    }

}

function onClickOperator(event){
    if (event.target.textContent == '-'){
        if (!numOne){
            console.log($result.value)
            $result.value += '-'
            numOne += '-'
            return
        }
        else if (operator && !numTwo){
            $result.value = '-'
            numTwo += '-'
            return
        }
    }
    if (numOne && numTwo){
        operator = event.target.textContent;
        $operator.value = operator;
        calculate();
        numOne = $result.value
        numTwo = '';
        
    }
    if (numOne && !numTwo){
        
        operator = event.target.textContent
        $operator.value = operator
        console.log(operator)
    }
    
}

function calculate(){
    console.log(operator)
    if (numTwo){
        numOne = parseInt(numOne)
        
        numTwo = parseInt(numTwo)
        //console.log(numOne, numTwo)
        switch (operator) {
            case '+':
              $result.value = numOne + numTwo;
              break;
            case '-':
              $result.value = numOne - numTwo;
              break;
            case 'x':
            $result.value = numOne * numTwo;
            break;
            case '/':
              $result.value = numOne / numTwo;
              break;
            default:
              break;
          }
        
    }
}


