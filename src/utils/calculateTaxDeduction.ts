import checkIsDecimal from "./checkIsDecimal";
import truncateTo2Decimals from "./truncTo2decimals";

const calculateTaxDeduction = (salary: number) => {
  // Максимальный вычет
  const maxTaxDeduction = 260000;

  // Вычет в год
  const taxDeductionPerYear = salary * 12 * 0.13;

  // Кол-во того сколько раз можно будет получить полноценный вычет
  const taxCount = Math.round(maxTaxDeduction / taxDeductionPerYear);

  // Остаток вычета
  const taxPrime = maxTaxDeduction % taxDeductionPerYear;

  let arr: Array<number> = [];

  // Является ли вычет дробным
  const isTaxDeductionDecimal = checkIsDecimal(taxDeductionPerYear);

  // Является ли остаток дробным
  const isTaxPrimeDecimal = checkIsDecimal(taxPrime);

  for (let i = 0; i <= taxCount; i++) {
    if (i !== taxCount) {
      if (isTaxDeductionDecimal) {
        // Обрезать вычет до сотых долей
        const with2Decimals = truncateTo2Decimals(taxDeductionPerYear);
        arr.push(with2Decimals);
      } else {
        arr.push(taxDeductionPerYear);
      }
    } else {
      if (isTaxPrimeDecimal) {
        // Обрезать вычет до сотых долей
        const with2Decimals = truncateTo2Decimals(taxPrime);
        arr.push(with2Decimals);
      } else {
        arr.push(taxPrime);
      }
    }
  }
  return arr;
};

export default calculateTaxDeduction;
