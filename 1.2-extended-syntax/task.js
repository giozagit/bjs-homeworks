"use strict"

function getResult(a,b,c){

    let D = b**2 - (4*a*c);
    if(D < 0){
        return [];
    } else if(D == 0){
        let x = -b / (2 * a);
        return [x];
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return [x1, x2];
    }
}

function getAverageMark(marks){
    if(marks.length == 0){
        return 0;
    }
    if(marks.length > 5){
        alert('количество оценок больше  5');
        marks.splice(5, marks.length - 5);
    }
        let sum = 0;
    for(let i = 0; i < marks.length; i++){
        sum = sum + marks[i];
    }
    return sum / marks.length;
}
    
    


function askDrink(name,dateOfBirthday){


    let birth = dateOfBirthday.getFullYear();
    let today = new Date();
    let year = today.getFullYear()
    if((year - birth) > 18){
        return `Не желаете ли олд-фэшн,${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
}