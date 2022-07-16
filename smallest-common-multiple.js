function smallestCommons(arr) {
  function primeFactors(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return [...primeFactors(i), ...primeFactors(num / i)];
    }
    return [num];
  }

  let LCMFactors = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    const pf = primeFactors(i);
    pf.forEach((val) => {
      const dup = LCMFactors.indexOf(val);
      if (dup != -1) LCMFactors.splice(dup, 1);
    });
    LCMFactors.push(...pf);
  }
  return LCMFactors.reduce((LCM, val) => (LCM = LCM * val));
}
