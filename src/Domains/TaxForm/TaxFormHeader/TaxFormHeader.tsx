import Title from "UI/Components/Typography/Title";
import Subtitle from "UI/Components/Typography/Subtitle";
import styled from "@emotion/styled";
import { MouseEventHandler } from "react";
import CloseButton from "../CloseButton/CloseButton";

interface TaxFormHeaderProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const TaxFormHeader = ({ onClick }: TaxFormHeaderProps) => {
  return (
    <HeaderContainer>
      <CloseButton onClick={onClick}/>
      <Title>Налоговый вычет</Title>
      <Subtitle>
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </Subtitle>
    </HeaderContainer>
  );
};

export default TaxFormHeader;

const HeaderContainer = styled("div")`
  height: max-content;
`;
