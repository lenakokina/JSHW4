
   function getOperator(message) {
    let operator;
    do { 
      operator = prompt(message);
    }
    while (!isOperatorValid) 
    return operator;
   }

   function isOperatorValid(operator){
     return operator === "*" || operator === "/" || operator === "+" || operator === "-";
   }

   function getQuantityOperands(message) {
    let quantityNum = '';
    do {
      quantityNum = prompt(message);
    } 
      while (!isQuantityOperands(quantityNum));  
    return +quantityNum;
   }


   function isQuantityOperands(value) {
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
   
   function calcResult(validOperator, quantityOperands) {    
   for (let i = 0; i < quantityOperands; i++) {
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
   }

   let result = 0;
   let expression = '';
   let validOperator = getOperator('введите оператор для калькуляции: "+", "-", "*", "/" ');
   let quantityOperands = getQuantityOperands('Какое количество операндов будет участвовать в калькуляции (2, 3, 4, 5) ?');
   calcResult(validOperator, quantityOperands)  



  alert( `${expression} = ${result}`);
