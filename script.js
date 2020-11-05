function convertToRoman(num) {
  const symboles = ["I", 'V', 'X', 'L', 'C', 'D', 'M']
  let numerals = ''
  function getNumerals(digit, scl) {
    const i = symboles[scl * 2]
    const v = symboles[scl * 2 + 1]
    const a = parseInt(digit)
    if (a <= 3) return i.repeat(a)
    switch (a) {
      case 4:
        return i + v
      case 5:
        return v
      case 6:
        return v + i
      case 7:
        return v + i + i
      case 8:
        return v + i + i + i
      case 9:
        return i + symboles[scl * 2 + 2]
    }
  }
  const str = num.toString().split('').reverse()
  for (let i = 0; i < str.length; i++) {
    console.log(getNumerals(str[i], i))
    numerals = getNumerals(str[i], i) + numerals
  }
  console.log(num, numerals)
  return numerals;
}

convertToRoman(31);
