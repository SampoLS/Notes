import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./psychologyContents";

const PyschologyPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="psychology" length={contentsLength} />
    </>
  );
};

export default PyschologyPage;
