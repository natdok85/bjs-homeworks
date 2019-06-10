'use strict';
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  console.log('Первоначальный взнос ' + contribution)

//дата вводится в виде строки, нужно сделать из нее объект Date
//создать новый объект Date

  let d = new Date(date);
  console.log('введенная дата ' + d);

//все остальные данные - тоже строки; нужно их преобразовать в числа. isNuN не работает, как нужно, в случае с пустыми строками (пробелами) 
//- преобразует их в числа, но зато более-менее понятно, как вывести сообщение
//если использовать isNumeric, то непонятно, как выводить сообщение, и contribution все равно не преобразуется в число
  function isNumeric(percent, contribution, amount) {
    return !isNaN(parseFloat(percent, contribution, amount)) && isFinite(percent, contribution, amount);
  };
isNumeric(percent, contribution, amount); 

// if (isNaN(percent)) {
//     alert('Параметр процентная ставка содержит неправильное значение ' + percent);
// };
// if (isNaN(contribution)) {
//     alert('Параметр первоначальный взнос содержит неправильное значение ' + contribution );
// };

// if (isNaN(amount)) {
//     alert('Параметр сумма кредита содержит неправильное значение ' +  amount);
// };

//let returnSum = (amount - contribution); //непонятно, зачем это делать, сумма кредита - это уже сумма, которую нужно вернуть банку, только без процентов


  //считаем срок кредита
  let now = new Date();  //так получим текущую дату
  console.log('текущая дата' + now);
  
  let termMs = d - now;  //результат получается в миллисекундах
  console.log('разница в датах в миллисекундах ' + termMs);
  let n = Math.ceil(termMs / (1000 * 3600 * 24 * 30.5)); //срок кредита в месяцах
  console.log('разница в датах в месяцах ' + n);

  let P = percent / 1200; //считаем 1/12 процентной ставки из формулы 

  let monthlyPayment = Math.round(amount * (P + P / ((Math.pow((1 + P), n) - 1))));
  console.log('Ежемесячный платеж ' + monthlyPayment);
  
  let totalAmount = +contribution + monthlyPayment * n; //это вся сумма, которую заплатит клиент. Приходится преобразовывать contribution в число унарным плюсом
  console.log('Всего клиент заплатит ' + totalAmount);
  return totalAmount;

    // код для задачи №1 писать здесь
    //return totalAmount;
};



function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name == false) {
        name = 'Аноним';
    };   
    
    let greeting = `Привет, мир! Меня зовут ${name}`;
    
    console.log(greeting);
    return greeting;
    // код для задачи №2 писать здесь
    //return greeting;
};