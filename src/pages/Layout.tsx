import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default Layout;
