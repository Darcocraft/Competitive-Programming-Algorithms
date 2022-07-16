function convertToRoman(num) {
  const symboles = ["I", "V", "X", "L", "C", "D", "M"];
  let numerals = "";

  //converts single digit with place value to roman numerals
  function getNumerals(digit, place) {
    const i = symboles[place * 2];
    const v = symboles[place * 2 + 1];
    const x = symboles[place * 2 + 2];

    digit = parseInt(digit);
    if (digit <= 3) return i.repeat(digit);
    switch (digit) {
      case 4:
        return i + v;
      case 5:
        return v;
      case 6:
        return v + i;
      case 7:
        return v + i + i;
      case 8:
        return v + i + i + i;
      case 9:
        return i + x;
    }
  }

  const str = num.toString().split("").reverse();
  for (let i = 0; i < str.length; i++) {
    numerals = getNumerals(str[i], i) + numerals;
  }
  return numerals;
}
