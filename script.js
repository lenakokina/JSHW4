
   function getOperator(message) {
    let operator;
    do { 
      operator = prompt(message);
    }
    while (operator != '+' && operator != '-' && operator != '*' && operator != '/') 
    return operator;
   }


   function getQuantityNum(message) {
    let quantityNum = '';
    do {
      quantityNum = prompt(message);
    } 
      while (!isQuantityNum(quantityNum));  
    return +quantityNum;
   }


   function isQuantityNum(value) {
    return !isNaN(value) && (value < 6 && value > 1);
   } 


   function getOperand(index) {
     let answer; 
    do {
      answer = +prompt(`число ${index}`);
     }
      while (!isOperandValid(answer));
      return answer;
   }


   function isOperandValid(num) {
     return !isNaN(num);
   }

   function calculate(operator, a, b) {
     switch(operator) {
       case '+': return a + b;
       case '-': return a - b;
       case '*': return a * b;
       case '/': return a / b;
     }
   }
   

   let result = 0;
   let expression = '';
   let validOperator = getOperator('введите оператор для калькуляции: "+", "-", "*", "/" ');
   let quantityNum = getQuantityNum('Какое количество операндов будет участвовать в калькуляции (2, 3, 4, 5) ?');
   
   for (let i = 0; i < quantityNum; i++) {
    let operand = getOperand(i + 1);
    if(i === 0) {
      result = operand;
      expression = operand;
    }
    else {
      result = calculate(validOperator, result, operand);
      expression += (` ${validOperator} ${operand}`);
    }
   }

  alert( `${expression} = ${result}`);

