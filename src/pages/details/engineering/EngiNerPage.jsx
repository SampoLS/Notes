import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./engiNerContents";

const EnginNerPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="engineering" length={contentsLength} />
    </>
  );
};

export default EnginNerPage;