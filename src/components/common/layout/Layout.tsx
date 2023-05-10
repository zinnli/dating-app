import { Children } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Root>
      <Header />
      <RouteLayout>{children}</RouteLayout>
      <Footer />
    </Root>
  );
};

export default Layout;

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const RouteLayout = styled.div`
  width: 450px;
  min-height: calc(100vh - 60px);
  background-color: #fff;
`;
