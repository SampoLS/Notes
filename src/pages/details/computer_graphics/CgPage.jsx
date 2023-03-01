import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./cgContents";

// Computer graphics terms page
const CgPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="cg" length={contentsLength} />
    </>
  );
};

export default CgPage;
