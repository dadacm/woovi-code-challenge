import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from './Router';
import { GlobalStyles } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
