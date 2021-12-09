import { ThemeProvider } from "@emotion/react";
import theme from "components/theme/theme";
import Modal from "components/DataDisplay/Modal/Modal";
import StartScreen from "features/StartScreen/components/StartScreen";
import TaxDeductionForm from "features/TaxDeduction/components/TaxDeductionForm";
import ButtonOutlined from "components/Controls/Buttons/ButtonOutlined";
import { MouseEvent, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openFormHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal open={isOpen}>
        <TaxDeductionForm setIsOpen={setIsOpen} />
      </Modal>
      <StartScreen className="App">
        <ButtonOutlined onClick={openFormHandler}>
          Налоговый вычет
        </ButtonOutlined>
      </StartScreen>
    </ThemeProvider>
  );
}

export default App;

