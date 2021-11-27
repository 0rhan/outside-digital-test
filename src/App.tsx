import { ThemeProvider } from "@emotion/react";
import theme from "./UI/styles/theme/theme";
import Modal from "UI/Components/DataDisplay/Modal/Modal";
import StartScreen from "Domains/StartScreen/StartScreen";
import TaxForm from "Domains/TaxForm/TaxForm";
import ButtonOutlined from "UI/Components/Controls/Buttons/ButtonOutlined";
import { MouseEvent, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const openFormHandler = (event:MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <Modal open={isOpen}>
        <TaxForm setIsOpen={setIsOpen} />
      </Modal>
      <StartScreen className="App">
        <ButtonOutlined onClick={openFormHandler}>Налоговый вычет</ButtonOutlined>
      </StartScreen>
    </ThemeProvider>
  );
}

export default App;

