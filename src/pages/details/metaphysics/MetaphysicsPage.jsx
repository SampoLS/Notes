import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./metaphysicsContents";

const MetaphysicsPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="metaphysics" length={contentsLength} />
    </>
  );
};

export default MetaphysicsPage;
