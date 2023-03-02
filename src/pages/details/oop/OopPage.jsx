import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./oopContents";

const OopPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="oop" length={contentsLength} />
    </>
  );
};

export default OopPage;
