import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from "./styles/GlobalStyle";


import { baseTheme } from "./styles/theme";
import Button from "./ui/button/Button";
import {Container} from "./styles/layout/Container";
import { TextInput } from "./ui/textInput/TextInput";

import {useState} from "react";
import {Tumbler} from "./ui/tumbler/Tumbler";
import {Checkbox} from "./ui/checkbox/Checkbox";
import {Select} from "./ui/select/Select";
import {Radio} from "./ui/radio/Radio";
import AppRouter from "./router/AppRouter";

const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
`

function App() {
    const [tumblerCheck, setTumblerCheck] = useState(false)
    const [checkboxCheck, setCheckboxCheck] = useState(false)
    const [selectValue, setSelectValue] = useState("");
    const [radioCheck, setRadioCheck] = useState(false)

  return (
      <BrowserRouter>
          <ThemeProvider theme={baseTheme}>
              <GlobalStyle/>
              <Container>
                  <AppRouter/>
              </Container>
              {/*<Container>*/}
              {/*    <ButtonWrapper>*/}
              {/*        <Button variant="fill" width="max" size="m" borderR='16px' disabled={false}>Нажми</Button>*/}
              {/*        <TextInput*/}
              {/*            fz={'m'}*/}
              {/*            fWeight={'light'}*/}
              {/*            borderR='20px'*/}
              {/*            placeholder={"Email"}*/}
              {/*            error={false}*/}
              {/*            hint="Некоректный Email"*/}
              {/*            theme='search'*/}
              {/*            size={'s'}*/}
              {/*        />*/}
              {/*        <TextInput*/}
              {/*            fz={'m'}*/}
              {/*            fWeight={'light'}*/}
              {/*            borderR='20px'*/}
              {/*            placeholder={"Email"}*/}
              {/*            label={'Email*'}*/}
              {/*            error={true}*/}
              {/*            hint="Некоректный Email"*/}
              {/*            theme='password'*/}
              {/*        />*/}

              {/*        <Tumbler checked={tumblerCheck} onChange={() => setTumblerCheck(!tumblerCheck)}></Tumbler>*/}
              {/*        <Checkbox label='Adidas' fz="xs" checked={checkboxCheck} gap='12px' onChange={() => setCheckboxCheck(!checkboxCheck)}/>*/}

              {/*        <Select*/}
              {/*            setSelectValue={setSelectValue}*/}
              {/*            defaultValue={"Сортировать по"}*/}
              {/*            boxShadow={true}*/}
              {/*            options={[*/}
              {/*                {value: 'new', content: "Новинки"},*/}
              {/*                {value: 'popular', content: "Популярные"},*/}
              {/*                {value: 'base', content: "Все"},*/}
              {/*            ]}*/}
              {/*        />*/}

              {/*        <Radio name='gender' label='Мужчины' id={1} fz="xs" checked={radioCheck} onChange={() => setRadioCheck(!radioCheck)}/>*/}
              {/*        <Radio name='gender' label='Женщины' id={2} fz="xs" checked={radioCheck} onChange={() => setRadioCheck(!radioCheck)}/>*/}

              {/*    </ButtonWrapper>*/}
              {/*</Container>*/}
          </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
