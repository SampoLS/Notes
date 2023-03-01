import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./calculusContents";

const CalculusPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="calculus" length={contentsLength} />
    </>
  );
};

export default CalculusPage;
