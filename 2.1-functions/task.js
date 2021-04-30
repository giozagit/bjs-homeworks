// function getSolutions( a, b, c ) {
    
//     let D = (b ** 2 - (4 * a * c));
//     let x1 = (-b / (2 * a));
//     let x2 = (-b - Math.sqrt(D)) / (2 * a);
    
//     if (D < 0) 
//     {
//         return  { D: D, roots: [] };;
//     }
//     if (D === 0) {
//         return { D: D, roots: [x1] };
//     }
//     if (D > 0) {
//         x1 = (-b + Math.sqrt(D)) / (2 * a);
//         return { D: D, roots: [x1, x2] };
//     }
// }


// function showSolutionsMessage( a, b, c ) {
    
//     let result = getSolutions( a, b, c );
   
//     console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
//     console.log(`Значение дискриминанта: ${result['D']}`);
//     if (result['D'] < 0) {
//         console.log('Уравнение не имеет вещественных корней');
//     }
//     if (result['D'] === 0) {
//         console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
//     }
//     if (result['D'] > 0) {
//         console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
//     }
// }

// showSolutionsMessage(2, 4, 2);




// function getAverageScore(data) {
//     let obj = {};
//     let aveOfData = 0;
//     for(let subject in data) {
//         if(data[subject].length>0){
//         aveOfData = getAverageMark(data[subject]);
//         obj[subject] = aveOfData;
//         }
//     }
//     let aveOfObj = 0;
//     for(let subject in obj) {
//         aveOfObj += obj[subject];
//     }
//     if(Object.keys(obj).length>0){
//     aveOfObj /= Object.keys(obj).length;
//     }
//     obj["average"] = aveOfObj;
//     return obj;
// }


// let grades = {  algebra: [2, 5, 3, 4, 4, 3],
//                 geometry: [5, 4, 3, 5, 4,],
//                 history:[4, 5, 5, 5, 4,]};



// getAverageScore(grades);

// function getAverageMark(marks) {
//     let aveOfMarks = 0;
//     for(let i = 0; i < marks.length; i++) {
//         aveOfMarks += marks[i];
//     }
//     aveOfMarks = aveOfMarks / marks.length;
//     return aveOfMarks;
// }


let data = {aaa: 0,
            bbb: 1}


function getPersonData(secretData) {
    let obj = {}
    obj['firstName'] = getDecodedValue(secretData['aaa']);
    obj['lastName'] = getDecodedValue(secretData['bbb']);
    return obj;
}

getPersonData(data);


function getDecodedValue(secret) {
    if(secret == 0) {
        return 'Родриго';
    } else {
        return 'Эмильо';
    }
}
