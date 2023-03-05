import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./epistemologyContents";

const EpistemologyPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="epistemology" length={contentsLength} />
    </>
  );
};

export default EpistemologyPage;