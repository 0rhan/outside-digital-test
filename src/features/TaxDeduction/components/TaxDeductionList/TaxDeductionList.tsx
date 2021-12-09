import List from "components/List/List";
import calculateTaxDeduction from "utils/calculateTaxDeduction";
import TaxDeductionPerYear from "./TaxPerYear/TaxPerYear";
import Regular from "components/Typography/Regular";
import { v4 as uuid } from "uuid";
import styled from "@emotion/styled";

interface TaxDeductionListProps {
  salary: string;
}

const TaxDeductionList = ({ salary }: TaxDeductionListProps) => {
  const salaryNumber = Number.parseInt(salary);
  const taxDeductionList = calculateTaxDeduction(salaryNumber);

  const items = taxDeductionList.map((item, index) => {
    const key = uuid();

    const year = index + 1;

    if (taxDeductionList.length === year) {
      return (
        <TaxDeductionPerYear
          key={key}
          taxDeduction={item}
          year={year}
          checked={false}
        />
      );
    }

    return (
      <TaxDeductionPerYear
        key={key}
        taxDeduction={item}
        year={year}
        checked={true}
      />
    );
  });

  return (
    <>
      <ListTitle>Итого можете внести в качестве досрочных:</ListTitle>
      <List>{items}</List>
    </>
  );
};

export default TaxDeductionList;

const ListTitle = styled(Regular)`
  margin-top: 16px;
`;
