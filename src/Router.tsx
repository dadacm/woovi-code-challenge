import { Route, Routes } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout";
import SelectMethod from "./pages/SelectMethod/SelectMethod";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/" element={<SelectMethod />} />
      </Route>
    </Routes>
  );
}
