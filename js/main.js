
//------------------- Функция 1 ------------------------------

const getRandomNumber  = function (from, to) {
  if (from < 0) {
    return ('Минимальное число в диапозоне не может быть меньше 0');
  }
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

getRandomNumber(1, 5);


//------------------- Функция 2 ------------------------------


const checkLengthString = function (stringLength, maxSymbols) {
  return (stringLength <= maxSymbols);
};

checkLengthString(109, 100);
