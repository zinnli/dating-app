import { Navigate, Outlet, useLocation } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";

const PrivateRouter = () => {
  const { pathname, search } = useLocation();
  const refreshToken = localStorage.getItem("refreshToken");

  return !!refreshToken ? (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  ) : (
    <Navigate to="/" state={{ from: pathname + search }} />
  );
};

export default PrivateRouter;
