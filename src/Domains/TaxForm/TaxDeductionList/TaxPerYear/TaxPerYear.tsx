import styled from "@emotion/styled";
import Checkbox from "UI/Components/Controls/Checkbox/Checkbox";
import ListItem from "UI/Components/List/ListItem";
import Regular from "UI/Components/Typography/Regular";

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
  const yearCountString = year === 2 ? `во ${year}-ой год` : `в ${year}-ый год`;
  const taxDeductionString = `${taxDeduction} рублей `;

  return (
    <ListItem>
      <Checkbox checked={checked} id={`${year}`} />
      <TaxDeductionText>
        {taxDeductionString}
        <YearCountText as="span">{yearCountString}</YearCountText>
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
