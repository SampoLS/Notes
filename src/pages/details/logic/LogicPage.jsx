import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./logicContents";

const LogicPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="logic" length={contentsLength} />
    </>
  );
};

export default LogicPage;
