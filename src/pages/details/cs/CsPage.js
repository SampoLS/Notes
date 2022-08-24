import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./csContents";

// Computer sicence terms page
const CsPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="cs" length={contentsLength} />
    </>
  );
};

export default CsPage;
