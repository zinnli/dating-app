import { Navigate, Outlet } from "react-router-dom";
import { PublicLayout } from "../layout";

const PublicRouter = () => {
  const refreshToken = localStorage.getItem("refreshToken");

  return !!refreshToken ? (
    <Navigate to="/mypage" />
  ) : (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
};

export default PublicRouter;
