import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./physicsContents";

const PhysicsPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="physics" length={contentsLength} />
    </>
  );
};

export default PhysicsPage;
