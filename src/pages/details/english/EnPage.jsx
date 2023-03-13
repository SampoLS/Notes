import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./enContents";

const EnPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="english" length={contentsLength} />
    </>
  );
};

export default EnPage;