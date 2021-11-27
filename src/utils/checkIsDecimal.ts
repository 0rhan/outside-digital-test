const checkIsDecimal = (num: number) => {
  const isDecimal = num - Math.floor(num) !== 0;

  return isDecimal;
};

export default checkIsDecimal;
