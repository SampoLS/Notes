
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./softwareEnginContents";

const SoftwareEnginPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="software_engineering" length={contentsLength} />
    </>
  );
};

export default SoftwareEnginPage;