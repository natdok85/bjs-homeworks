function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();    
    let d = new Date(birthday);    
    let diff = now - d;    
    age = diff / (3.154e+10);    
    if (age > 18) {
        return true
    };

    // код для задачи №1 писать здесь
};


function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    };

    let sound = animal.sound;
    return sound;
    // код для задачи №2 писать здесь
};

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        count += 1;
        sum += marks[i];
    };
    return Math.round(sum / count);
    // код для задачи №3 писать здесь
};