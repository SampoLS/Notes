import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./algebraContents";

const AlgebraPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="algebra" length={contentsLength} />
    </>
  );
};

export default AlgebraPage;