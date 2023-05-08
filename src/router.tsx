import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "./pages";
import { Layout } from "./components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
