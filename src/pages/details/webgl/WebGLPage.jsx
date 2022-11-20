import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./webglContents";

const WebGLPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="webgl" length={contentsLength} />
    </>
  );
};

export default WebGLPage;
