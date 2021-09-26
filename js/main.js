
//------------------- Функция 1 ------------------------------

const choosingNumber = function (from, to) {
  return (from >= 0) ? Math.floor(Math.random() * (to - from + 1)) + from : ('Минимальное число в диапозоне не может быть меньше 0');
};

choosingNumber(1, 5);


//------------------- Функция 2 ------------------------------


const checkLengthString = function (lengthString, maxSymbol) {
  return (lengthString <= maxSymbol);
};

checkLengthString(109, 100);
