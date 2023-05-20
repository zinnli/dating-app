import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Like, LikeList, Login, Mypage, Register } from "./pages";
import { LayoutRouter } from "components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRouter />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/like" element={<Like />} />
          <Route path="/likelist" element={<LikeList />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
