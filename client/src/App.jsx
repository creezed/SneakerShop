import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";

import GlobalStyle from "./styles/GlobalStyle";
import { baseTheme } from "./styles/theme";

import AppRouter from "./router/AppRouter";

import { store } from "./store/store";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <ThemeProvider theme={baseTheme}>
                  <GlobalStyle/>
                  <AppRouter/>
              </ThemeProvider>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
