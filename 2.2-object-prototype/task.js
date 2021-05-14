
function isPalindrome() {
  let str = this;
  str = str.replace(/\s/g,"");
  str = str.toUpperCase();

  let mid = Math.floor(str.length / 2);

  for ( let i = 0; i < mid; i++ ) {
      if (str[i] !== str[str.length - 1 - i]) {
          return false;
      }
  }

  return true;
}

String.prototype.isPalindrome = isPalindrome;




function getAverageMark(marks) {
    let average = 0;
    for(let i = 0; i < marks.length; i++) {
        average += marks[i];
    }
        average = average / marks.length;
        let roundedAverage = Math.round(average);
    return roundedAverage;


function checkBirthday(dateOfBirthday){
  let vals = dateOfBirthday.split('-');
  let now = new Date().getTime();
  let date = new Date( vals[0], vals[1] - 1, vals[2]);
  let birthday = date.getTime() ;
  let diff = now - birthday - (4 * 60 * 60 * 24 * 1000);
  let millisecsinyear = 1000 * 60 * 60 * 24 * 365;
  let age = diff / millisecsinyear;
  if(age > 18){
      return true;
  } 
      return false;
}

// Я не понял как высчитывать количиство лет на основании миллисекунд 
// с учетом високосных годов в одну строчку или делением.
// Например: между 1 февраля 2000 и 1 февраля 2020 и между 1 марта 2000 и 1 марта 2020 разница
// в миллисекундах разная. Хотя в годах разница 18 лет.