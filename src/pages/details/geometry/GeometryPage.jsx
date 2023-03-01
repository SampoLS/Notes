import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./geometryContents";

const GeometryPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="geometry" length={contentsLength} />
    </>
  );
};

export default GeometryPage;
