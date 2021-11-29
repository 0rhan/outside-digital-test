import TextButton from "UI/Components/Controls/Buttons/TextButton/TextButton";
import FormContainer from "UI/Components/Controls/Form/FormContainer";
import Form from "UI/Components/Controls/Form/Form";
import Input from "UI/Components/Controls/Input/Input";
import Tag from "UI/Components/DataDisplay/Tag/Tag";
import Regular from "UI/Components/Typography/Regular";
import TaxFormHeader from "./TaxFormHeader/TaxFormHeader";
import styled from "@emotion/styled";
import ButtonFilled from "UI/Components/Controls/Buttons/ButtonFilled";
import TaxDeductionList from "./TaxDeductionList/TaxDeductionList";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

interface TaxFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const TaxForm = ({ setIsOpen }: TaxFormProps) => {
  const [salary, setSalary] = useState<string | undefined>(undefined);
  const [fieldValue, setFieldValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const handleFormClose = () => {
    setIsOpen(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const onlyNumberRegExp = /^[^0]*[1-9]*/;
    if (onlyNumberRegExp.test(value)) {
      setFieldValue(value);
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fieldValue) {
      setSalary(fieldValue);
      setError(false);
    } else {
      setError(true);
      setErrorMessage("Поле обязательно для заполнения");
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <TaxFormHeader onClick={handleFormClose} />
        <Input
          label="Ваша зарплата за месяц"
          placeholder="Введите данные"
          type="number"
          value={fieldValue}
          onChange={onChange}
          error={error}
          errorMessage={errorMessage}
        />
        <TextButton type="submit">Рассчитать</TextButton>
        {salary && <TaxDeductionList salary={salary} />}
        <Select>
          <Regular>Что уменьшаем?</Regular>
          <TagGroup>
            <Tag active={true} type="button">
              Платеж
            </Tag>
            <Tag type="button">Срок</Tag>
          </TagGroup>
        </Select>
      </Form>
      <AddButton type="button">Добавить</AddButton>
    </FormContainer>
  );
};

export default TaxForm;

const Select = styled("div")`
  margin-top: 24px;
  display: grid;
  grid-template: repeat(2, max-content) / max-content;
  @media (min-width: 768px) {
    grid-template: max-content / repeat(2, max-content);
    align-items: center;
    gap: 32px;
  } ;
`;

const TagGroup = styled("div")`
  display: grid;
  grid-template: max-content / repeat(2, max-content);
  margin-top: 24px;
  gap: 16px;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

const AddButton = styled(ButtonFilled)`
  justify-self: center;
`;
