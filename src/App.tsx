import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from './Router';
import { GlobalStyles } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles styles={{}} />
    </BrowserRouter>
  );
}

export default App;
