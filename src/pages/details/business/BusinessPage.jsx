import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./businessContents";

const BusinessPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="business" length={contentsLength} />
    </>
  );
};

export default BusinessPage;