const numeralsDeclination = (value: number, words: Array<string>) => {
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 8 && value < 21) {
    return words[0];
  } else {
  }
  if (num === 2 || num === 6 || num === 7 || num === 8) {
    return words[1];
  } else if (num === 3) {
    return words[2];
  } else if ((num >= 0 && num < 6) || num === 9) {
    return words[0];
  }
};

export default numeralsDeclination;
