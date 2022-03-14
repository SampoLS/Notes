import { memo } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./webpackContents";

// Webpack terms page
const WebpackPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="webpack" length={contentsLength} />
    </>
  );
};

export default memo(WebpackPage);
