const truncateTo2Decimals = (decimal: number): number => {
  const decimalString = decimal.toString();

  const matchArray = decimalString.match(/^-?\d+(?:\.\d{0,2})?/);

  if (matchArray?.[0]) {
    const truncatedDecimalString = matchArray[0];

    const decimalNumber = Number.parseFloat(truncatedDecimalString);
    return decimalNumber;
  }

  return decimal;
};

export default truncateTo2Decimals;
