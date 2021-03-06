import styled from "@emotion/styled";
import Checkbox from "components/Controls/Checkbox/Checkbox";
import ListItem from "components/List/ListItem";
import Regular from "components/Typography/Regular";
import numeralsDeclination from "features/TaxDeduction/utils/numeralsDeclination";

interface TaxDeductionPerYearProps {
  taxDeduction: number;
  year: number;
  checked: boolean;
}

const TaxDeductionPerYear = ({
  taxDeduction,
  year,
  checked,
}: TaxDeductionPerYearProps) => {
  // Склонение порядковых числительных
  const yearNumerals = numeralsDeclination(year, ["ый", "ой", "ий"]);

  const sumInEachYear = `${year}-${yearNumerals} год`;

  // Строка налогового вычета
  const taxDeductionString = ` ${taxDeduction} рублей `;

  return (
    <ListItem>
      <Checkbox checked={checked} id={`${year}`} />
      <TaxDeductionText>
        {taxDeductionString}
        <YearCountText as="span">{sumInEachYear}</YearCountText>
      </TaxDeductionText>
    </ListItem>
  );
};

export default TaxDeductionPerYear;

const TaxDeductionText = styled(Regular)`
  font-weight: normal;
  margin-left: 11px;
`;

const YearCountText = styled(Regular)`
  color: #808080;
  font-weight: normal;
`;
