var roman = function(num) {
  numbers = [];
  while(num > 0){
    if (num >= 1000 ) {
      numbers.push("M");
      num -= 1000;
    }
    else if ((num < 1000) && (num >= 500) && (num > 0)) {
      if (num >= 900) {
        numbers.push('CM');
        num -= 900;
      } else {
        numbers.push('D');
        num -= 500;
      }
    }
    else if ((num < 500) && (num >= 100) && (num > 0)) {
      if (num >= 400) {
        numbers.push('CD');
        num -= 400;
      } else {
        numbers.push('C');
        num -= 100;
      }
    }
    else if ((num < 100) && (num >= 50) && (num > 0)) {
      if (num >= 90) {
        numbers.push('XC');
        num -= 90;
      } else {
        numbers.push('L');
        num -= 50;
      }
    }
    else if ((num < 50) && (num >= 10) && (num > 0)) {
      if (num >= 40) {
        numbers.push('XL');
        num -= 40;
      } else {
        numbers.push('X');
        num -= 10;
      }
    }
    else if ((num < 10) && (num >= 5) && (num > 0)) {
      if (num >= 9) {
        numbers.push('IX');
        num -= 9;
      } else {
        numbers.push('V');
        num -= 5;
      }
    }
    else if ((num < 5) && (num >= 1) && (num > 0)) {
      if (num >= 4) {
        numbers.push('IV');
        num -= 4;
      } else {
        numbers.push('I');
        num -= 1;
      }
    }


  }


  return numbers.join('');
};

module.exports = roman;


  // for (var i = 1; i < (num + 1); i++) {
  //
  //   if (i == 4) {
  //     numbers.push("IV");
  //   } else if (i >)
  //
  //   numbers[i] = "I"
  // }
