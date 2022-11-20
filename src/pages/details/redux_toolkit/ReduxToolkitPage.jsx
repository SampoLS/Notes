import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./reduxToolkitContents";

export default function ReduxToolkit() {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="redux_toolkit" length={contentsLength} />
    </>
  );
}
