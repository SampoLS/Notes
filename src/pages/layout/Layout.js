import { Outlet } from "react-router-dom";
import Head from "../../components/Head";

const Layout = () => {
  return (
    <>
      <Head />
      <Outlet />
    </>
  );
};
export default Layout;
