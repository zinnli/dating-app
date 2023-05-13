import { Outlet } from "react-router-dom";
import Layout from "./Layout";

const LayoutRouter = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default LayoutRouter;
