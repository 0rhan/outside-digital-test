import styled from "@emotion/styled";
import { HtmlHTMLAttributes } from "react";

interface ListItemProps extends HtmlHTMLAttributes<HTMLUListElement> {}

const ListItem = ({ children }: ListItemProps) => {
  return <Item>{children}</Item>;
};

export default ListItem;

const Item = styled("li")`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  height: 41px;
  margin-top: 16px;
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray800};
    bottom: 0;
    left: 0;
    width: 100%;
  }
  &:first-of-type {
    margin-top: 0px;
  }
`;
