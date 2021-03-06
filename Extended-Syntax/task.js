

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    "use strict";    
    let D = Math.pow(b, 2) - 4*a*c;
    if (D < 0) {
        return "Уравнение не имеет корней";        
    } else if (D == 0) {
        return (-b + Math.sqrt(D)) / 2*a;        
    } else {        
        return [(-b + Math.sqrt(D)) / 2*a, (-b - Math.sqrt(D)) / 2*a];
    };


    // код для задачи №1 писать здесь
    //return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){ 
   result = new Date().getFullYear() - dateOfBirthday.getFullYear();    
    if (result < 18) {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
        console.log(result);
        return result;
    } else {
        console.log(`Не желаете ли олд-фэшн, ${name}?`);
        console.log(result);
        return result;
    }
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {      
    if (marks.length > 5) {
        console.log("Оценок больше 5");
        marks = marks.slice(0, 5);       
    };
    let sum = 0; 
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        count += 1;
        sum += marks[i];        
    }
    return sum / count;
    
    
    // код для задачи №3 писать здесь
    //return averageMark;
};
