import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./mathContents";

const MathPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="math" length={contentsLength} />
    </>
  );
};

export default MathPage;
