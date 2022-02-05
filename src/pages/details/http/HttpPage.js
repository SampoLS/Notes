import { memo } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./httpContents";

// Showing the term contents.
const HttpPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="http" length={contentsLength} />
    </>
  );
};
export default memo(HttpPage);
