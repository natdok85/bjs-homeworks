"use strict";
function getSolutions(a,b,c){
    let D = Math.pow(b, 2) - 4*a*c;
    let X1 = 0;   
    let X2 = 0; 
    if (D < 0) {
        return {D: D};              
} else if (D == 0) {   
    X1 = -b / (2*a); 
    return {roots: [X1], D: D};    
} else {
    X1 = (-b + Math.sqrt(D)) / (2*a);
    X2 = (-b - Math.sqrt(D)) / (2*a);
    return {roots: [X1, X2], D: D};      
};
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x2 + ${b}x + ${c}`);
    console.log('Значение дискриминанта: ' + result.D);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');        
    } else if (result.D == 0) {
        console.log('Уравнение имеет один корень X1 = ' + result.roots);
    } else {
        console.log('Уравнение имеет два корня. X1 = ' + result.roots[0] + ', X2 = ' + result.roots[1]);
    };
}

showSolutionsMessage(7, 20, -3);

//задача 2

let data = [
    {name: 'algebra', marks: [2, 4, 5, 2, 3, 4]}, 
    {name: 'geometry', marks: [2, 4, 5]},
    {name: 'russian', marks: [3, 3, 4, 5]},
    {name: 'physics', marks: [5, 5]},
    {name: 'music', marks: [2, 2, 6]}
];
//вспомогательная функция, чтобы вычислить среднее значение массива 
function getAverageMark(marks) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        count +=1;
        sum += marks[i];
    };
    return sum / count;
}

function getAverageScore(data) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
      count +=1;
      sum += getAverageMark(data.marks[i]);
  };
  return sum / count;
}


















