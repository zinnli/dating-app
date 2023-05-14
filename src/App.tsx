import React from "react";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyles from "styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
