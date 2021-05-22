// class PrintEditionItem {
//     constructor(name, releaseDate, pagesCount){
    
//     this.name = name;
//     this.releaseDate = releaseDate;
//     this.pagesCount = pagesCount;
//     this.state = 100;
//     this.type = null;
//     }
//     fix(){
//         this.State =  this.State * 1.5;
//     }
//     set State(n){
//         if(n < 0){
//            this.state = 0
//         }
//         else if(n > 100){
//            this.state = 100
//         }
//         else this.state = n;
//     }
//     get State(){
//       return this.state;
//     }
// }

// class Magazine extends PrintEditionItem {
//    constructor(name, releaseDate, pagesCount){
//      super(name, releaseDate, pagesCount);
//      this.type = 'magazine';
//   }

// }

// class Book extends PrintEditionItem {
//    constructor(author, name, releaseDate, pagesCount){
//      super(name, releaseDate, pagesCount);
//      this.type = 'book';
//      this.author = author;
//   }
// }

// class NovelBook  extends Book {
//    constructor(author, name, releaseDate, pagesCount){
//      super(author,name, releaseDate, pagesCount);
//      this.type = 'novel';
//      this.author = author;
//   }
// }

// class FantasticBook  extends Book {
//    constructor(author, name, releaseDate, pagesCount){
//      super(author,name, releaseDate, pagesCount);
//      this.type = 'fantastic';
//      this.author = author;
//   }
// }

// class DetectiveBook extends Book {
//    constructor(author, name, releaseDate, pagesCount){
//      super(author,name, releaseDate, pagesCount);
//      this.type = 'detective';
//      this.author = author;
//   }
// }

// const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15pi)



// class Library {
//   constructor(name) {
//     this.name = name;
//     this.books = [];
//   }
//  addBook(book){
//    if(book.state > 30){
//      this.books.push(book);
//    }
//  }

//  findBookBy(type, value){
//   for(let i = 0; i < this.books.length; i++){
//     let bk = this.books[i];
//     if(bk[type] == value){
//     return bk;
//     } 
//   }
//   return null;
// }

// giveBookByName(bookName){
//   for(let i = 0; i < this.books.length; i++){
//     let nm = this.books[i];
//     if(nm.name ==  bookName){
//       this.books.splice(i, 1);
//       return nm;
//     }
//   }
//   return null;
//   }
// }

// const library = new Library("Библиотека имени Ленина");

// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3



class StudentLog {
  constructor(name){
    this.name = name;
    this.grades = {};
  }

  getName(){
    return this.name;
  }

  addGrade(grade, subject){
    if(typeof(this.grades[subject]) == 'undefined'){
        this.grades[subject] = [];
      }
    if(grade >= 1 && grade <= 5){
       this.grades[subject].push(grade);
    } else {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
    }
     
      return this.grades[subject].length;
  }

  getAverageBySubject(subject){
    if(typeof(this.grades[subject]) == 'undefined' || this.grades[subject].length == 0){
      return 0;
    }
    let avg = 0;
    for(let i = 0; i < this.grades[subject].length; i++){
      avg += this.grades[subject][i];
    }
      avg = avg / this.grades[subject].length;
      return avg;
  }

  getTotalAverage(){
    let subCount = 0;
    let avgOfGrades = 0;
    for(let subject in this.grades){
      for(let i = 0; i < this.grades[subject].length; i++)
      {
        avgOfGrades += this.grades[subject][i];
        subCount++;
      }
    }

    avgOfGrades = avgOfGrades / subCount;
    return avgOfGrades;
  } 
}

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75