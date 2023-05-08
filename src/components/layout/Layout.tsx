import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = () => {
  return (
    <Root>
      <RouteLayout>
        <Outlet />
      </RouteLayout>
    </Root>
  );
};

export default Layout;

const Root = styled.main`
  display: flex;
  justify-content: center;
`;

const RouteLayout = styled.div`
  width: 480px;
  height: 100vh;
  background-color: #fff;
`;
