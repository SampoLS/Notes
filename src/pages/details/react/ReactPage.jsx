import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./reactContents";

// Showing the react page
const ReactPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="react" length={contentsLength} />
    </>
  );
};
export default ReactPage;
